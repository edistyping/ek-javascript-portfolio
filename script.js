console.log("Hi")
var index = 0;
var loadedQuotes = false;
var myFavoriteQuotes = [];


// skills, project, description, imgs
function loadProjects() {
    fetch("./assets/projects.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var itemCount = 0; // Use this to limit 3 row each row 
        var firstCarousel = true;
        var content = "";
        for(var i = 0; i < data.length; i++) {
            console.log("i: " + firstCarousel);
            // add start row 
            if(itemCount == 0 && i == 0) {
                content += `<div class="carousel-item active">`;
                content += '<div class="row">';
            }  else if (itemCount == 0) {
                content += `<div class="carousel-item">`;
                content += '<div class="row">';
            }
            
            // add column
            content += '<div class="col-sm">';
            content += '<div class="card" style="width: 18rem;">';
            content += `<img class="card-img-top" src="${data[i].url}" alt="Card image cap">`;
            content += '<div class="card-body">';
            content += `<h5 id="project-title0" class="card-title">${data[i].project}</h5>`;
            content += `<p id="project-description0" class="card-text">${data[i].description}</p>`
            content += `<p id="project-description0" class="card-text">${data[i].skills}</p>`
            content += `<a href="#" class="btn btn-primary">Go somewhere</a>`
            content += '</div></div></div>';
 
            // close the row
            if (itemCount == 2) {
                content += '</div></div>' 
                itemCount = 0;
            } else if (itemCount < 3) {
                itemCount++;
            }
        }
        console.log(content);
        document.getElementById("items-projects").innerHTML = content;
}) 

}


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
        loadProjects();
    });

}


//window.evevntListener