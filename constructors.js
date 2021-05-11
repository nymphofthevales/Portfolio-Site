function contentPreview() {
    this._title = "";
    this.description = "";
    this.has_img = false;
    this._imgUrl = "";
    this._id = "";
    this.destinationUrl = "";
}
contentPreview.prototype.generateId = function(string) {
    let words = string.split(' ');
    let id = '';
    for (let i=0; i<words.length; i++) {
        id = id + words[i];
    }
    id += `${Math.floor(Math.random()*1000)}`;
    return id;
}
contentPreview.prototype.setTitle = function(a) {
    this._title = a;
    this._id = this.generateId(a)
}
contentPreview.prototype.img = function(url) {
    this._imgUrl = url.toString();
    this.has_img = true;
}
contentPreview.prototype.generateHtml = function() {
    if (this.has_img === true) {
        return `<button class="content-preview" id="${this._id}">
            <img class="preview-img" src="${this._imgUrl}"/>
            <h2>${this._title}</h2>
            <p>${this.description}</p>
    </button>`
    } else if (this.has_img === false) {
        return `<button class="content-preview" id="${this._id}">
        <div class="col1">
            <h2>${this._title}</h2>
            <p>${this.description}</p>
        </div>
        </button>`
    }
}

function sitePage() {
    this.title = '';
    this.html = '';
    this.preview = new contentPreview();
}
sitePage.prototype.getContent = function() {
    return this.html;
};

function generateHtmlForPage(page) {
    page.parentPageContent.html = '';
    let pageid = page.parentPageContent.title.replace(/\s+/g, '');
    page.parentPageContent.html += `<div id=\"${pageid}\"><h2 id=\"page-title\">${page.parentPageContent.title}</h2><div class="content-previews-frame">`
    for (let key in page) {
        if (key !== "parentPageContent") {
            page.parentPageContent.html += page[key].preview.generateHtml();
        }
    }
    page.parentPageContent.html += `</div></div>`
}
