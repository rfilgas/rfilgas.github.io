// Collapse navbar on click
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


// Text to be added for project -> will be trimmed down.

// Google Cloud Platform Infrastructure for a small scale data pipeline using Terraform HCL, Confluent Kafka, and Bash.

// After taking data engineering at Portland State it occurred to me that the entire project build could be automated and
// scalable, saving valuable class time and resources. Over a break between terms I sketched out what the infrastructure
// would look like and successfully created a project that provisions resources for two virtual machines labeled producer
// and consumer that can be used to pull data from public apis, send them to a Kafka topic, consume the messages and store
// them in a sql database. The script creates and disposes of ssh keys and provides login commands after the build is complete. A
// dditionally a script is pushed up to each virtual machine before executing. The vm scripts and program themselves are not
// filled in as the project is meant to be a blank slate. In the future the project could be forked and used to create the
// full pipeline in a repeatable way, the eventual intention is to adapt the class project to use go-lang and configure it
// to use Portlands Trimet API instead of c-tran as a fully automated deployment. The proposed architecture for this is below:
