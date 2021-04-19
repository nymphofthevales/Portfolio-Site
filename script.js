let menuShown = false;

const about = document.getElementById('about')
about.addEventListener('click',()=>{
    print('about')
})
const art = document.getElementById('art')
art.addEventListener('click',()=>{
    print('art')
})
const animations = document.getElementById('animations')
animations.addEventListener('click',()=>{
    print('animations')
})
const writing = document.getElementById('writing')
writing.addEventListener('click',()=>{
    print('writing')
})
const games = document.getElementById('games')
games.addEventListener('click',()=>{
    print('games')
})
document.getElementById('menu-button').addEventListener('click',()=>{menu()})

const navButtons = [about,games,writing,art,animations];

function print(page) {
    if (page === 'about') {
        console.log(`${page} button pressed`);
        about.load();
    } else if (page === 'art') {
        console.log(`${page} button pressed`)
    }else if (page === 'animations') {
        console.log(`${page} button pressed`)
    } else if (page === 'writing') {
        console.log(`${page} button pressed`)
    } else if (page === 'games') {
        console.log(`${page} button pressed`)
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
        setTimeout(()=>{nav.classList.add('hidden')},1000)
        about.focus();
        about.blur();
        for (let i=0; i<navButtons.length; i++) {
            navButtons[i].tabIndex = -1;
        }
    };
};



function contentPreview() {
    this.title = String();
    this.description = String();
    this.imgUrl = String();
    this.listener = 'code';
}
contentPreview.prototype.setTitle = function() {

}
contentPreview.prototype.setDescription = function() {

}
contentPreview.prototype.setImgUrl = function() {

}
contentPreview.prototype.getHtml = function() {

}

function pageContent() {
    this.images = Array();
    this.text = Array();
}
pageContent.prototype.getContent = function() {
    
};
pageContent.prototype.addImage = function() {

}

