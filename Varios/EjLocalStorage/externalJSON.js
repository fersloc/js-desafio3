/*  ----------- FUNCTION : ---------------- */
function loadFileJSON( toLocalStorage, fromUrl){
    if (localStorage[toLocalStorage])
    { console.log("Good! Data already loaded locally!");  }
    else {
        $.getJSON(   fromUrl   , function(data) { 
            localStorage[toLocalStorage] = JSON.stringify(data);
            console.log("Damn! Data not yet loaded locally! Ok: I'am loading it!");
            console.log("Data string: "+ localStorage[toLocalStorage])
        });
      }
    }

/*  ----------- FUNCTION CALL ---------------- */
//Load externalize json into localStorage.myJson
// if: localStorage.myJson not existing, else : do nothing
loadFileJSON('myJson7', '/data.json');

// The data is now on the client side and writeable !
// It can be modified yet persistant ! :D

//To reuse data:
var myJSON1 = JSON.parse(localStorage.myJson6);
alert("Mister " + myJSON1[0].myKey + ", your current score is "+ myJSON1[0].score +"!");