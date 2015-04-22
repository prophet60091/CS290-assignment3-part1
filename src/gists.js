function connect(){

    var url = 'https://api.github.com/gists/public';
    var req = new XMLHttpRequest();
    var dateOff = (24*60*60*1000); // one day
    var myDate = new Date();
    myDate.setTime(myDate.getTime() - dateOff);
    var testing;

    // make sure it got somewhere
    if (!req)throw 'Something fucked up';

    req.onreadystatechange= function(){
        //Check the state

        //check the response
        if (req.status === 200) {

        } else {
            console.log('Received a response other than 200');
            console.log(req.statusText);
        }
        if (req.readyState === 4) {
            // everything is good, the response is received
            console.log("it works");
            testing = JSON.parse(this.responseText);
        }

    };
    req.open('GET', url);
    req.send();

}

window.onload = function(){
    connect();

};
//document.getElementById("connectButton").onclick =function(){connect();};