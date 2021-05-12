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

games_apps['labyrinth'] = new sitePage();
games_apps.labyrinth.preview.setTitle("Keeper of the Labyrinth");
games_apps.labyrinth.preview.description = "\"What the <span style=\"color: #a02090;\">labyrinth</span> contains is unstoppable. The only thing that can be done is to put time and space between it and us. That's my job, as Keeper of the Labyrinth.\"<br><br>An interactive fiction game about identity, self-discovery and learning to accept and overcome the flaws we find in ourselves."
games_apps.labyrinth.preview.img("./media/labyrinth_logo.png")
games_apps.labyrinth.preview.destinationUrl = "./labyrinth/"

games_apps['gradient'] = new sitePage();
games_apps.gradient.preview.setTitle("Gradient Generator");
games_apps.gradient.preview.description = "A javascript app for generating in-between hexadecimal values, forming a gradient between any two given hexadecimal or RGB colour codes."
games_apps.gradient.preview.img("./media/gradient_thumbnail.png");
games_apps.gradient.preview.destinationUrl = "./content/gradient/"

games_apps['space_base'] = new sitePage();
games_apps.space_base.preview.setTitle("Space Base 72A");
games_apps.space_base.preview.description = "A sci-fi platformer shooter made in a week-long game jam during February 2021.";
games_apps.space_base.preview.img("./content/Space_Base/dialogue_box.png");
games_apps.space_base.preview.destinationUrl = "./games/space_base.html"


writings_stories['nen'] = new sitePage();
writings_stories.nen.preview.setTitle("Cities and Stillness");
writings_stories.nen.preview.description = "\"The city of Nen has no doors...\"<br><br>Flash fiction inspired by Italo Calvino's <i>Invisible Cities</i>."
writings_stories.nen.preview.img("./media/cities_and_stillness.png");
//writings_stories.nen.action = 'print self'
writings_stories.nen.html = "<div class=\"project-page-frame\"><h2 class=\"page-title\">Cities and Stillness</h2><h3 class=\"page-title\">November 2020</h3><img src=\"./media/cities_and_stillness.png\"/><p>I first read Italo Calvino's <i>Invisible Cities</i> in early 2020, and I can hardly describe the effect it had on me. Ever since, I find I keep coming back to it, just flipping to a random page and reading aloud to myself, and each time I do I discover some new insight that I hadn't seen in it upon first reading. It's a marvelous book: The way the author plays with memory and perception and the very concept of stories, the way each of the cities seems to speak to some deeper truth about humanity, the beautiful language use and structure that places so much meaning into every physical aspect of the cities described, turning even the most seemingly mundane things into profound metaphor, ah! I took my time with it, end even then I couldn't get enough. My only lament is that I couldn't read it in the original Italian!</p><p>After reading it, I felt so inspired that I wished to write something in the same style, to capture a spark of what makes his depictions of cities so special to me. It is a feeble attempt, but it is mine–I believe it speaks for itself here.</p><section class=\"embed-fallback-link\"><a href=\"./content/writings/cities_and_stillness.pdf\" target=\"_blank\">View the pdf in a new tab here.</a></section><div class=\"embeded-content\"><embed type=\"application/pdf\" src=\"./content/writings/cities_and_stillness.pdf\"></div></div>"

/*
writings_stories['sincerity'] = new sitePage();
writings_stories.sincerity.preview.setTitle("Sincerity");
writings_stories.sincerity.preview.description = "i love you<br>but these words do not...<br><br>A poem."
*/

writings_stories['brine'] = new sitePage();
writings_stories.brine.preview.setTitle("Beneath the Brine");
writings_stories.brine.preview.description = "\"Monsters lurked in those depths, they said, in hushed tales told over gin in the seaside pubs. Stories only ever spoken while on land, of course. It was bad luck to harbour such ideas at sea—speak of the devil and he shalt appear, after all...\"<br><br>An adventure at sea, and a doomed romance."
writings_stories.brine.preview.img("./media/beneath_the_brine.png")
writings_stories.brine.html = "<div class=\"project-page-frame\"><h2 class=\"page-title\">Beneath the Brine</h2><h3 class=\"page-title\">April 2021</h3><img src=\"./media/beneath_the_brine.png\"/><section class=\"embed-fallback-link\"><a href=\"./content/writings/beneath_the_brine.pdf\" target=\"_blank\">View the pdf in a new tab here.</a></section><div class=\"embeded-content\"><embed type=\"application/pdf\" src=\"./content/writings/beneath_the_brine.pdf\"></div></div>"

writings_stories['spring'] = new sitePage();
writings_stories.spring.preview.setTitle("Spring");
writings_stories.spring.preview.description = "\"The steady rhythm of pedalling helped distract Amber from the strange thoughts running through her head; she could tell herself that her rabbit-heart’s beat was only from exertion, that the flush in her face was only from the wind...\"<br><br>A short romance about a childhood friend, and biking out to see the sunset."
writings_stories.spring.preview.img("./media/spring.png")
writings_stories.spring.html = "<div class=\"project-page-frame\"><h2 class=\"page-title\">Spring</h2><h3 class=\"page-title\">March 2021</h3><img src=\"./media/spring.png\"/><section class=\"embed-fallback-link\"><a href=\"./content/writings/spring.pdf\" target=\"_blank\">View the pdf in a new tab here.</a></section><div class=\"embeded-content\"><embed type=\"application/pdf\" src=\"./content/writings/spring.pdf\"></div></div>"

let about_page_html = `<h2 id="page-title">About the Artist</h2>
<div id="about-page">
    <section id="about-image">
        <img src="./content/self_portrait_icon.png"/>
    </section>
    <section id="about-description">
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
    <section id="about-process">
        <h3>Process Info</h3>
        <p>For all my digital art and animation, I use Clip Studio Paint EX and a Wacom Intuos 7 tablet.<br><br>For writing and organizing larger projects, such as my <i>Keeper of the Labyrinth</i> game, I use Scrivener extensively, which has been an invaluable tool for me.<br><br>For my geometric tiled drawings and animations, I tend to plan the figures first on paper with compass and straightedge.</p>
    </section>
</div> 

`