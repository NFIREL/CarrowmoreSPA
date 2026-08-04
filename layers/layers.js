var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_EdgeofRoad2kmBufferStudyArea_1 = new ol.format.GeoJSON();
var features_EdgeofRoad2kmBufferStudyArea_1 = format_EdgeofRoad2kmBufferStudyArea_1.readFeatures(json_EdgeofRoad2kmBufferStudyArea_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EdgeofRoad2kmBufferStudyArea_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdgeofRoad2kmBufferStudyArea_1.addFeatures(features_EdgeofRoad2kmBufferStudyArea_1);
var lyr_EdgeofRoad2kmBufferStudyArea_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdgeofRoad2kmBufferStudyArea_1, 
                style: style_EdgeofRoad2kmBufferStudyArea_1,
                popuplayertitle: 'Edge of Road 2km Buffer Study Area',
                interactive: true,
                title: '<img src="styles/legend/EdgeofRoad2kmBufferStudyArea_1.png" /> Edge of Road 2km Buffer Study Area'
            });
var format_ProposedNaturalHeritageAreasin2km_2 = new ol.format.GeoJSON();
var features_ProposedNaturalHeritageAreasin2km_2 = format_ProposedNaturalHeritageAreasin2km_2.readFeatures(json_ProposedNaturalHeritageAreasin2km_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProposedNaturalHeritageAreasin2km_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProposedNaturalHeritageAreasin2km_2.addFeatures(features_ProposedNaturalHeritageAreasin2km_2);
var lyr_ProposedNaturalHeritageAreasin2km_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProposedNaturalHeritageAreasin2km_2, 
                style: style_ProposedNaturalHeritageAreasin2km_2,
                popuplayertitle: 'Proposed Natural Heritage Areas in 2km',
                interactive: true,
                title: '<img src="styles/legend/ProposedNaturalHeritageAreasin2km_2.png" /> Proposed Natural Heritage Areas in 2km'
            });
var format_SpecialAreaofConservationin2km_3 = new ol.format.GeoJSON();
var features_SpecialAreaofConservationin2km_3 = format_SpecialAreaofConservationin2km_3.readFeatures(json_SpecialAreaofConservationin2km_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpecialAreaofConservationin2km_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpecialAreaofConservationin2km_3.addFeatures(features_SpecialAreaofConservationin2km_3);
var lyr_SpecialAreaofConservationin2km_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SpecialAreaofConservationin2km_3, 
                style: style_SpecialAreaofConservationin2km_3,
                popuplayertitle: 'Special Area of Conservation in 2km',
                interactive: true,
                title: '<img src="styles/legend/SpecialAreaofConservationin2km_3.png" /> Special Area of Conservation in 2km'
            });
var format_RiverWaterBodiesin2km_4 = new ol.format.GeoJSON();
var features_RiverWaterBodiesin2km_4 = format_RiverWaterBodiesin2km_4.readFeatures(json_RiverWaterBodiesin2km_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiverWaterBodiesin2km_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiverWaterBodiesin2km_4.addFeatures(features_RiverWaterBodiesin2km_4);
var lyr_RiverWaterBodiesin2km_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiverWaterBodiesin2km_4, 
                style: style_RiverWaterBodiesin2km_4,
                popuplayertitle: 'River Water Bodies in 2km',
                interactive: true,
    title: 'River Water Bodies in 2km<br />\
    <img src="styles/legend/RiverWaterBodiesin2km_4_0.png" /> Not Protected<br />\
    <img src="styles/legend/RiverWaterBodiesin2km_4_1.png" /> Protected<br />' });
var format_TailteEireannSingleStreamsin2km_5 = new ol.format.GeoJSON();
var features_TailteEireannSingleStreamsin2km_5 = format_TailteEireannSingleStreamsin2km_5.readFeatures(json_TailteEireannSingleStreamsin2km_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TailteEireannSingleStreamsin2km_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TailteEireannSingleStreamsin2km_5.addFeatures(features_TailteEireannSingleStreamsin2km_5);
var lyr_TailteEireannSingleStreamsin2km_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TailteEireannSingleStreamsin2km_5, 
                style: style_TailteEireannSingleStreamsin2km_5,
                popuplayertitle: 'Tailte Eireann Single Streams in 2km',
                interactive: true,
                title: '<img src="styles/legend/TailteEireannSingleStreamsin2km_5.png" /> Tailte Eireann Single Streams in 2km'
            });
var format_SMRZonesin2km_6 = new ol.format.GeoJSON();
var features_SMRZonesin2km_6 = format_SMRZonesin2km_6.readFeatures(json_SMRZonesin2km_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMRZonesin2km_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMRZonesin2km_6.addFeatures(features_SMRZonesin2km_6);
var lyr_SMRZonesin2km_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMRZonesin2km_6, 
                style: style_SMRZonesin2km_6,
                popuplayertitle: 'SMR Zones in 2km',
                interactive: true,
                title: '<img src="styles/legend/SMRZonesin2km_6.png" /> SMR Zones in 2km'
            });
var format_SMROpenDatain2km_7 = new ol.format.GeoJSON();
var features_SMROpenDatain2km_7 = format_SMROpenDatain2km_7.readFeatures(json_SMROpenDatain2km_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMROpenDatain2km_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMROpenDatain2km_7.addFeatures(features_SMROpenDatain2km_7);
var lyr_SMROpenDatain2km_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMROpenDatain2km_7,
maxResolution:14.00223307613098,
 
                style: style_SMROpenDatain2km_7,
                popuplayertitle: 'SMROpenData in 2km',
                interactive: true,
                title: '<img src="styles/legend/SMROpenDatain2km_7.png" /> SMROpenData in 2km'
            });
var format_SPAClippedtoLandowners_8 = new ol.format.GeoJSON();
var features_SPAClippedtoLandowners_8 = format_SPAClippedtoLandowners_8.readFeatures(json_SPAClippedtoLandowners_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPAClippedtoLandowners_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPAClippedtoLandowners_8.addFeatures(features_SPAClippedtoLandowners_8);
var lyr_SPAClippedtoLandowners_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPAClippedtoLandowners_8, 
                style: style_SPAClippedtoLandowners_8,
                popuplayertitle: 'SPA Clipped to Landowners ',
                interactive: true,
    title: 'SPA Clipped to Landowners <br />\
    <img src="styles/legend/SPAClippedtoLandowners_8_0.png" /> High<br />\
    <img src="styles/legend/SPAClippedtoLandowners_8_1.png" /> Medium<br />\
    <img src="styles/legend/SPAClippedtoLandowners_8_2.png" /> Low<br />\
    <img src="styles/legend/SPAClippedtoLandowners_8_3.png" /> N/A<br />' });
var format_RoadEdgefromRoadSurvey_9 = new ol.format.GeoJSON();
var features_RoadEdgefromRoadSurvey_9 = format_RoadEdgefromRoadSurvey_9.readFeatures(json_RoadEdgefromRoadSurvey_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadEdgefromRoadSurvey_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadEdgefromRoadSurvey_9.addFeatures(features_RoadEdgefromRoadSurvey_9);
var lyr_RoadEdgefromRoadSurvey_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadEdgefromRoadSurvey_9, 
                style: style_RoadEdgefromRoadSurvey_9,
                popuplayertitle: 'Road Edge from Road Survey',
                interactive: true,
                title: '<img src="styles/legend/RoadEdgefromRoadSurvey_9.png" /> Road Edge from Road Survey'
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
                                fold: 'open',
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
                                layers: [lyr_SPAClippedtoLandowners_8,],
                                fold: 'close',
                                title: 'Autotrack analysis E175 02 export (minimise NF)'});
var group_AutotrackanalysisE17502export = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Autotrack analysis E175 02 export'});
var group_CarrowmoreHorizonTopographicSurvey = new ol.layer.Group({
                                layers: [lyr_RoadEdgefromRoadSurvey_9,lyr_WallsfromRoadSurvey_10,lyr_FencefromRoadSurvey_11,lyr_VegetationfromRoadSurvey_12,lyr_OHLfromRoadSurvey_13,],
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
                                layers: [lyr_EdgeofRoad2kmBufferStudyArea_1,lyr_ProposedNaturalHeritageAreasin2km_2,lyr_SpecialAreaofConservationin2km_3,lyr_RiverWaterBodiesin2km_4,lyr_TailteEireannSingleStreamsin2km_5,lyr_SMRZonesin2km_6,lyr_SMROpenDatain2km_7,],
                                fold: 'close',
                                title: 'Environmental & Grid within 2km of Edge of Road'});
var group_SPAAssessment29thJuly2026 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'SPA Assessment 29th July 2026'});
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
                                layers: [lyr_GoogleSatellite_0,],
                                fold: 'close',
                                title: 'Mapping'});

lyr_GoogleSatellite_0.setVisible(true);lyr_EdgeofRoad2kmBufferStudyArea_1.setVisible(true);lyr_ProposedNaturalHeritageAreasin2km_2.setVisible(true);lyr_SpecialAreaofConservationin2km_3.setVisible(true);lyr_RiverWaterBodiesin2km_4.setVisible(true);lyr_TailteEireannSingleStreamsin2km_5.setVisible(true);lyr_SMRZonesin2km_6.setVisible(true);lyr_SMROpenDatain2km_7.setVisible(true);lyr_SPAClippedtoLandowners_8.setVisible(true);lyr_RoadEdgefromRoadSurvey_9.setVisible(true);lyr_WallsfromRoadSurvey_10.setVisible(true);lyr_FencefromRoadSurvey_11.setVisible(true);lyr_VegetationfromRoadSurvey_12.setVisible(true);lyr_OHLfromRoadSurvey_13.setVisible(true);
var layersList = [group_Mapping,group_EnvironmentalGridwithin2kmofEdgeofRoad,group_AutotrackanalysisE17502exportminimiseNF,group_CarrowmoreHorizonTopographicSurvey];
lyr_EdgeofRoad2kmBufferStudyArea_1.set('fieldAliases', {'FID': 'FID', 'Details': 'Details', });
lyr_ProposedNaturalHeritageAreasin2km_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SITECODE': 'SITECODE', 'SITE_NAME': 'SITE_NAME', 'COUNTY': 'COUNTY', 'VERSION': 'VERSION', 'HA': 'HA', 'Source_CRS': 'Source_CRS', 'SourcScale': 'SourcScale', 'URL': 'URL', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_SpecialAreaofConservationin2km_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SITECODE': 'SITECODE', 'SITE_NAME': 'SITE_NAME', 'VERSION': 'VERSION', 'COUNTY': 'COUNTY', 'HA': 'HA', 'Source_CRS': 'Source_CRS', 'SourcScale': 'SourcScale', 'URL': 'URL', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_RiverWaterBodiesin2km_4.set('fieldAliases', {'EU_CD': 'EU_CD', 'NAME': 'NAME', 'MS_CD': 'MS_CD', 'REGION_CD': 'REGION_CD', 'INS_WHEN': 'INS_WHEN', 'INS_BY': 'INS_BY', 'BASIN_CD': 'BASIN_CD', 'LAT': 'LAT', 'LON': 'LON', 'LENGTHKM': 'LENGTHKM', 'SUB_CD': 'SUB_CD', 'DateChange': 'DateChange', 'Change': 'Change', 'GEOLOGY': 'GEOLOGY', 'AreaKm2': 'AreaKm2', 'AreaHectar': 'AreaHectar', 'Slope': 'Slope', 'Altitude': 'Altitude', 'WaterManag': 'WaterManag', 'EdenEntity': 'EdenEntity', 'Easting': 'Easting', 'Northing': 'Northing', 'LocalAutho': 'LocalAutho', 'SYSTEM': 'SYSTEM', 'TYPE': 'TYPE', 'ALT_CAT': 'ALT_CAT', 'SIZE_CAT': 'SIZE_CAT', 'DIST_CD': 'DIST_CD', 'ProtectedA': 'ProtectedA', 'WiseRefere': 'WiseRefere', 'HydroArea': 'HydroArea', 'StnDefinin': 'StnDefinin', });
lyr_TailteEireannSingleStreamsin2km_5.set('fieldAliases', {'fid': 'fid', 'GUID': 'GUID', 'OBJECTID': 'OBJECTID', });
lyr_SMRZonesin2km_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ZONE_ID': 'ZONE_ID ', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_SMROpenDatain2km_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ENTITY_ID': 'ENTITY_ID', 'CLASS_CODE': 'CLASS_CODE', 'SMRS': 'SMRS', 'COUNTY': 'COUNTY', 'TOWNLAND': 'TOWNLAND', 'ZONE_ID_1': 'ZONE_ID ', 'ITM_E': 'ITM_E', 'ITM_N': 'ITM_N', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'MONUMENT_C': 'MONUMENT_C', 'FIRST_EDIT': 'FIRST_EDIT', 'LATEST_EDI': 'LATEST_EDI', 'WEBSITE_LI': 'WEBSITE_LI', 'WEB_NOTES': 'WEB_NOTES', 'REFERENCES': 'REFERENCES', });
lyr_SPAClippedtoLandowners_8.set('fieldAliases', {'localid': 'localid', 'SPAName': 'SPAName', 'SPAFolio': 'SPAFolio', 'SPADetails': 'SPADetails', 'SPAAddress': 'SPAAddress', 'Work': 'Work', 'Severity': 'Severity', 'Photo': 'Photo', 'Area (Ha)': 'Area (Ha)', 'Area (Ac)': 'Area (Ac)', 'Area (SqM)': 'Area (SqM)', });
lyr_RoadEdgefromRoadSurvey_9.set('fieldAliases', {'FID': 'FID', 'Details': 'Details', });
lyr_WallsfromRoadSurvey_10.set('fieldAliases', {'Details': 'Details', });
lyr_FencefromRoadSurvey_11.set('fieldAliases', {'Details': 'Details', });
lyr_VegetationfromRoadSurvey_12.set('fieldAliases', {'Details': 'Details', });
lyr_OHLfromRoadSurvey_13.set('fieldAliases', {'Details': 'Details', });
lyr_EdgeofRoad2kmBufferStudyArea_1.set('fieldImages', {'FID': 'TextEdit', 'Details': 'TextEdit', });
lyr_ProposedNaturalHeritageAreasin2km_2.set('fieldImages', {'OBJECTID': '', 'SITECODE': '', 'SITE_NAME': '', 'COUNTY': '', 'VERSION': '', 'HA': '', 'Source_CRS': '', 'SourcScale': '', 'URL': '', 'Shape__Are': '', 'Shape__Len': '', });
lyr_SpecialAreaofConservationin2km_3.set('fieldImages', {'OBJECTID': '', 'SITECODE': '', 'SITE_NAME': '', 'VERSION': '', 'COUNTY': '', 'HA': '', 'Source_CRS': '', 'SourcScale': '', 'URL': '', 'Shape__Are': '', 'Shape__Len': '', });
lyr_RiverWaterBodiesin2km_4.set('fieldImages', {'EU_CD': 'TextEdit', 'NAME': 'TextEdit', 'MS_CD': 'TextEdit', 'REGION_CD': 'TextEdit', 'INS_WHEN': 'DateTime', 'INS_BY': 'TextEdit', 'BASIN_CD': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'LENGTHKM': 'TextEdit', 'SUB_CD': 'TextEdit', 'DateChange': 'DateTime', 'Change': 'TextEdit', 'GEOLOGY': 'TextEdit', 'AreaKm2': 'TextEdit', 'AreaHectar': 'TextEdit', 'Slope': 'TextEdit', 'Altitude': 'TextEdit', 'WaterManag': 'TextEdit', 'EdenEntity': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'LocalAutho': 'TextEdit', 'SYSTEM': 'TextEdit', 'TYPE': 'TextEdit', 'ALT_CAT': 'TextEdit', 'SIZE_CAT': 'TextEdit', 'DIST_CD': 'TextEdit', 'ProtectedA': 'TextEdit', 'WiseRefere': 'TextEdit', 'HydroArea': 'TextEdit', 'StnDefinin': 'TextEdit', });
lyr_TailteEireannSingleStreamsin2km_5.set('fieldImages', {'fid': '', 'GUID': 'TextEdit', 'OBJECTID': 'Range', });
lyr_SMRZonesin2km_6.set('fieldImages', {'OBJECTID': '', 'ZONE_ID': '', 'Shape__Are': '', 'Shape__Len': '', });
lyr_SMROpenDatain2km_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'ENTITY_ID': 'TextEdit', 'CLASS_CODE': 'TextEdit', 'SMRS': 'TextEdit', 'COUNTY': 'TextEdit', 'TOWNLAND': 'TextEdit', 'ZONE_ID_1': '', 'ITM_E': 'TextEdit', 'ITM_N': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', 'MONUMENT_C': '', 'FIRST_EDIT': '', 'LATEST_EDI': '', 'WEBSITE_LI': '', 'WEB_NOTES': 'TextEdit', 'REFERENCES': '', });
lyr_SPAClippedtoLandowners_8.set('fieldImages', {'localid': 'TextEdit', 'SPAName': 'TextEdit', 'SPAFolio': 'TextEdit', 'SPADetails': 'TextEdit', 'SPAAddress': 'TextEdit', 'Work': 'TextEdit', 'Severity': 'TextEdit', 'Photo': 'ExternalResource', 'Area (Ha)': '', 'Area (Ac)': '', 'Area (SqM)': '', });
lyr_RoadEdgefromRoadSurvey_9.set('fieldImages', {'FID': 'TextEdit', 'Details': '', });
lyr_WallsfromRoadSurvey_10.set('fieldImages', {'Details': 'TextEdit', });
lyr_FencefromRoadSurvey_11.set('fieldImages', {'Details': 'TextEdit', });
lyr_VegetationfromRoadSurvey_12.set('fieldImages', {'Details': 'TextEdit', });
lyr_OHLfromRoadSurvey_13.set('fieldImages', {'Details': 'TextEdit', });
lyr_EdgeofRoad2kmBufferStudyArea_1.set('fieldLabels', {'FID': 'header label - visible with data', 'Details': 'header label - visible with data', });
lyr_ProposedNaturalHeritageAreasin2km_2.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'SITECODE': 'header label - visible with data', 'SITE_NAME': 'header label - visible with data', 'COUNTY': 'header label - visible with data', 'VERSION': 'header label - visible with data', 'HA': 'header label - visible with data', 'Source_CRS': 'header label - visible with data', 'SourcScale': 'header label - visible with data', 'URL': 'header label - visible with data', 'Shape__Are': 'header label - visible with data', 'Shape__Len': 'header label - visible with data', });
lyr_SpecialAreaofConservationin2km_3.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'SITECODE': 'header label - visible with data', 'SITE_NAME': 'header label - visible with data', 'VERSION': 'header label - visible with data', 'COUNTY': 'header label - visible with data', 'HA': 'header label - visible with data', 'Source_CRS': 'header label - visible with data', 'SourcScale': 'header label - visible with data', 'URL': 'header label - visible with data', 'Shape__Are': 'header label - visible with data', 'Shape__Len': 'header label - visible with data', });
lyr_RiverWaterBodiesin2km_4.set('fieldLabels', {'EU_CD': 'hidden field', 'NAME': 'header label - visible with data', 'MS_CD': 'header label - always visible', 'REGION_CD': 'header label - visible with data', 'INS_WHEN': 'header label - visible with data', 'INS_BY': 'header label - visible with data', 'BASIN_CD': 'header label - visible with data', 'LAT': 'header label - visible with data', 'LON': 'header label - visible with data', 'LENGTHKM': 'header label - visible with data', 'SUB_CD': 'header label - visible with data', 'DateChange': 'header label - visible with data', 'Change': 'header label - visible with data', 'GEOLOGY': 'header label - visible with data', 'AreaKm2': 'header label - visible with data', 'AreaHectar': 'header label - visible with data', 'Slope': 'header label - visible with data', 'Altitude': 'header label - visible with data', 'WaterManag': 'header label - visible with data', 'EdenEntity': 'header label - visible with data', 'Easting': 'header label - visible with data', 'Northing': 'header label - visible with data', 'LocalAutho': 'inline label - visible with data', 'SYSTEM': 'header label - visible with data', 'TYPE': 'header label - visible with data', 'ALT_CAT': 'header label - visible with data', 'SIZE_CAT': 'header label - visible with data', 'DIST_CD': 'header label - visible with data', 'ProtectedA': 'header label - visible with data', 'WiseRefere': 'header label - visible with data', 'HydroArea': 'header label - visible with data', 'StnDefinin': 'header label - visible with data', });
lyr_TailteEireannSingleStreamsin2km_5.set('fieldLabels', {'fid': 'header label - visible with data', 'GUID': 'header label - visible with data', 'OBJECTID': 'header label - visible with data', });
lyr_SMRZonesin2km_6.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'ZONE_ID': 'header label - visible with data', 'Shape__Are': 'header label - visible with data', 'Shape__Len': 'header label - visible with data', });
lyr_SMROpenDatain2km_7.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'ENTITY_ID': 'header label - visible with data', 'CLASS_CODE': 'header label - visible with data', 'SMRS': 'header label - visible with data', 'COUNTY': 'header label - visible with data', 'TOWNLAND': 'header label - always visible', 'ZONE_ID_1': 'header label - visible with data', 'ITM_E': 'header label - visible with data', 'ITM_N': 'header label - visible with data', 'LONGITUDE': 'header label - visible with data', 'LATITUDE': 'header label - visible with data', 'MONUMENT_C': 'header label - visible with data', 'FIRST_EDIT': 'header label - visible with data', 'LATEST_EDI': 'header label - visible with data', 'WEBSITE_LI': 'header label - visible with data', 'WEB_NOTES': 'header label - visible with data', 'REFERENCES': 'header label - visible with data', });
lyr_SPAClippedtoLandowners_8.set('fieldLabels', {'localid': 'header label - visible with data', 'SPAName': 'header label - visible with data', 'SPAFolio': 'header label - visible with data', 'SPADetails': 'header label - visible with data', 'SPAAddress': 'header label - visible with data', 'Work': 'header label - visible with data', 'Severity': 'header label - visible with data', 'Photo': 'header label - visible with data', 'Area (Ha)': 'header label - visible with data', 'Area (Ac)': 'header label - visible with data', 'Area (SqM)': 'header label - visible with data', });
lyr_RoadEdgefromRoadSurvey_9.set('fieldLabels', {'FID': 'no label', 'Details': 'header label - visible with data', });
lyr_WallsfromRoadSurvey_10.set('fieldLabels', {'Details': 'header label - visible with data', });
lyr_FencefromRoadSurvey_11.set('fieldLabels', {'Details': 'header label - visible with data', });
lyr_VegetationfromRoadSurvey_12.set('fieldLabels', {'Details': 'header label - visible with data', });
lyr_OHLfromRoadSurvey_13.set('fieldLabels', {'Details': 'header label - visible with data', });
lyr_OHLfromRoadSurvey_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});