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
            generateHtmlForMainPage(totalPages[i])
            totalHtml += totalPages[i].parentPageContent.html;
            totalHtml += '<hr>';
        }
        pageFrame.innerHTML = totalHtml;
        for (let i=0; i<totalPages.length; i++) {
            generateListeners(totalPages[i]);
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
            if (page[key].preview.action === undefined && page[key].preview.destinationUrl !== "") {
                document.getElementById(page[key].preview._id).addEventListener('click',()=>{
                    window.location.href = page[key].preview.destinationUrl
                    console.log('failed to place listener for action')
                })
            } else {
                document.getElementById(page[key].preview._id).addEventListener('click',()=>{
                    pageFrame.innerHTML = page[key].html;
                    window.scroll(0,0);
                })
                /*document.getElementById(page[key].preview._id).addEventListener('click',()=>{
                    handlePagePreviewAction(page[key])
                    console.log('placed listener for action')
                    pageFrame.innerHTML = page[key].html;
                })*/
            }
        }
    }
}

/*function handlePagePreviewAction(pageObject) {
    if (pageObject.preview.action === 'print self') {
        pageFrame.innerHTML = pageObject.html;
    } else {
        pageObject.preview.action(pageObject);
    }
}*/

//set initial state
//pageFrame.innerHTML = about_page_html;
menuShown = true;
print("all")
