console.log("Hi")
var index = 0;
var loadedQuotes = false;
var myFavoriteQuotes = [];


var i = 0; // word index
var ii = 0; // arry index
var index_emoji, index_emoji2 = -1;
var speed = 100; /* The speed/duration of the effect in milliseconds */
var homeTexts = ['Hello World!', 'My name is', 'Edward', 'I enjoy Programming &#128187;, Music &#127911;, and Hot Teas &#9749;']
function typeWriter() {
    //console.log("i: " + i + "   ii: " + ii + "   homeTexts[ii].length: " + homeTexts[ii].length);
    //console.log("          homeTexts[ii].charAt(i): " + homeTexts[ii].charAt(i));

    if (ii == 0 && i < homeTexts[ii].length) {
        document.getElementById("helloworld").innerHTML += homeTexts[ii].charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else if (ii == 1 && i < homeTexts[ii].length) {
        document.getElementById("myname").innerHTML += homeTexts[ii].charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else if (ii == 2 && i < homeTexts[ii].length) {
        document.getElementById("myname2").innerHTML += homeTexts[ii].charAt(i);        
        i++;
        setTimeout(typeWriter, speed);
    } else if ( ii == 3 && i < homeTexts[ii].length) {
        // Get & to ; location, 
        const currentChar = homeTexts[ii].charAt(i);
        console.log("currentChar: " + currentChar);
        if (currentChar == '&') {
            index_emoji = homeTexts[ii].indexOf('&', i);
            index_emoji2 = homeTexts[ii].indexOf(';', i);
            var emoji = homeTexts[ii].substring(index_emoji, index_emoji2 + 1);
            document.getElementById("ienjoy").innerHTML += emoji;
            i = index_emoji2 + 1;
        } else {
            document.getElementById("ienjoy").innerHTML += homeTexts[ii].charAt(i);
            i++;
        }
        setTimeout(typeWriter, 200);
    } 

    if (i >= homeTexts[ii].length) {
        ii++;
        i = 0;
        setTimeout(typeWriter, 200);
    }
}

// skills, project, description, imgs
function loadProjects() {
    fetch("./assets/projects.json")
    .then(response => response.json())
    .then(data => {
        var itemCount = 0; // Use this to limit 3 row each row 
        var firstCarousel = true;
        var content = "";
        for(var i = 0; i < data.length; i++) {
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
            content += '<div class="container" style="background: green; display: flex; justify-content: space-between ">';
            content += `<a href="${data[i].github}" class="btn btn-primary">Github</a>`
            content += `<a href="${data[i].demo}" class="btn btn-primary">Demo</a>`
            content += '</div></div></div></div>';
 
            // close the row
            if (itemCount == 2) {
                content += '</div></div>' 
                itemCount = 0;
            } else if (itemCount < 3) {
                itemCount++;
            }
        }
        document.getElementById("items-projects").innerHTML = content;
}) 

}


function loadQuotes(){
    // do whatever you like here
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

    typeWriter();

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