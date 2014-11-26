  var election = new Datamap({
    scope: 'usa',
    element: document.getElementById('container'),
    geographyConfig: {

        highlightBorderColor: '#66E649',
        popupTemplate: function(geography, data) {

        	var url = "http://localhost:9090/list_tags_by_state_name?state_name=" + geography.properties.name;

            $.getJSON(url, function( data ) {
                console.log("tags " + geography.properties.name); // use data as a generic object
                console.log(data);
                desenhar(data);
            });

        return '<div class="hoverinfo">' + geography.properties.name + 'Tag ocurrence:' +  data.occurrence + ' '
        },
        highlightBorderWidth: 3
    },

    fills: {
      'match': '#DE0407',
      'meiomatch': '#617827',
      defaultFill: '#66916C'
      },

    data:{
      "AZ": {
          "fillKey": "match",
          "ocurrence": 5
      },
      "ID": {
          "fillKey": "match",
          "ocurrence": 32
      },
      "IN": {
          "fillKey": "match",
          "ocurrence": 11
      },
      "IA": {
          "fillKey": "normal",
          "ocurrence": 11
      },
      "KY": {
          "fillKey": "match",
          "ocurrence": 32
      },
      "LA": {
          "fillKey": "match",
          "ocurrence": 32
      },
      "NE": {
          "fillKey": "match",
          "ocurrence": 32
      },
      "SC": {
          "fillKey": "match",
          "ocurrence": 32
      },
      "SD": {
          "fillKey": "match",
          "ocurrence": 32
      },
      "UT": {
          "fillKey": "match",
          "ocurrence": 32
      },
      "WV": {
          "fillKey": "match",
          "ocurrence": 32
      },
      "AK": {
          "fillKey": "match",
          "ocurrence": 32
      },
      "AR": {
          "fillKey": "match",
          "ocurrence": 32
      },
      "AL": {
          "fillKey": "match",
          "ocurrence": 32
      }
    }
});
election.labels();