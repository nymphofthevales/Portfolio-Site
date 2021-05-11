"use strict"

let menuShown = false;
let pageFrame = document.getElementById("page-frame");

//listen for menu buttons and run actions once pressed
const nav_about = document.getElementById('about')
nav_about.addEventListener('click',()=>{print('about')})

const nav_all = document.getElementById('all')
nav_all.addEventListener('click',()=>{print('all')})

const nav_art = document.getElementById('art')
nav_art.addEventListener('click',()=>{print(illustrations_portraits)})

const nav_animations = document.getElementById('animations')
nav_animations.addEventListener('click',()=>{print(animations_geometrics)})

const nav_writing = document.getElementById('writing')
nav_writing.addEventListener('click',()=>{print(writings_stories)})

const nav_games = document.getElementById('games')
nav_games.addEventListener('click',()=>{print(games_apps)})

document.getElementById('menu-button').addEventListener('click',()=>{menu()})

const navButtons = [nav_about,nav_games,nav_writing,nav_art,nav_animations];

function print(page) {
    console.log(page)
    if (page === "about") {
        pageFrame.innerHTML = about_page_html;
        menu();
    } else if (page === "all") {
        let totalPages = [games_apps,writings_stories,illustrations_portraits,animations_geometrics];
        let totalHtml = about_page_html;
        totalHtml += '<hr>';
        for (let i=0; i<totalPages.length; i++) {
            generateHtmlForPage(totalPages[i])
            totalHtml += totalPages[i].parentPageContent.html;
            totalHtml += '<hr>';
        }
        pageFrame.innerHTML = totalHtml;
        for (let i=0; i<totalPages.length; i++) {
            generateListeners(totalPages[i]);
        }
        menu();
    } else {
        generateHtmlForPage(page);
        pageFrame.innerHTML = page.parentPageContent.html
        setTimeout(()=>{
            generateListeners(page);
        }, 10);
        menu()
    }
}

function menu() {
    let nav = document.getElementById('navigator');
    if (menuShown === false) {
        menuShown = true;
        nav.classList.remove('hidden');
        nav.classList.remove('closed');
        nav.classList.add('shown');
        about.focus();
        about.blur();
        for (let i=0; i<navButtons.length; i++) {
            navButtons[i].tabIndex = i+2;
        }
    } else if (menuShown === true) {
        menuShown = false;
        nav.classList.remove('shown')
        nav.classList.add('closed');
        setTimeout(()=>{nav.classList.add('hidden')},500)
        about.focus();
        about.blur();
        for (let i=0; i<navButtons.length; i++) {
            navButtons[i].tabIndex = -1;
        }
    };
};

function generateListeners(page) {
    let buttons = {};
    for (let key in page) {
        if (key !== "parentPageContent") {
            buttons[key] = document.getElementById(`${page[key].preview._id}`);
            console.log(buttons);
        }
    }
    for (let btn in buttons) {
        buttons[btn].addEventListener('click',()=>{window.location.assign(page[btn].destinationUrl)});
    }
}

//set initial state
//pageFrame.innerHTML = about_page_html;
menuShown = true;
print("all")
