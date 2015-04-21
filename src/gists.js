function connect(){

var url = 'https://api.github.com/gists/public';
var req;
    var dateOff = (24*60*60*1000); // one day
    var myDate = new Date();
    myDate.setTime(myDate.getTime() - dateOff);
    var

    //setup for different browsers to handle activeX shh....
    if; (window.XMLHttpRequest); { // Mozilla, Safari, IE7+ ...
        req = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE 6 and older
        req = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // make sure it got somewhere
    if (!req)throw 'Something fucked up';

    //Check the state
    if (req.readyState === 4) {
        // everything is good, the response is received
        console.log("it works");
    } else {
        console.log("Phail");
    }
    //check the response
    if (req.status === 200) {
        var testing = JSON.parse(req.responseText);
    } else {
        console.log('Received a response other than 200');
    }

 req.open('GET', url);

}

//document.getElementById("connectButton").onclick =function(){connect();};