(function () {
  function injectStyles() {
    var style = document.createElement('style');
    style.textContent = [
      '#comment-toggle-btn{position:absolute;top:10px;left:50%;transform:translateX(-50%);z-index:1000;padding:10px 16px;background:#fff;border:2px solid #333;border-radius:6px;font-size:14px;font-weight:bold;cursor:pointer;box-shadow:0 2px 6px rgba(0,0,0,0.3);font-family:sans-serif;}',
      '#comment-toggle-btn.active{background:#ff6b35;color:#fff;border-color:#ff6b35;}',
      '#comment-modal-backdrop{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);z-index:2000;align-items:center;justify-content:center;}',
      '#comment-modal{background:#fff;padding:20px;border-radius:8px;width:320px;max-width:90%;box-shadow:0 4px 20px rgba(0,0,0,0.4);font-family:sans-serif;}',
      '#comment-modal h3{margin-top:0;font-size:16px;}',
      '#comment-modal textarea{width:100%;height:80px;box-sizing:border-box;margin:10px 0;padding:8px;font-family:inherit;font-size:14px;resize:vertical;}',
      '#comment-modal .meta{font-size:12px;color:#666;margin-bottom:8px;}',
      '#comment-modal .btn-row{display:flex;justify-content:flex-end;gap:8px;}',
      '#comment-modal button{padding:8px 14px;border-radius:4px;border:none;cursor:pointer;font-size:14px;}',
      '#comment-submit-btn{background:#ff6b35;color:#fff;}',
      '#comment-cancel-btn{background:#eee;}',
      '#comment-list-toggle-btn{position:absolute;bottom:30px;left:10px;z-index:1000;padding:10px 16px;background:#fff;border:2px solid #333;border-radius:6px;font-size:14px;font-weight:bold;cursor:pointer;box-shadow:0 2px 6px rgba(0,0,0,0.3);font-family:sans-serif;}',
      '#comment-list-panel{position:fixed;top:0;left:0;height:100%;width:320px;max-width:85vw;background:#fff;box-shadow:2px 0 10px rgba(0,0,0,0.3);z-index:1500;transform:translateX(-100%);transition:transform .25s ease;display:flex;flex-direction:column;font-family:sans-serif;}',
      '#comment-list-panel.open{transform:translateX(0);}',
      '#comment-list-header{padding:16px;border-bottom:1px solid #ddd;display:flex;justify-content:space-between;align-items:center;font-weight:bold;}',
      '#comment-list-close{background:none;border:none;font-size:18px;cursor:pointer;padding:0 4px;}',
      '#comment-list-items{overflow-y:auto;flex:1;}',
      '.comment-list-item{padding:12px 16px;border-bottom:1px solid #eee;cursor:pointer;}',
      '.comment-list-item:hover{background:#f7f7f7;}',
      '.comment-list-item .clip-text{font-size:14px;color:#222;margin-bottom:4px;white-space:normal;word-break:break-word;}',
      '.comment-list-item .clip-meta{font-size:11px;color:#888;}',
      '.comment-list-empty{padding:16px;color:#999;font-size:13px;}'
    ].join('\n');
    document.head.appendChild(style);
  }

  function injectMarkup() {
    var wrap = document.createElement('div');
    wrap.innerHTML =
      '<button id="comment-toggle-btn">\uD83D\uDCAC Add Comment</button>' +
      '<button id="comment-list-toggle-btn">\uD83D\uDCCB Comments (0)</button>' +
      '<div id="comment-list-panel">' +
        '<div id="comment-list-header"><span>Comments</span><button id="comment-list-close">\u2715</button></div>' +
        '<div id="comment-list-items"><div class="comment-list-empty">No comments yet.</div></div>' +
      '</div>' +
      '<div id="comment-modal-backdrop">' +
        '<div id="comment-modal">' +
          '<h3 id="comment-modal-title">Add a comment</h3>' +
          '<div id="comment-modal-meta" class="meta"></div>' +
          '<textarea id="comment-modal-text" placeholder="Type your comment..."></textarea>' +
          '<div class="btn-row">' +
            '<button id="comment-cancel-btn">Close</button>' +
            '<button id="comment-submit-btn">Post</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    while (wrap.firstChild) document.body.appendChild(wrap.firstChild);
  }

  function init() {
    injectStyles();
    injectMarkup();

    var commentSource = new ol.source.Vector();
    var commentLayer = new ol.layer.Vector({
      source: commentSource,
      style: new ol.style.Style({
        image: new ol.style.Circle({
          radius: 8,
          fill: new ol.style.Fill({ color: '#ff6b35' }),
          stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 })
        })
      })
    });
    map.addLayer(commentLayer);

    var addMode = false;
    var pendingCoordinate = null;
    var toggleBtn = document.getElementById('comment-toggle-btn');
    var backdrop = document.getElementById('comment-modal-backdrop');
    var modalTitle = document.getElementById('comment-modal-title');
    var modalMeta = document.getElementById('comment-modal-meta');
    var modalText = document.getElementById('comment-modal-text');
    var submitBtn = document.getElementById('comment-submit-btn');
    var cancelBtn = document.getElementById('comment-cancel-btn');
    var listToggleBtn = document.getElementById('comment-list-toggle-btn');
    var listPanel = document.getElementById('comment-list-panel');
    var listClose = document.getElementById('comment-list-close');
    var listItemsEl = document.getElementById('comment-list-items');

    function openAddModal() {
      modalTitle.textContent = 'Add a comment';
      modalMeta.textContent = '';
      modalText.value = '';
      modalText.removeAttribute('readonly');
      submitBtn.style.display = 'inline-block';
      backdrop.style.display = 'flex';
    }

    function openViewModal(comment) {
      modalTitle.textContent = 'Comment';
      var when = new Date(comment.timestamp).toLocaleString();
      modalMeta.textContent = comment.email + ' \u2014 ' + when;
      modalText.value = comment.text;
      modalText.setAttribute('readonly', 'readonly');
      submitBtn.style.display = 'none';
      backdrop.style.display = 'flex';
    }

    function closeModal() {
      backdrop.style.display = 'none';
      modalText.removeAttribute('readonly');
      pendingCoordinate = null;
    }

    cancelBtn.addEventListener('click', closeModal);

    submitBtn.addEventListener('click', function () {
      if (!pendingCoordinate) return;
      var text = modalText.value.trim();
      if (!text) return;
      var lonLat = ol.proj.toLonLat(pendingCoordinate, map.getView().getProjection());
      fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lng: lonLat[0], lat: lonLat[1], text: text })
      })
        .then(function (r) { return r.json(); })
        .then(function (comment) {
          addMarker(comment);
          refreshCommentList();
          closeModal();
          setAddMode(false);
        })
        .catch(function (err) {
          alert('Could not post comment. Please try again.');
          console.error(err);
        });
    });

    function setAddMode(on) {
      addMode = on;
      toggleBtn.classList.toggle('active', on);
      toggleBtn.textContent = on ? 'Click map to place comment' : '\uD83D\uDCAC Add Comment';
      map.getTargetElement().style.cursor = on ? 'crosshair' : '';
    }

    toggleBtn.addEventListener('click', function () { setAddMode(!addMode); });

    function addMarker(comment) {
      var feature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([comment.lng, comment.lat], map.getView().getProjection()))
      });
      feature.set('commentData', comment);
      commentSource.addFeature(feature);
    }

    function refreshCommentList() {
      var features = commentSource.getFeatures();
      listToggleBtn.textContent = '\uD83D\uDCCB Comments (' + features.length + ')';
      listItemsEl.innerHTML = '';

      if (features.length === 0) {
        var empty = document.createElement('div');
        empty.className = 'comment-list-empty';
        empty.textContent = 'No comments yet.';
        listItemsEl.appendChild(empty);
        return;
      }

      var sorted = features.slice().sort(function (a, b) {
        return b.get('commentData').timestamp - a.get('commentData').timestamp;
      });

      sorted.forEach(function (feature) {
        var data = feature.get('commentData');
        var item = document.createElement('div');
        item.className = 'comment-list-item';

        var textEl = document.createElement('div');
        textEl.className = 'clip-text';
        var text = data.text || '';
        textEl.textContent = text.length > 80 ? text.slice(0, 80) + '\u2026' : text;

        var metaEl = document.createElement('div');
        metaEl.className = 'clip-meta';
        metaEl.textContent = data.email + ' \u2014 ' + new Date(data.timestamp).toLocaleString();

        item.appendChild(textEl);
        item.appendChild(metaEl);

        item.addEventListener('click', function () {
          map.getView().animate({
            center: feature.getGeometry().getCoordinates(),
            zoom: 19,
            duration: 600
          });
          openViewModal(data);
          listPanel.classList.remove('open');
        });

        listItemsEl.appendChild(item);
      });
    }

    listToggleBtn.addEventListener('click', function () { listPanel.classList.toggle('open'); });
    listClose.addEventListener('click', function () { listPanel.classList.remove('open'); });

    map.on('singleclick', function (evt) {
      if (addMode) {
        pendingCoordinate = evt.coordinate;
        openAddModal();
        return;
      }
      var hit = map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
        if (layer === commentLayer) return feature;
      });
      if (hit) openViewModal(hit.get('commentData'));
    });

    fetch('/api/comments')
      .then(function (r) { return r.json(); })
      .then(function (comments) {
        comments.forEach(function (c) {
          if (c && c.lat !== undefined && c.lng !== undefined) addMarker(c);
        });
        refreshCommentList();
      })
      .catch(function (err) { console.error('Could not load comments', err); });
  }

  if (typeof map !== 'undefined') {
    init();
  } else {
    var tries = 0;
    var iv = setInterval(function () {
      tries++;
      if (typeof map !== 'undefined') {
        clearInterval(iv);
        init();
      } else if (tries > 50) {
        clearInterval(iv);
        console.error('comments.js: map object never became available.');
      }
    }, 100);
  }
})();
