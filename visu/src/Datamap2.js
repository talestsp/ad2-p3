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
      'match': '#a1d99b',
      defaultFill: '#a1d99b'
      },

    data:{

    }
});
election.labels();