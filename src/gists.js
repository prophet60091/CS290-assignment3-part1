
//some date stuff for git requests
var dateOff = (  60 * 1000); // minute
var d = new Date();
d.setTime(d.getTime() - dateOff);
gitDate = d.toISOString();
var response;

function connect(url) {

    var req = new XMLHttpRequest();

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
                if(response !== '') {
                    console.log('I have a response');
                    localStorage.setItem("gists", JSON.stringify(req.responseText));

                }
            }else{
                console.log('Received a response other than 200');
                console.log(req.statusText);
            }
        }
    }
}
//grabs relevant data in the response
//@param takes a XMLHTTPResponse object
function getGists(rsp) {

    var display = document.getElementById("gists");
    var tbl = document.createElement("table");
    var tblbdy = document.createElement("tbody");
    var length = rsp.length;

    rsp.forEach(function(rowData){
        var row = document.createElement("tr");


        var cell_description = document.createTextNode( rowData.description );
        var cell_date = document.createTextNode( rowData.updated_at );
        var listofFiles = document.createTextNode( 'FILES' );

        //Grab the file Names and Info
        for(file in rowData.files){
            var listFiles = document.createElement("ul");
            var fileName = document.createTextNode( rowData.files[file].filename);
            var fileLink = document.createTextNode(rowData.files[file].raw_url);
            var fileLang = document.createTextNode( rowData.files[file].language);
            listFiles.appendChild(fileName);
            listFiles.appendChild(fileLink);
            listFiles.appendChild(fileLang);

        }
       listofFiles.appendData(listFiles);
        row.appendChild(listofFiles);
        row.appendChild(cell_description);
        row.appendChild(cell_date);
        tblbdy.appendChild(row);
    });

    tbl.appendChild(tblbdy);
    display.appendChild(tbl);

}


window.onload = function(){
   console.log('Connecting...');

    var perpage = 4;
    connect('https://api.github.com/gists/public?per_page='+ perpage);


};

//document.getElementById("connectButton").onclick =function(){connect();};