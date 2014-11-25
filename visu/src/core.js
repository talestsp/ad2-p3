function highlight(data) {
    document.getElementById("tag_escolhida").innerHTML = data;
}

function highlight2() {

    var req = createXMLHTTPObject();
    req.withCredentials = true;

    $.getJSON("http://localhost:9090/tags_states", function( data ) {
        console.log("deu certo"); // use data as a generic object
    });
}

function highlight3(data) {
   sendRequest('http://localhost:9000/artist/36012');

}


function highlight4(){
    var req = createXMLHTTPObject();
    req.withCredentials = true;

    $.getJSON('http://localhost:9000/artist/36012', function (json){
        console.log("deu certo")
    });

}

function readJSON(url){
    	var dataframe;

		$.ajax({
            url : url,
            type : 'GET',
            async: true,
            dataType : 'json',
            success: function(data) {
            	console.log("success ajax!");
            	console.log(data);

            	dataframe = data;
             },
            error: function() { console.log('error ajax!'); },
        });

        return dataframe;
}


function sendRequest(url,callback,postData) {
	var req = createXMLHTTPObject();
	if (!req) return;
	var method = (postData) ? "POST" : "GET";
	req.open(method,url,true);
	req.setRequestHeader('User-Agent','XMLHTTP/1.0');
	if (postData)
	    console.log("deu certo POSTDATA");
		req.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	req.onreadystatechange = function () {
		if (req.readyState != 4) return;
		if (req.status != 200 && req.status != 304) {
//			alert('HTTP error ' + req.status);
			return;
		}
		callback(req);
	}
	if (req.readyState == 4) return;
	req.send(postData);
}

var XMLHttpFactories = [
	function () {return new XMLHttpRequest()},
	function () {return new ActiveXObject("Msxml2.XMLHTTP")},
	function () {return new ActiveXObject("Msxml3.XMLHTTP")},
	function () {return new ActiveXObject("Microsoft.XMLHTTP")}
];

function createXMLHTTPObject() {
	var xmlhttp = false;
	for (var i=0;i<XMLHttpFactories.length;i++) {
		try {
			xmlhttp = XMLHttpFactories[i]();
		}
		catch (e) {
			continue;
		}
		break;
	}
	return xmlhttp;
}