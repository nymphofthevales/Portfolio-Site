const games_apps = {};
games_apps.parentPageContent = new sitePage();
games_apps.parentPageContent.title = `Games + Apps`

const writings_stories = {};
writings_stories.parentPageContent = new sitePage();
writings_stories.parentPageContent.title = `Writings + Stories`

const illustrations_portraits = {};
illustrations_portraits.parentPageContent = new sitePage();
illustrations_portraits.parentPageContent.title = `Illustrations + Portraits`

const animations_geometrics = {};
animations_geometrics.parentPageContent = new sitePage();
animations_geometrics.parentPageContent.title = `Animations + Geometrics`

games_apps['space_base'] = new sitePage();
games_apps.space_base.preview.setTitle("Space Base 72A");
games_apps.space_base.preview.description = "A sci-fi platformer shooter made in a week-long game jam during February 2021.";
games_apps.space_base.preview.img("./content/Space_Base/dialogue_box.png");
games_apps.space_base.preview.destinationUrl = "./games/space_base.html"

games_apps['labyrinth'] = new sitePage();
games_apps.labyrinth.preview.setTitle("Keeper of the Labyrinth");
games_apps.labyrinth.preview.description = "An interactive hypertext narrative game about a tortured young witch delving into a mysterious labyrinth, and finding at every turn that things are not as they seem..."

writings_stories['nen'] = new sitePage();
writings_stories.nen.preview.setTitle("Cities and Stillness");
writings_stories.nen.preview.description = "The city of Nen has no doors...<br><br>A short piece inspired by Italo Calvino's <i>Invisible Cities</i>."

writings_stories['sincerity'] = new sitePage();
writings_stories.sincerity.preview.setTitle("Sincerity");
writings_stories.sincerity.preview.description = "i love you<br>but these words do not...<br><br>A poem."

writings_stories['spring'] = new sitePage();
writings_stories.spring.preview.setTitle("Spring");
writings_stories.spring.preview.description = "A short romance about a childhood friend, and biking out to see the sunset."

let about_page_html = `<h2 id="page-title">About the Artist</h2>
<div id="about-page">
<section class="col1 row1" id="about-image">
    <img src="./content/self_portrait_icon.png"></img>
</section>
    <section class="col2 row1" id="about-description">
        <p>Hello!<br><br>Welcome to my site! I'm a queer trans artist, programmer, and writer from Alberta, Canada. I love finding new ways to share stories and create experiences for others; through writing, games, animation, illustration... Combining these mediums and tools in new ways to create unique things brings me so much joy.
        <br>
        <br>
        This digital portfolio contains all the work that I'm proud of as well as information about the various projects I've worked on. I hope you find something of interest to you!
        <br>
        <br>
        Cheers,<br>
        Athena
        </p>
    </section>
    <section class="colspan1-2 row2" id="process-info">
        <h3>Process Info</h3>
        <p>For all my digital art and animation, I use Clip Studio Paint EX and a Wacom Intuos 7 tablet.<br><br>For writing and organizing larger projects, such as my <i>Keeper of the Labyrinth</i> game, I use Scrivener extensively, which has been an invaluable tool for me.<br><br>For my geometric tiled drawings and animations, I tend to plan the figures first on paper with compass and straightedge.</p>
    </section>
</div> 

`