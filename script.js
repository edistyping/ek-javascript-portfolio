console.log("Hi")

// For Nav and Paging
// Link scrolling and nav tabs 
var index_page = 0;
var var_home = document.getElementById("nav-container-home"); 
var var_projects = document.getElementById("nav-container-projects");
var var_about = document.getElementById("nav-container-about");
var arr_navs = [var_home, var_projects, var_about];

var_home.addEventListener("click", function(e) {
    var_home.classList.add('active'); 
    var_projects.classList.remove('active');
    var_about.classList.remove('active');

});
var_projects.addEventListener("click", function(e) {
    var_home.classList.remove('active'); 
    var_projects.classList.add('active');
    var_about.classList.remove('active');

    // update page
});
var_about.addEventListener("click", function(e) {
    var_home.classList.remove('active'); 
    var_projects.classList.remove('active');
    var_about.classList.add('active');

    // update page
});


// Scrolling
var scrollValue = 0;
var slide = 0;
var scrollingDown = true;
document.addEventListener('wheel', function(e) {
    // console.log("wheeling...  " + "scrollValue: " + scrollValue + "scrollingDown: " + scrollingDown + "   slide: " + slide);\

    var home = document.getElementById("container-home"); 
    var projects = document.getElementById("container-projects");
    var about = document.getElementById("container-about");
    var arr_pages = [home, projects, about];

    // if (e.deltaY > 0) // scrolling down
    if (e.deltaY > 0 && scrollingDown) { // scroll down
        scrollValue++;
    } else if (e.deltaY > 0 && !scrollingDown) {
        scrollValue = 0;
        scrollingDown = true;
    } else if (e.deltaY < 0 && scrollingDown) { // scroll up
        scrollValue = 0;
        scrollingDown = false;
    } else if (e.deltaY < 0 && !scrollingDown) {
        scrollValue++;
    }

    // Update pages or process switching
    if (scrollValue >= 20 && scrollingDown && slide < 2) {
        scrollValue = 0;
        slide++;
        arr_pages[slide - 1].style.opacity = 0;
        arr_pages[slide - 1].style.visibility = "hidden";
        arr_pages[slide - 1].style.transition = "visibility 0.6s, opacity 0.6s linear";

        arr_pages[slide].style.opacity = 1;
        arr_pages[slide].style.visibility = "visible";
        arr_pages[slide].style.transition = "visibility 0.6s, opacity 0.6s linear";

        arr_navs[slide - 1].classList.remove('active');
        arr_navs[slide].classList.add('active');
        
        if (slide >= 3) {
            slide = 2;
        }
    } else if (scrollValue >= 20 && !scrollingDown && slide > 0) { 
        scrollValue = 0;
        slide--;
        arr_pages[slide + 1].style.opacity = 0;
        arr_pages[slide + 1].style.visibility = "hidden";
        arr_pages[slide + 1].style.transition = "visibility 0.6s, opacity 0.6s linear";

        arr_pages[slide].style.opacity = 1;
        arr_pages[slide].style.visibility = "visible";
        arr_pages[slide].style.transition = "visibility 0.6s, opacity 0.6s linear";

        arr_navs[slide + 1].classList.remove('active');
        arr_navs[slide].classList.add('active');

        if (slide <= 0) {
            slide = 0;
        }
    }


});

// Home page typing
var i = 0; // word index
var ii = 0; // arry index
var index_emoji, index_emoji2 = -1;
var speed = 100; /* The speed/duration of the effect in milliseconds */
var homeTexts = ['Hello World!', 'My name is', 'Edward', 'I enjoy Programming &#128187;, Music &#127911;, and Hot Teas &#9749;']
function typeWriter() {
    if (ii >= homeTexts.length)
        return;
    
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
        // console.log("currentChar: " + currentChar);
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
        setTimeout(typeWriter, speed);
    } 

    if (i >= homeTexts[ii].length) {
        ii++;
        i = 0;
        setTimeout(typeWriter, speed);
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

// For quotes
var index = 0;
var loadedQuotes = false;
var myFavoriteQuotes = [];
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