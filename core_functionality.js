"use strict"

let menuShown = false;
let pageFrame = document.getElementById("page-frame");

//listen for menu buttons and run actions once pressed
const nav_about = document.getElementById('about')
nav_about.addEventListener('click',()=>{print('about')})

const nav_all = document.getElementById('all')
nav_all.addEventListener('click',()=>{print('all')})

const nav_art = document.getElementById('art')
nav_art.addEventListener('click',()=>{print(visuals_art)})


const nav_writing = document.getElementById('writing')
nav_writing.addEventListener('click',()=>{print(writings_stories)})

const nav_games = document.getElementById('games')
nav_games.addEventListener('click',()=>{print(games_apps)})

document.getElementById('menu-button').addEventListener('click',()=>{menu()})

const navButtons = [nav_about,nav_games,nav_writing,nav_art];
let mainPages = [games_apps,writings_stories,visuals_art];


function print(page) {
    console.log(page)
    if (page === "about") {
        pageFrame.innerHTML = about_page_html;
        menu();
    } else if (page === "all") {
        let totalHtml = about_page_html;
        totalHtml += '<hr>';
        for (let i=0; i<mainPages.length; i++) {
            generateHtmlForMainPage(mainPages[i])
            totalHtml += mainPages[i].parentPageContent.html;
            totalHtml += '<hr>';
        }
        pageFrame.innerHTML = totalHtml;
        for (let i=0; i<mainPages.length; i++) {
            generateListeners(mainPages[i]);
        }
        menu();
    } else {
        window.scroll(0,0);
        generateHtmlForMainPage(page);
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
    for (let key in page) {
        if (key !== "parentPageContent") {
            if (page[key].preview.destinationUrl !== "") {
                document.getElementById(page[key].preview._id).addEventListener('click',()=>{
                    window.location.href = page[key].preview.destinationUrl
                })
            } /*else {
                document.getElementById(page[key].preview._id).addEventListener('click',()=>{
                    pageFrame.innerHTML = page[key].html;
                    window.scroll(0,0);
                })
            }*/
        }
    }
}

function checkQueryString() {
    let query = window.location.href.split('?')
    if (query.length > 1) {
        let queryAll = query[1].split('&')
        for (let i = 0; i < queryAll.length; i++) {
            let currentPair = queryAll[i].split('=');
            console.log(currentPair)
            if (currentPair[0] === 'page') {
                for (let i=0; i < mainPages.length; i++) {
                    for (let key in mainPages[i]) {
                        console.log(key)
                        if (key === currentPair[1]) {
                            pageFrame.innerHTML = mainPages[i][key].html;
                        }
                    }
                }
            }
        }
    } else {
        menuShown = true;
        print("all")
    }
}


//set initial state
//pageFrame.innerHTML = about_page_html;
checkQueryString();