var state_selected = "none";
var radios = document.getElementsByName('Choice');
var mouseDown = -1;
var lastState = radios;

  var election = new Datamap({
    scope: 'usa',
    element: document.getElementById('container'),
    geographyConfig: {

        highlightBorderColor: '#66E649',
        popupTemplate: function(geography, data) {
            console.log("MOUSE " + mouseDown);

            if(geography.properties.name != state_selected && mouseDown == 1){

                state_selected = geography.properties.name;

                //console.log("radios0 " + radios[0].checked)
                //console.log("radios1 " + radios[1].checked)

                //chamada sempre que está dentro do estado

                if(radios[0].checked == true){
                    var url = "http://localhost:9090/list_tags_by_state_name?state_name=" + geography.properties.name;
                }
                if(radios[1].checked == true){
                    var url = "http://localhost:9090/tags_by_state_name?state_name=" + geography.properties.name;
                }

                mouseDown = -1

                $.getJSON(url, function( data ) {
                    console.log("tags " + geography.properties.name); // use data as a generic object
                    if(radios[0].checked == true){
                        console.log(data)
                        desenharWCloud(data);
                    }
                    if(radios[1].checked == true){
                        console.log(data)
                        desenharBarGraph(data);

                    }
                    mouseDown = -1


                });

                return ''

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

  document.body.onmousedown = function() {
    mouseDown = 1;
  }