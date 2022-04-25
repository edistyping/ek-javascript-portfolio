console.log("Hi")
var index = 0;
var loadedQuotes = false;
var myFavoriteQuotes = [];


// var myFavoriteQuotes = JSON.parse(data);

function loadQuotes(){
    // do whatever you like here
    console.log("Length: " + myFavoriteQuotes.length + " index: " + index)
    if (index == myFavoriteQuotes.length - 1)
        index = 0;
    else 
        index++;
    
    if (loadedQuotes == true){
        document.getElementById('favoriteQuote').innerHTML = myFavoriteQuotes[index].quote;
        document.getElementById('favoriteQuoteOwner').innerHTML = "By " + myFavoriteQuotes[index].owner;
    }
    else    
        document.getElementById('favoriteQuote').innerHTML = "Loading Quotes...";

    setTimeout(loadQuotes, 5000);
}
loadQuotes();





window.onload = function () {
    const json = '{"result":true, "count":42}';
    const obj = JSON.parse(json);

    fetch("./assets/favoriteQuotes.json") 
    .then(response => response.json()) 
    .then(data => {
        console.log(data);

        // For Loading Quotes
        myFavoriteQuotes = data;
        loadedQuotes = true;
        loadQuotes();
    });

    getProjects();
}

// skills, project, description, imgs
function getProjects() {
    fetch("./assets/projects.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        for(var i = 0; i < data.length; i++) {
            document.getElementById("project-title0").innerHTML = data[i].project;
            document.getElementById("project-description0").innerHTML = data[i].description;
            
        }
    }) 



}
//window.evevntListener