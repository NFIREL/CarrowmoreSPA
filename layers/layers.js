var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_FolioInteractioSPAAssessment_1 = new ol.format.GeoJSON();
var features_FolioInteractioSPAAssessment_1 = format_FolioInteractioSPAAssessment_1.readFeatures(json_FolioInteractioSPAAssessment_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FolioInteractioSPAAssessment_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FolioInteractioSPAAssessment_1.addFeatures(features_FolioInteractioSPAAssessment_1);
var lyr_FolioInteractioSPAAssessment_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FolioInteractioSPAAssessment_1, 
                style: style_FolioInteractioSPAAssessment_1,
                popuplayertitle: 'Folio Interactio (SPA Assessment)',
                interactive: true,
                title: '<img src="styles/legend/FolioInteractioSPAAssessment_1.png" /> Folio Interactio (SPA Assessment)'
            });
var format_SPAClippedtoLandowners_2 = new ol.format.GeoJSON();
var features_SPAClippedtoLandowners_2 = format_SPAClippedtoLandowners_2.readFeatures(json_SPAClippedtoLandowners_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPAClippedtoLandowners_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPAClippedtoLandowners_2.addFeatures(features_SPAClippedtoLandowners_2);
var lyr_SPAClippedtoLandowners_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPAClippedtoLandowners_2, 
                style: style_SPAClippedtoLandowners_2,
                popuplayertitle: 'SPA Clipped to Landowners ',
                interactive: true,
    title: 'SPA Clipped to Landowners <br />\
    <img src="styles/legend/SPAClippedtoLandowners_2_0.png" /> High<br />\
    <img src="styles/legend/SPAClippedtoLandowners_2_1.png" /> Medium<br />\
    <img src="styles/legend/SPAClippedtoLandowners_2_2.png" /> Low<br />\
    <img src="styles/legend/SPAClippedtoLandowners_2_3.png" /> N/A<br />' });
var format_SPAAnalysis02LoadOutline_3 = new ol.format.GeoJSON();
var features_SPAAnalysis02LoadOutline_3 = format_SPAAnalysis02LoadOutline_3.readFeatures(json_SPAAnalysis02LoadOutline_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPAAnalysis02LoadOutline_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPAAnalysis02LoadOutline_3.addFeatures(features_SPAAnalysis02LoadOutline_3);
var lyr_SPAAnalysis02LoadOutline_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPAAnalysis02LoadOutline_3, 
                style: style_SPAAnalysis02LoadOutline_3,
                popuplayertitle: 'SPA Analysis 02 Load Outline',
                interactive: true,
                title: '<img src="styles/legend/SPAAnalysis02LoadOutline_3.png" /> SPA Analysis 02 Load Outline'
            });
var format_SPAAnalysis02BodyOutline_4 = new ol.format.GeoJSON();
var features_SPAAnalysis02BodyOutline_4 = format_SPAAnalysis02BodyOutline_4.readFeatures(json_SPAAnalysis02BodyOutline_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPAAnalysis02BodyOutline_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPAAnalysis02BodyOutline_4.addFeatures(features_SPAAnalysis02BodyOutline_4);
var lyr_SPAAnalysis02BodyOutline_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPAAnalysis02BodyOutline_4, 
                style: style_SPAAnalysis02BodyOutline_4,
                popuplayertitle: 'SPA Analysis 02 Body Outline',
                interactive: true,
                title: '<img src="styles/legend/SPAAnalysis02BodyOutline_4.png" /> SPA Analysis 02 Body Outline'
            });
var format_SPAAnalysis02Wheelpath_5 = new ol.format.GeoJSON();
var features_SPAAnalysis02Wheelpath_5 = format_SPAAnalysis02Wheelpath_5.readFeatures(json_SPAAnalysis02Wheelpath_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPAAnalysis02Wheelpath_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPAAnalysis02Wheelpath_5.addFeatures(features_SPAAnalysis02Wheelpath_5);
var lyr_SPAAnalysis02Wheelpath_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPAAnalysis02Wheelpath_5, 
                style: style_SPAAnalysis02Wheelpath_5,
                popuplayertitle: 'SPA Analysis 02 Wheelpath',
                interactive: true,
                title: '<img src="styles/legend/SPAAnalysis02Wheelpath_5.png" /> SPA Analysis 02 Wheelpath'
            });
var format_SPAAnalysis02Blade_6 = new ol.format.GeoJSON();
var features_SPAAnalysis02Blade_6 = format_SPAAnalysis02Blade_6.readFeatures(json_SPAAnalysis02Blade_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPAAnalysis02Blade_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPAAnalysis02Blade_6.addFeatures(features_SPAAnalysis02Blade_6);
var lyr_SPAAnalysis02Blade_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPAAnalysis02Blade_6, 
                style: style_SPAAnalysis02Blade_6,
                popuplayertitle: 'SPA Analysis 02 Blade',
                interactive: true,
                title: '<img src="styles/legend/SPAAnalysis02Blade_6.png" /> SPA Analysis 02 Blade'
            });
var format_SPAAnalysis02Truck_7 = new ol.format.GeoJSON();
var features_SPAAnalysis02Truck_7 = format_SPAAnalysis02Truck_7.readFeatures(json_SPAAnalysis02Truck_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPAAnalysis02Truck_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPAAnalysis02Truck_7.addFeatures(features_SPAAnalysis02Truck_7);
var lyr_SPAAnalysis02Truck_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPAAnalysis02Truck_7, 
                style: style_SPAAnalysis02Truck_7,
                popuplayertitle: 'SPA Analysis 02 Truck',
                interactive: true,
                title: '<img src="styles/legend/SPAAnalysis02Truck_7.png" /> SPA Analysis 02 Truck'
            });
var format_RoadEdgefromRoadSurvey_8 = new ol.format.GeoJSON();
var features_RoadEdgefromRoadSurvey_8 = format_RoadEdgefromRoadSurvey_8.readFeatures(json_RoadEdgefromRoadSurvey_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadEdgefromRoadSurvey_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadEdgefromRoadSurvey_8.addFeatures(features_RoadEdgefromRoadSurvey_8);
var lyr_RoadEdgefromRoadSurvey_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadEdgefromRoadSurvey_8, 
                style: style_RoadEdgefromRoadSurvey_8,
                popuplayertitle: 'Road Edge from Road Survey',
                interactive: true,
                title: '<img src="styles/legend/RoadEdgefromRoadSurvey_8.png" /> Road Edge from Road Survey'
            });
var format_DashedYellowLinefromRoadSurvey_9 = new ol.format.GeoJSON();
var features_DashedYellowLinefromRoadSurvey_9 = format_DashedYellowLinefromRoadSurvey_9.readFeatures(json_DashedYellowLinefromRoadSurvey_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DashedYellowLinefromRoadSurvey_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DashedYellowLinefromRoadSurvey_9.addFeatures(features_DashedYellowLinefromRoadSurvey_9);
var lyr_DashedYellowLinefromRoadSurvey_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DashedYellowLinefromRoadSurvey_9, 
                style: style_DashedYellowLinefromRoadSurvey_9,
                popuplayertitle: 'Dashed Yellow Line from Road Survey',
                interactive: true,
                title: '<img src="styles/legend/DashedYellowLinefromRoadSurvey_9.png" /> Dashed Yellow Line from Road Survey'
            });
var format_WallsfromRoadSurvey_10 = new ol.format.GeoJSON();
var features_WallsfromRoadSurvey_10 = format_WallsfromRoadSurvey_10.readFeatures(json_WallsfromRoadSurvey_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WallsfromRoadSurvey_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WallsfromRoadSurvey_10.addFeatures(features_WallsfromRoadSurvey_10);
var lyr_WallsfromRoadSurvey_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WallsfromRoadSurvey_10, 
                style: style_WallsfromRoadSurvey_10,
                popuplayertitle: 'Walls from Road Survey',
                interactive: true,
                title: '<img src="styles/legend/WallsfromRoadSurvey_10.png" /> Walls from Road Survey'
            });
var format_FencefromRoadSurvey_11 = new ol.format.GeoJSON();
var features_FencefromRoadSurvey_11 = format_FencefromRoadSurvey_11.readFeatures(json_FencefromRoadSurvey_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FencefromRoadSurvey_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FencefromRoadSurvey_11.addFeatures(features_FencefromRoadSurvey_11);
var lyr_FencefromRoadSurvey_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FencefromRoadSurvey_11, 
                style: style_FencefromRoadSurvey_11,
                popuplayertitle: 'Fence from Road Survey',
                interactive: true,
                title: '<img src="styles/legend/FencefromRoadSurvey_11.png" /> Fence from Road Survey'
            });
var format_VegetationfromRoadSurvey_12 = new ol.format.GeoJSON();
var features_VegetationfromRoadSurvey_12 = format_VegetationfromRoadSurvey_12.readFeatures(json_VegetationfromRoadSurvey_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VegetationfromRoadSurvey_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VegetationfromRoadSurvey_12.addFeatures(features_VegetationfromRoadSurvey_12);
var lyr_VegetationfromRoadSurvey_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VegetationfromRoadSurvey_12, 
                style: style_VegetationfromRoadSurvey_12,
                popuplayertitle: 'Vegetation from Road Survey',
                interactive: true,
                title: '<img src="styles/legend/VegetationfromRoadSurvey_12.png" /> Vegetation from Road Survey'
            });
var format_OHLfromRoadSurvey_13 = new ol.format.GeoJSON();
var features_OHLfromRoadSurvey_13 = format_OHLfromRoadSurvey_13.readFeatures(json_OHLfromRoadSurvey_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OHLfromRoadSurvey_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OHLfromRoadSurvey_13.addFeatures(features_OHLfromRoadSurvey_13);
var lyr_OHLfromRoadSurvey_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OHLfromRoadSurvey_13, 
                style: style_OHLfromRoadSurvey_13,
                popuplayertitle: 'OHL from Road Survey',
                interactive: true,
                title: '<img src="styles/legend/OHLfromRoadSurvey_13.png" /> OHL from Road Survey'
            });
var group_SiteDetails = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Site Details'});
var group_DraftSiteLayout1InitialSiteLayoutfromProspecting = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Draft Site Layout (1) - Initial Site Layout from Prospecting'});
var group_DraftSiteLayout2AlterredRoadandTurbines = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Draft Site Layout (2) - Alterred Road and Turbines'});
var group_DraftSiteLayout3SeanColeman = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Draft Site Layout (3) - Sean Coleman '});
var group_215Degrees = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '215 Degrees'});
var group_DraftSiteLayout43TurbineBestEllipse = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Draft Site Layout (4) - 3 Turbine Best Ellipse'});
var group_DraftSiteLayout5DarbyWardeAccess = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Draft Site Layout (5) - Darby Warde Access'});
var group_DraftSiteLayout6RoadChange = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Draft Site Layout (6) - Road Change'});
var group_Extra = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Extra'});
var group_20kmBuffer = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '20km Buffer'});
var group_CarrowmoreEnvironmentalConsiderations = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Carrowmore Environmental Considerations'});
var group_HousingSetback = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Housing Setback'});
var group_VacantAddressesExcluded = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Vacant Addresses Excluded'});
var group_VacantAddressesIncluded = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Vacant Addresses Included'});
var group_AutotrackanalysisE17501export = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Autotrack analysis E175 01 export'});
var group_AutotrackanalysisE17502exportminimiseNF = new ol.layer.Group({
                                layers: [lyr_FolioInteractioSPAAssessment_1,lyr_SPAClippedtoLandowners_2,lyr_SPAAnalysis02LoadOutline_3,lyr_SPAAnalysis02BodyOutline_4,lyr_SPAAnalysis02Wheelpath_5,lyr_SPAAnalysis02Blade_6,lyr_SPAAnalysis02Truck_7,],
                                fold: 'close',
                                title: 'Autotrack analysis E175 02 export (minimise NF)'});
var group_AutotrackanalysisE17502export = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Autotrack analysis E175 02 export'});
var group_CarrowmoreHorizonTopographicSurvey = new ol.layer.Group({
                                layers: [lyr_RoadEdgefromRoadSurvey_8,lyr_DashedYellowLinefromRoadSurvey_9,lyr_WallsfromRoadSurvey_10,lyr_FencefromRoadSurvey_11,lyr_VegetationfromRoadSurvey_12,lyr_OHLfromRoadSurvey_13,],
                                fold: 'close',
                                title: 'Carrowmore Horizon Topographic Survey'});
var group_CarrowmoreRoadsurvey2017 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Carrowmore Road survey (2017)'});
var group_AutotrackanalysisE17501export = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Autotrack analysis E175 01 export '});
var group_EnvironmentalGridwithin2kmofEdgeofRoad = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Environmental & Grid within 2km of Edge of Road'});
var group_TuamFoxhallPotentialSiteEntrance = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Tuam -> Foxhall -> Potential Site Entrance'});
var group_Archive = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Archive'});
var group_DraftGridRoute146km = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Draft Grid Route 1 - 4.6km'});
var group_DraftGridRoute252km = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Draft Grid Route 2 - 5.2km'});
var group_DraftGridRoute363km = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Draft Grid Route 3 - 6.3km'});
var group_DraftGridRoute4459km = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Draft Grid Route 4 - 4.59km'});
var group_Version1 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Version 1'});
var group_DraftGridRoute63935km = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Draft Grid Route 6 - 3.935km'});
var group_GridLands = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Grid Lands'});
var group_JimStaffordData = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Jim Stafford Data'});
var group_DraftGridRoute74044km = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Draft Grid Route 7 - 4.044km'});
var group_DraftGridRoute8414km = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Draft Grid Route 8  - 4.14km'});
var group_ExtraGridLandsforConsideration = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Extra Grid Lands for Consideration'});
var group_Grid = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Grid'});
var group_SiteLands = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Site Lands'});
var group_PotentialExtra = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Potential Extra'});
var group_SubstationGridLand = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Substation / Grid Land'});
var group_Georeferenced = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Georeferenced'});
var group_Mapping = new ol.layer.Group({
                                layers: [lyr_ESRISatellite_0,],
                                fold: 'close',
                                title: 'Mapping'});

lyr_ESRISatellite_0.setVisible(true);lyr_FolioInteractioSPAAssessment_1.setVisible(true);lyr_SPAClippedtoLandowners_2.setVisible(true);lyr_SPAAnalysis02LoadOutline_3.setVisible(true);lyr_SPAAnalysis02BodyOutline_4.setVisible(true);lyr_SPAAnalysis02Wheelpath_5.setVisible(true);lyr_SPAAnalysis02Blade_6.setVisible(true);lyr_SPAAnalysis02Truck_7.setVisible(true);lyr_RoadEdgefromRoadSurvey_8.setVisible(true);lyr_DashedYellowLinefromRoadSurvey_9.setVisible(true);lyr_WallsfromRoadSurvey_10.setVisible(true);lyr_FencefromRoadSurvey_11.setVisible(true);lyr_VegetationfromRoadSurvey_12.setVisible(true);lyr_OHLfromRoadSurvey_13.setVisible(true);
var layersList = [group_Mapping,group_AutotrackanalysisE17502exportminimiseNF,group_CarrowmoreHorizonTopographicSurvey];
lyr_FolioInteractioSPAAssessment_1.set('fieldAliases', {'gid': 'gid', 'localid': 'localid', 'Area_Ha': 'Area_Ha', 'Area_Ac': 'Area_Ac', 'SPACode': 'SPACode', 'SPAName': 'SPAName', 'SPAFolio': 'SPAFolio', 'SPADetails': 'SPADetails', 'SPAAddress': 'SPAAddress', });
lyr_SPAClippedtoLandowners_2.set('fieldAliases', {'localid': 'localid', 'SPAName': 'SPAName', 'SPAFolio': 'SPAFolio', 'SPADetails': 'SPADetails', 'SPAAddress': 'SPAAddress', 'Work': 'Work', 'Severity': 'Severity', 'Photo': 'Photo', 'Area (Ha)': 'Area (Ha)', 'Area (Ac)': 'Area (Ac)', 'Area (SqM)': 'Area (SqM)', });
lyr_SPAAnalysis02LoadOutline_3.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_SPAAnalysis02BodyOutline_4.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_SPAAnalysis02Wheelpath_5.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_SPAAnalysis02Blade_6.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_SPAAnalysis02Truck_7.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_RoadEdgefromRoadSurvey_8.set('fieldAliases', {'FID': 'FID', 'Details': 'Details', });
lyr_DashedYellowLinefromRoadSurvey_9.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'width': 'width', });
lyr_WallsfromRoadSurvey_10.set('fieldAliases', {'Details': 'Details', });
lyr_FencefromRoadSurvey_11.set('fieldAliases', {'Details': 'Details', });
lyr_VegetationfromRoadSurvey_12.set('fieldAliases', {'Details': 'Details', });
lyr_OHLfromRoadSurvey_13.set('fieldAliases', {'Details': 'Details', });
lyr_FolioInteractioSPAAssessment_1.set('fieldImages', {'gid': 'TextEdit', 'localid': 'TextEdit', 'Area_Ha': 'TextEdit', 'Area_Ac': 'TextEdit', 'SPACode': '', 'SPAName': '', 'SPAFolio': '', 'SPADetails': '', 'SPAAddress': '', });
lyr_SPAClippedtoLandowners_2.set('fieldImages', {'localid': 'TextEdit', 'SPAName': 'TextEdit', 'SPAFolio': 'TextEdit', 'SPADetails': 'TextEdit', 'SPAAddress': 'TextEdit', 'Work': 'TextEdit', 'Severity': 'TextEdit', 'Photo': 'ExternalResource', 'Area (Ha)': '', 'Area (Ac)': '', 'Area (SqM)': '', });
lyr_SPAAnalysis02LoadOutline_3.set('fieldImages', {'fid': '', 'handle': '', 'block': '', 'etype': '', 'space': '', 'layer': '', 'olinetype': '', 'linetype': '', 'color': '', 'ocolor': '', 'color24': '', 'transparen': '', 'lweight': '', 'linewidth': '', 'ltscale': '', 'visible': '', 'width': '', 'thickness': '', 'ext': '', });
lyr_SPAAnalysis02BodyOutline_4.set('fieldImages', {'fid': '', 'handle': '', 'block': '', 'etype': '', 'space': '', 'layer': '', 'olinetype': '', 'linetype': '', 'color': '', 'ocolor': '', 'color24': '', 'transparen': '', 'lweight': '', 'linewidth': '', 'ltscale': '', 'visible': '', 'width': '', 'thickness': '', 'ext': '', });
lyr_SPAAnalysis02Wheelpath_5.set('fieldImages', {'fid': '', 'handle': '', 'block': '', 'etype': '', 'space': '', 'layer': '', 'olinetype': '', 'linetype': '', 'color': '', 'ocolor': '', 'color24': '', 'transparen': '', 'lweight': '', 'linewidth': '', 'ltscale': '', 'visible': '', 'width': '', 'thickness': '', 'ext': '', });
lyr_SPAAnalysis02Blade_6.set('fieldImages', {'fid': '', 'handle': '', 'block': '', 'etype': '', 'space': '', 'layer': '', 'olinetype': '', 'linetype': '', 'color': '', 'ocolor': '', 'color24': '', 'transparen': '', 'lweight': '', 'linewidth': '', 'ltscale': '', 'visible': '', 'width': '', 'thickness': '', 'ext': '', });
lyr_SPAAnalysis02Truck_7.set('fieldImages', {'fid': '', 'handle': '', 'block': '', 'etype': '', 'space': '', 'layer': '', 'olinetype': '', 'linetype': '', 'color': '', 'ocolor': '', 'color24': '', 'transparen': '', 'lweight': '', 'linewidth': '', 'ltscale': '', 'visible': '', 'width': '', 'thickness': '', 'ext': '', });
lyr_RoadEdgefromRoadSurvey_8.set('fieldImages', {'FID': 'TextEdit', 'Details': '', });
lyr_DashedYellowLinefromRoadSurvey_9.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'width': 'TextEdit', });
lyr_WallsfromRoadSurvey_10.set('fieldImages', {'Details': 'TextEdit', });
lyr_FencefromRoadSurvey_11.set('fieldImages', {'Details': 'TextEdit', });
lyr_VegetationfromRoadSurvey_12.set('fieldImages', {'Details': 'TextEdit', });
lyr_OHLfromRoadSurvey_13.set('fieldImages', {'Details': 'TextEdit', });
lyr_FolioInteractioSPAAssessment_1.set('fieldLabels', {'gid': 'header label - visible with data', 'localid': 'header label - visible with data', 'Area_Ha': 'header label - visible with data', 'Area_Ac': 'header label - visible with data', 'SPACode': 'header label - visible with data', 'SPAName': 'header label - visible with data', 'SPAFolio': 'header label - visible with data', 'SPADetails': 'header label - visible with data', 'SPAAddress': 'header label - visible with data', });
lyr_SPAClippedtoLandowners_2.set('fieldLabels', {'localid': 'header label - visible with data', 'SPAName': 'header label - visible with data', 'SPAFolio': 'header label - visible with data', 'SPADetails': 'header label - visible with data', 'SPAAddress': 'header label - visible with data', 'Work': 'header label - visible with data', 'Severity': 'header label - visible with data', 'Photo': 'header label - visible with data', 'Area (Ha)': 'header label - visible with data', 'Area (Ac)': 'header label - visible with data', 'Area (SqM)': 'header label - visible with data', });
lyr_SPAAnalysis02LoadOutline_3.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_SPAAnalysis02BodyOutline_4.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_SPAAnalysis02Wheelpath_5.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_SPAAnalysis02Blade_6.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_SPAAnalysis02Truck_7.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_RoadEdgefromRoadSurvey_8.set('fieldLabels', {'FID': 'no label', 'Details': 'header label - visible with data', });
lyr_DashedYellowLinefromRoadSurvey_9.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'thickness': 'no label', 'ext': 'no label', 'width': 'no label', });
lyr_WallsfromRoadSurvey_10.set('fieldLabels', {'Details': 'header label - visible with data', });
lyr_FencefromRoadSurvey_11.set('fieldLabels', {'Details': 'header label - visible with data', });
lyr_VegetationfromRoadSurvey_12.set('fieldLabels', {'Details': 'header label - visible with data', });
lyr_OHLfromRoadSurvey_13.set('fieldLabels', {'Details': 'header label - visible with data', });
lyr_OHLfromRoadSurvey_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});