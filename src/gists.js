var req;
//some date stuff for git requests
var dateOff = (  60 * 1000); // minute
var d = new Date();
d.setTime(d.getTime() - dateOff);
gitDate = d.toISOString();
var response;
function connect(url) {

    req = new XMLHttpRequest();

    // make sure it got somewhere
    if (!req)console.log( 'Something broke with the request to ' +  url);

    req.onreadystatechange = alerts;
    req.open('GET', url);
    req.send();


    function alerts() {

        //Check the state
        if (req.readyState === 4) {
            //check the response
            if (req.status === 200) {
                // everything is good, the response is received
                console.log("it works");
                response = JSON.parse(req.responseText);
                if(response) {
                    console.log('I have a response');
                    localStorage.setItem("gists", response[0].url);
                }
            }else{
                console.log('Received a response other than 200');
                console.log(req.statusText);
            }
        }

    }


}
window.onload = function(){
   console.log('Connecting...');


};
//document.getElementById("connectButton").onclick =function(){connect();};