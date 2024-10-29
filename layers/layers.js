ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([8524557.772320, 961924.089360, 8561935.344241, 986519.037926]);
var wms_layers = [];

var format_varkala_0 = new ol.format.GeoJSON();
var features_varkala_0 = format_varkala_0.readFeatures(json_varkala_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_varkala_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_varkala_0.addFeatures(features_varkala_0);
var lyr_varkala_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_varkala_0, 
                style: style_varkala_0,
                popuplayertitle: "varkala",
                interactive: false,
                title: '<img src="styles/legend/varkala_0.png" /> varkala'
            });
var format_geo_1 = new ol.format.GeoJSON();
var features_geo_1 = format_geo_1.readFeatures(json_geo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geo_1.addFeatures(features_geo_1);
var lyr_geo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geo_1, 
                style: style_geo_1,
                popuplayertitle: "geo",
                interactive: false,
    title: 'geo<br />\
    <img src="styles/legend/geo_1_0.png" /> Coastal Plain<br />\
    <img src="styles/legend/geo_1_1.png" /> Coatal Plain<br />\
    <img src="styles/legend/geo_1_2.png" /> Lower Plateau (Lateritic)<br />\
    <img src="styles/legend/geo_1_3.png" /> Pediplain Weathered/buried<br />\
    <img src="styles/legend/geo_1_4.png" /> Water Body<br />\
    <img src="styles/legend/geo_1_5.png" /> <br />'
        });
var format_drain_2 = new ol.format.GeoJSON();
var features_drain_2 = format_drain_2.readFeatures(json_drain_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_drain_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_drain_2.addFeatures(features_drain_2);
var lyr_drain_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_drain_2, 
                style: style_drain_2,
                popuplayertitle: "drain",
                interactive: false,
    title: 'drain<br />\
    <img src="styles/legend/drain_2_0.png" /> 0<br />\
    <img src="styles/legend/drain_2_1.png" /> 1<br />\
    <img src="styles/legend/drain_2_2.png" /> 2<br />\
    <img src="styles/legend/drain_2_3.png" /> 3<br />\
    <img src="styles/legend/drain_2_4.png" /> 4<br />\
    <img src="styles/legend/drain_2_5.png" /> <br />'
        });
var format_road_3 = new ol.format.GeoJSON();
var features_road_3 = format_road_3.readFeatures(json_road_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_3.addFeatures(features_road_3);
var lyr_road_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_road_3, 
                style: style_road_3,
                popuplayertitle: "road",
                interactive: false,
                title: '<img src="styles/legend/road_3.png" /> road'
            });
var format_rail_4 = new ol.format.GeoJSON();
var features_rail_4 = format_rail_4.readFeatures(json_rail_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rail_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rail_4.addFeatures(features_rail_4);
var lyr_rail_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rail_4, 
                style: style_rail_4,
                popuplayertitle: "rail",
                interactive: false,
                title: '<img src="styles/legend/rail_4.png" /> rail'
            });
var format_junc_5 = new ol.format.GeoJSON();
var features_junc_5 = format_junc_5.readFeatures(json_junc_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_junc_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_junc_5.addFeatures(features_junc_5);
var lyr_junc_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_junc_5, 
                style: style_junc_5,
                popuplayertitle: "junc",
                interactive: true,
                title: '<img src="styles/legend/junc_5.png" /> junc'
            });
var format_picture_6 = new ol.format.GeoJSON();
var features_picture_6 = format_picture_6.readFeatures(json_picture_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_picture_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_picture_6.addFeatures(features_picture_6);
var lyr_picture_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_picture_6, 
                style: style_picture_6,
                popuplayertitle: "picture",
                interactive: false,
                title: '<img src="styles/legend/picture_6.png" /> picture'
            });

lyr_varkala_0.setVisible(true);lyr_geo_1.setVisible(true);lyr_drain_2.setVisible(true);lyr_road_3.setVisible(true);lyr_rail_4.setVisible(true);lyr_junc_5.setVisible(true);lyr_picture_6.setVisible(true);
var layersList = [lyr_varkala_0,lyr_geo_1,lyr_drain_2,lyr_road_3,lyr_rail_4,lyr_junc_5,lyr_picture_6];
lyr_varkala_0.set('fieldAliases', {'admin_leve': 'admin_leve', 'boundary': 'boundary', 'local_auth': 'local_auth', 'name': 'name', 'type': 'type', });
lyr_geo_1.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_drain_2.set('fieldAliases', {'fid': 'fid', 'ORDER1': 'ORDER1', });
lyr_road_3.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'Length': 'Length', });
lyr_rail_4.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_junc_5.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Jn_Name': 'Jn_Name', 'District': 'District', 'Name': 'Name', });
lyr_picture_6.set('fieldAliases', {'id': 'id', 'name': 'name', 'image': 'image', 'varkala_data_x': 'varkala_data_x', 'varkala_data_y': 'varkala_data_y', 'varkala_data_field_3': 'varkala_data_field_3', });
lyr_varkala_0.set('fieldImages', {'admin_leve': 'TextEdit', 'boundary': 'TextEdit', 'local_auth': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_geo_1.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_drain_2.set('fieldImages', {'fid': 'TextEdit', 'ORDER1': 'Range', });
lyr_road_3.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_rail_4.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_junc_5.set('fieldImages', {'fid': 'TextEdit', 'Id': 'Range', 'Jn_Name': 'TextEdit', 'District': 'TextEdit', 'Name': 'TextEdit', });
lyr_picture_6.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'image': 'ExternalResource', 'varkala_data_x': 'TextEdit', 'varkala_data_y': 'TextEdit', 'varkala_data_field_3': 'TextEdit', });
lyr_varkala_0.set('fieldLabels', {'admin_leve': 'no label', 'boundary': 'no label', 'local_auth': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_geo_1.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_drain_2.set('fieldLabels', {'fid': 'inline label - always visible', 'ORDER1': 'no label', });
lyr_road_3.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'Length': 'no label', });
lyr_rail_4.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_junc_5.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'Jn_Name': 'inline label - always visible', 'District': 'no label', 'Name': 'no label', });
lyr_picture_6.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'image': 'no label', 'varkala_data_x': 'no label', 'varkala_data_y': 'no label', 'varkala_data_field_3': 'no label', });
lyr_picture_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});