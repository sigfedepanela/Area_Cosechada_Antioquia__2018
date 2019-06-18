var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_LimiteDepartamental_1 = new ol.format.GeoJSON();
var features_LimiteDepartamental_1 = format_LimiteDepartamental_1.readFeatures(json_LimiteDepartamental_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteDepartamental_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_LimiteDepartamental_1.addFeatures(features_LimiteDepartamental_1);var lyr_LimiteDepartamental_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteDepartamental_1, 
                style: style_LimiteDepartamental_1,
                title: '<img src="styles/legend/LimiteDepartamental_1.png" /> Limite Departamental'
            });var format_reaCosechadaCaaPaneleraHa_2 = new ol.format.GeoJSON();
var features_reaCosechadaCaaPaneleraHa_2 = format_reaCosechadaCaaPaneleraHa_2.readFeatures(json_reaCosechadaCaaPaneleraHa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaCosechadaCaaPaneleraHa_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_reaCosechadaCaaPaneleraHa_2.addFeatures(features_reaCosechadaCaaPaneleraHa_2);var lyr_reaCosechadaCaaPaneleraHa_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reaCosechadaCaaPaneleraHa_2, 
                style: style_reaCosechadaCaaPaneleraHa_2,
    title: 'Área Cosechada Caña Panelera (Ha)<br />\
    <img src="styles/legend/reaCosechadaCaaPaneleraHa_2_0.png" />  7 - 800 <br />\
    <img src="styles/legend/reaCosechadaCaaPaneleraHa_2_1.png" />  800 - 1594 <br />\
    <img src="styles/legend/reaCosechadaCaaPaneleraHa_2_2.png" />  1594 - 2388 <br />\
    <img src="styles/legend/reaCosechadaCaaPaneleraHa_2_3.png" />  2388 - 3182 <br />\
    <img src="styles/legend/reaCosechadaCaaPaneleraHa_2_4.png" />  3182 - 3976 <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_LimiteDepartamental_1.setVisible(true);lyr_reaCosechadaCaaPaneleraHa_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_LimiteDepartamental_1,lyr_reaCosechadaCaaPaneleraHa_2];
lyr_LimiteDepartamental_1.set('fieldAliases', {'Dept': 'Dept', 'Área.Sem.': 'Área.Sem.', 'Área.Cos.': 'Área.Cos.', 'Prod.Ton': 'Prod.Ton', 'Rend.Ton/H': 'Rend.Ton/H', 'Año': 'Año', 'No': 'No', });
lyr_reaCosechadaCaaPaneleraHa_2.set('fieldAliases', {'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', 'CULTIVO': 'CULTIVO', 'AÑO': 'AÑO', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'REND(Ton/Ha)': 'REND(Ton/Ha)', });
lyr_LimiteDepartamental_1.set('fieldImages', {'Dept': '', 'Área.Sem.': '', 'Área.Cos.': '', 'Prod.Ton': '', 'Rend.Ton/H': '', 'Año': '', 'No': '', });
lyr_reaCosechadaCaaPaneleraHa_2.set('fieldImages', {'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CULTIVO': 'TextEdit', 'AÑO': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'REND(Ton/Ha)': 'TextEdit', });
lyr_LimiteDepartamental_1.set('fieldLabels', {'Dept': 'inline label', 'Área.Sem.': 'inline label', 'Área.Cos.': 'inline label', 'Prod.Ton': 'inline label', 'Rend.Ton/H': 'inline label', 'Año': 'inline label', 'No': 'inline label', });
lyr_reaCosechadaCaaPaneleraHa_2.set('fieldLabels', {'DEPT': 'inline label', 'MUNICIPIO': 'inline label', 'CULTIVO': 'inline label', 'AÑO': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'REND(Ton/Ha)': 'inline label', });
lyr_reaCosechadaCaaPaneleraHa_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});