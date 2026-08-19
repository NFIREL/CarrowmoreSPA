export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/comments") {
      if (request.method === "GET") {
        const list = await env.COMMENTS.list();
        const comments = await Promise.all(
          list.keys.map((k) => env.COMMENTS.get(k.name, "json"))
        );
        return new Response(JSON.stringify(comments), {
          headers: { "Content-Type": "application/json" },
        });
      }

      if (request.method === "POST") {
        const body = await request.json();
        const email =
          request.headers.get("Cf-Access-Authenticated-User-Email") || "unknown";
        const id = crypto.randomUUID();
        const comment = {
          id,
          lat: body.lat,
          lng: body.lng,
          text: body.text,
          email,
          timestamp: Date.now(),
        };
        await env.COMMENTS.put(id, JSON.stringify(comment));
        return new Response(JSON.stringify(comment), {
          headers: { "Content-Type": "application/json" },
        });
      }

      return new Response("Method not allowed", { status: 405 });
    }

    const response = await env.ASSETS.fetch(request);

    const contentType = response.headers.get("Content-Type") || "";
    if (contentType.includes("text/html")) {
      return new HTMLRewriter()
        .on("body", {
          element(element) {
            element.append('<script src="/comments.js"></script>', { html: true });
          },
        })
        .transform(response);
    }

    return response;
  },
};
