var state_selected = "none";

  var election = new Datamap({
    scope: 'usa',
    element: document.getElementById('container'),
    geographyConfig: {

        highlightBorderColor: '#66E649',
        popupTemplate: function(geography, data) {

            if(geography.properties.name != state_selected && mouseDown == 1){

                state_selected = geography.properties.name;

                //chamada sempre que está dentro do estado
        	    var url = "http://localhost:9090/list_tags_by_state_name?state_name=" + geography.properties.name;

                $.getJSON(url, function( data ) {
                    console.log("tags " + geography.properties.name); // use data as a generic object
                    //console.log(data);
                    //console.log("mouseDown " + mouseDown);
                    //if barplot desenharbarplot
                    //desenharBarGraph(data);
                    desenharWCloud(data)

                    mouseDown = -1
                });

                return '<div class="hoverinfo">' + geography.properties.name + 'Tag ocurrence:' +  data.occurrence + ' '

            }
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