// Colapse navbar on click
$('.navbar-nav').click(function () {
    $('.navbar-collapse').collapse('hide');
});



//  TEXT ELEMENTS

//Title Block
let title = document.getElementById('title-container');
let prior_block = document.createElement("div");
title.appendChild(prior_block)

let title_textp0 = document.createElement("h1")
title_textp0.textContent = `
Ryan Filgas`
title_textp0.style.textAlign = "center";
// title_textp0.style.paddingBottom = "10px";
// title_textp0.style.paddingLeft = "10px";
// title_textp0.style.paddingRight = "10px";

let title_textp1 = document.createElement("h6")
title_textp1.textContent = `
Software Engineer | Student`
title_textp1.style.textAlign = "center";

prior_block.appendChild(title_textp0);
prior_block.appendChild(title_textp1);


// Intro Block
let intro = document.getElementById('intro-container');
let intro_block = document.createElement("div");
intro.appendChild(intro_block)


let intro_textp2 = document.createElement("p")
intro_textp2.textContent = `
As a phtoographer turned engineer who persues work experiences
out of passion, I bring the same creativity and problem solving to computer science as I
did to the arts. My primary focuses are on building knowledge in the fields of infrastructure
engineering and machine learning while hatching new ideas for the next industry disrupting
startup in my spare time. `

let intro_textp3 = document.createElement("p")
intro_textp3.textContent = `
In general I'm really passionate about efficiency, timesaving, and
creating a more inclusive world; these things in general shape the projects I'm most
excited about. Outside of work you'll find me spending time with family, enjoying the
outdoors, and waiting for the day I get to finally bring home a german shorthaired
pointer.
`

intro_block.appendChild(intro_textp2);
intro_block.appendChild(intro_textp3);





// let navbar = document.getElementById('navbar');
// let navbar_container = document.createElement("div");
// let navtext = document.createElement("h1");
// navtext.textContent = " Intro Previous Work Projects Contact"
// navbar_container.appendChild(navtext);
// navbar.appendChild(navbar_container);
//   "Would you like to sign up for the newsletter?";
// newsletter_question.class = "newsletter_question";
// newsletter_question.style.fontWeight = "bold";
// newsletter_question.style.padding = "0";
// newsletter_question.style.margin = "0";
// form.appendChild(question_container);
// question_container.appendChild(newsletter_question);