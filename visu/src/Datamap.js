  var election = new Datamap({
    scope: 'usa',
    element: document.getElementById('container'),
    geographyConfig: {
        highlightBorderColor: '#66E649',
        popupTemplate: function(geography, data) {
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
          "fillKey": "meiomatch",
          "ocurrence": 5
      },
      "GA": {
          "fillKey": "match",
          "ocurrence": 32
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
      "WY": {
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