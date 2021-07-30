var mymap = L.map('mapid').setView([38.20005,15.25263], 20);
        L.tileLayer('https://tile.jawg.io/jawg-streets/{z}/{x}/{y}.png?access-token=W2oqTLDiSCsSXYSvXXfjWHyJIR9VZ6wtFgPvdmKvwRNMepiWSufeeySkBL5Z5koJ', {}).addTo(mymap);
        mymap.attributionControl.addAttribution("<a href=\"https://www.jawg.io\" target=\"_blank\">&copy; Jawg</a> - <a href=\"https://www.openstreetmap.org\" target=\"_blank\">&copy; OpenStreetMap</a>&nbsp;contributors")

var Icon = L.icon({
    iconUrl: 'img/map-marker.png',

    iconSize:     [32, 50], 
    iconAnchor:   [16, 64]
});

L.marker([38.20005,15.25263], {icon: Icon}).addTo(mymap);