const games_apps = {};
games_apps.parentPageContent = new sitePage();
games_apps.parentPageContent.title = `Games + Apps`

const writings_stories = {};
writings_stories.parentPageContent = new sitePage();
writings_stories.parentPageContent.title = `Writings + Stories`

const visuals_art = {};
visuals_art.parentPageContent = new sitePage();
visuals_art.parentPageContent.title = `Visuals + Art`

visuals_art['iris']= new sitePage();
visuals_art['iris'].preview.setTitle("Iris");
visuals_art['iris'].preview.description = ``
visuals_art['iris'].preview.img("./content/paintings/Iris.jpeg")
visuals_art['iris'].preview.destinationUrl = "./content/paintings/Iris.jpeg"

visuals_art['violette']= new sitePage();
visuals_art['violette'].preview.setTitle("Violette");
visuals_art['violette'].preview.description = ``
visuals_art['violette'].preview.img("./content/paintings/Violette.jpeg")
visuals_art['violette'].preview.destinationUrl = "./content/paintings/Violette.jpeg"

visuals_art['lavande']= new sitePage();
visuals_art['lavande'].preview.setTitle("Lavande");
visuals_art['lavande'].preview.description = ``
visuals_art['lavande'].preview.img("./content/paintings/Lavande.jpeg")
visuals_art['lavande'].preview.destinationUrl = "./content/paintings/Lavande.jpeg"

visuals_art['cloud1']= new sitePage();
visuals_art['cloud1'].preview.setTitle("Clouds - 1");
visuals_art['cloud1'].preview.description = ``
visuals_art['cloud1'].preview.img("./content/paintings/clouds1.jpg")
visuals_art['cloud1'].preview.destinationUrl = "./content/paintings/clouds1.jpg"

visuals_art['cloud2']= new sitePage();
visuals_art['cloud2'].preview.setTitle("Clouds - 2");
visuals_art['cloud2'].preview.description = ``
visuals_art['cloud2'].preview.img("./content/paintings/clouds2.jpg")
visuals_art['cloud2'].preview.destinationUrl = "./content/paintings/clouds2.jpg"

visuals_art['cloud3']= new sitePage();
visuals_art['cloud3'].preview.setTitle("Clouds - 3");
visuals_art['cloud3'].preview.description = ``
visuals_art['cloud3'].preview.img("./content/paintings/clouds3.jpg")
visuals_art['cloud3'].preview.destinationUrl = "./content/paintings/clouds3.jpg"

visuals_art['silver_princess']= new sitePage();
visuals_art['silver_princess'].preview.setTitle("The Silver Princess");
visuals_art['silver_princess'].preview.description = ``
visuals_art['silver_princess'].preview.img("./content/paintings/silver_princess.jpg")
visuals_art['silver_princess'].preview.destinationUrl = "./content/paintings/silver_princess.jpg"

visuals_art['freya']= new sitePage();
visuals_art['freya'].preview.setTitle("Freya");
visuals_art['freya'].preview.description = ``
visuals_art['freya'].preview.img("./content/paintings/freya.jpg")
visuals_art['freya'].preview.destinationUrl = "./content/paintings/freya.jpg"

visuals_art['night']= new sitePage();
visuals_art['night'].preview.setTitle("Night Scene");
visuals_art['night'].preview.description = ``
visuals_art['night'].preview.img("./content/paintings/night_scene.jpg")
visuals_art['night'].preview.destinationUrl = "./content/paintings/night_scene.jpg"

visuals_art['snake']= new sitePage();
visuals_art['snake'].preview.setTitle("A Snake in the Garden");
visuals_art['snake'].preview.description = ``
visuals_art['snake'].preview.img("./content/paintings/snake.jpg")
visuals_art['snake'].preview.destinationUrl = "./content/paintings/snake.jpg"

visuals_art['irises']= new sitePage();
visuals_art['irises'].preview.setTitle("Among the Irises");
visuals_art['irises'].preview.description = ``
visuals_art['irises'].preview.img("./content/paintings/among_irises.jpg")
visuals_art['irises'].preview.destinationUrl = "./content/paintings/among_irises.jpg"

visuals_art['go']= new sitePage();
visuals_art['go'].preview.setTitle("The End.");
visuals_art['go'].preview.description = ``
visuals_art['go'].preview.img("./content/paintings/immortal_go_comic.jpg")
visuals_art['go'].preview.destinationUrl = "./content/paintings/immortal_go_comic.jpg"



games_apps['labyrinth'] = new sitePage();
games_apps.labyrinth.preview.setTitle("Keeper of the Labyrinth");
games_apps.labyrinth.preview.description = `
    "What the <span style="color: #a02090;">labyrinth</span> contains is unstoppable. The only thing that can be done is to put time and space between it and us. That's my job, as Keeper of the Labyrinth."<br><br>
    An interactive fiction game about identity, self-discovery and learning to accept and overcome the flaws we find in ourselves.`
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

writings_stories['technology'] = new sitePage();
writings_stories['technology'].preview.setTitle("What should technology be used for?");
writings_stories['technology'].preview.description = `
    In a 1999 interview, David Bowie was asked,<br>
    “[The internet] is just a tool, isn’t it?”<br>
    He just grinned, and said, “No, it isn’t. It’s an alien life form."<br><br>
    A brief endorsement of the wonder of technology.`
writings_stories['technology'].preview.img("./media/a_tool.png")
writings_stories['technology'].preview.destinationUrl = "./?page=technology"
writings_stories['technology'].html = `<div class="project-page-frame">
    <h2 class="page-title">What should technology be used for?</h2>
    <h3 class="page-title">December 2021</h3>
    <img src="./media/a_tool.png"/>
    <section class="embed-fallback-link">
        <a href="./content/writings/the_use_of_technology.pdf" target="_blank">
            View the pdf in a new tab here.
        </a>
    </section>
    <div class="embeded-content">
        <embed type="application/pdf" src="./content/writings/the_use_of_technology.pdf">
    </div>
</div>`

writings_stories['soma'] = new sitePage();
writings_stories['soma'].preview.setTitle("[system::call-upkeep-helper]");
writings_stories['soma'].preview.description = `
    "There's a god living in the attic, I think. I haven't seen it yet, but soon I will, I'm sure."<br><br>
    A short piece of weird fiction.`
writings_stories['soma'].preview.img("./media/soma.png")
writings_stories['soma'].preview.destinationUrl = "./?page=soma"
writings_stories['soma'].html = `<div class="project-page-frame">
    <h2 class="page-title">[system::call-upkeep-helper]</h2>
    <h3 class="page-title">January 2022</h3>
    <img src="./media/soma.png"/>
    <section class="embed-fallback-link">
        <a href="./content/writings/system-call-upkeep-helper.pdf" target="_blank">
            View the pdf in a new tab here.
        </a></section>
    <div class="embeded-content">
        <embed type="application/pdf" src="./content/writings/system-call-upkeep-helper.pdf">
    </div>
</div>`

writings_stories['stone'] = new sitePage();
writings_stories['stone'].preview.setTitle("The Lightness of Stone");
writings_stories['stone'].preview.description = `
    "The act of mapping a landscape draws the concreteness of reality immediately into a realm of the abstract..."<br><br>
    A short essay about Italo Calvino's notion of 'lightness', topography, and the role of the artist.`
writings_stories['stone'].preview.img("./media/topography.png")
writings_stories['stone'].preview.destinationUrl = "./?page=stone"
writings_stories['stone'].html = `<div class="project-page-frame">
    <h2 class="page-title">The Lightness of Stone</h2>
    <h3 class="page-title">February 2022</h3>
    <img src="./media/topography.png"/>
    <p>I have long been fascinated with the twisting curves of topographical maps. After reading Italo Calvino's essay on <i>lightness</i> from his "Six memos for the next millenium", I stumbled into some ideas about them, from which this essay was born. A short looping animation accompanies the essay, shown below.<img src="./media/shifting.gif"></p>
    <section class="embed-fallback-link">
        <a href="./content/writings/the_lightness_of_stone.pdf" target="_blank">
            View the pdf in a new tab here.
        </a>
    </section>
    <div class="embeded-content">
        <embed type="application/pdf" src="./content/writings/the_lightness_of_stone.pdf">
    </div>
</div>`

writings_stories['carmilla'] = new sitePage();
writings_stories['carmilla'].preview.setTitle("Carmilla");
writings_stories['carmilla'].preview.description = `
    I hesitated a moment. "You are not the monster they make of you—or, perhaps," my voice softened, questioning, "If you are, I'm sure you have good cause, none for which I could seek fault in you."<br><br>
    A glimpse into an alternative (and more lesbian) ending for Joseph Sheridan Le Fanu's <i>Carmilla</i>.`
writings_stories['carmilla'].preview.img("./media/carmilla.png")
writings_stories['carmilla'].preview.destinationUrl = "./?page=carmilla"
writings_stories['carmilla'].html = `<div class="project-page-frame">
    <h2 class="page-title">Carmilla</h2>
    <h3 class="page-title">July 2021</h3>
    <img src="./media/carmilla.png"/>
    <p>After reading Joseph Sheridan Le Fanu's famous early vampire novella <i>Carmilla</i>, I found myself deeply unsatisfied with the two women\'s conclusion, and expecially with the main character's lack of agency in the punishment befalling her (albeit vampiric) friend. This is what might have happened instead.</p>
    <section class="embed-fallback-link">
        <a href="./content/writings/carmilla.pdf" target="_blank">
            View the pdf in a new tab here.
        </a>
    </section>
    <div class="embeded-content">
        <embed type="application/pdf" src="./content/writings/carmilla.pdf">
    </div>
</div>`
/*
writings_stories['sincerity'] = new sitePage();
writings_stories.sincerity.preview.setTitle("Sincerity");
writings_stories.sincerity.preview.description = "i love you<br>but these words do not...<br><br>A poem."
*/

writings_stories['brine'] = new sitePage();
writings_stories.brine.preview.setTitle("Beneath the Brine");
writings_stories.brine.preview.description = `
    "Monsters lurked in those depths, they said, in hushed tales told over gin in the seaside pubs. Stories only ever spoken while on land, of course. It was bad luck to harbour such ideas at sea—speak of the devil and he shalt appear, after all..."<br><br>
    A longer short story: an adventure at sea, a doomed love, and a sense of aching distance.`
writings_stories.brine.preview.img("./media/beneath_the_brine.png")
writings_stories.brine.preview.destinationUrl = "./?page=brine"
writings_stories.brine.html = `<div class="project-page-frame">
    <h2 class="page-title">Beneath the Brine</h2>
    <h3 class="page-title">April 2021</h3>
    <img src="./media/beneath_the_brine.png"/>
    <section class="embed-fallback-link">
        <a href="./content/writings/beneath_the_brine.pdf" target="_blank">
            View the pdf in a new tab here.
        </a>
    </section>
    <div class="embeded-content">
        <embed type="application/pdf" src="./content/writings/beneath_the_brine.pdf">
    </div>
</div>`

writings_stories['spring'] = new sitePage();
writings_stories.spring.preview.setTitle("Spring");
writings_stories.spring.preview.description = `
    "The steady rhythm of pedalling helped distract Amber from the strange thoughts running through her head; she could tell herself that her rabbit-heart’s beat was only from exertion, that the flush in her face was only from the wind..."<br><br>
    A short romance story about a childhood friend, and biking out to see the sunset.`
writings_stories.spring.preview.img("./media/spring.png")
writings_stories.spring.preview.destinationUrl = "./?page=spring"
writings_stories.spring.html = `<div class="project-page-frame">
    <h2 class="page-title">Spring</h2>
    <h3 class="page-title">March 2021</h3>
    <img src="./media/spring.png"/>
    <section class="embed-fallback-link">
        <a href="./content/writings/spring.pdf" target="_blank">
            View the pdf in a new tab here.
        </a></section>
    <div class="embeded-content">
        <embed type="application/pdf" src="./content/writings/spring.pdf">
    </div>
</div>`

writings_stories['nen'] = new sitePage();
writings_stories.nen.preview.setTitle("Cities and Stillness");
writings_stories.nen.preview.description = `
    "The city of Nen has no doors..."<br><br>
    Flash fiction inspired by Italo Calvino's <i>Invisible Cities</i>.`
writings_stories.nen.preview.img("./media/cities_and_stillness.png");
writings_stories.nen.preview.destinationUrl = "./?page=nen"
writings_stories.nen.html = `<div class="project-page-frame">
    <h2 class="page-title">Cities and Stillness</h2>
    <h3 class="page-title">November 2020</h3>
    <img src="./media/cities_and_stillness.png"/>
    <p>I first read Italo Calvino's <i>Invisible Cities</i> in early 2020, and I can hardly describe the effect it had on me. Ever since, I find I keep coming back to it, just flipping to a random page and reading aloud to myself, and each time I do I discover some new insight that I hadn't seen in it upon first reading. It's a marvelous book: The way the author plays with memory and perception and the very concept of stories, the way each of the cities seems to speak to some deeper truth about humanity, the beautiful language use and structure that places so much meaning into every physical aspect of the cities described, turning even the most seemingly mundane things into profound metaphor, ah! I took my time with it, and even then I couldn't get enough. My only lament is that I couldn't read it in the original Italian!</p>
    <p>After reading it, I felt so inspired that I wished to write something in the same style, to capture a spark of what makes his depictions of cities so special to me. It is a feeble attempt, but it is mine–I believe it speaks for itself here.</p>
    <section class="embed-fallback-link">
        <a href="./content/writings/cities_and_stillness.pdf" target="_blank">
            View the pdf in a new tab here.
        </a>
    </section>
    <div class="embeded-content">
    <embed type="application/pdf" src="./content/writings/cities_and_stillness.pdf">
    </div>
</div>`


let about_page_html = `<h2 id="page-title">About the Artist</h2>
<div id="about-page">
    <section id="about-image">
        <img src="./content/self_portrait_icon.png"/>
    </section>
    <section id="about-description">
        <h3>Who are you? What is this?</h3>
    <p>
        My name is Athena aka nymph of the vales, and I'm an artist and programmer currently studying Math and Computer Science at the University of Victoria.</p>
    <p>I make all sorts of things, and this is my place to gather them: short stories and essays, small programming projects, larger programming projects, animations and paintings... I love to play around in different mediums, and explore all the tools that modern technology has to offer creative spirits like me. If you're here for my work, I hope you enjoy. If you're here for me, I hope you can see my picture in what I do; everything here is something I made because it mattered to me.
        </p>
    </section>
    <section id="about-process">
        <h3>Tools and Process</h3>
        <p>I work with Clip Studio Paint EX and a Wacom Intuos 7 tablet, Visual Studio Code, and Scrivener for larger projects (like <i>Keeper of the Labyrinth</i>).<br><br>As an artist, I don't tend to have one focus (although lately I skew more towards writing and programming than the visual arts), but rather create whatever pleases me in that moment. As a result, my projects and ideas gathered here are an amalgam of things; some delightfully strange, others contemplative, others full of excitement. All, surely, some reflection of me.</p>
    </section>
</div> 

`