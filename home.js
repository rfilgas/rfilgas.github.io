// Collapse navbar on click
$('.navbar-nav').click(function () {
    $('.navbar-collapse').collapse('hide');
});

//  TEXT ELEMENTS

//Title Block
let title = document.getElementById('title-container');
let prior_block = document.createElement("div");
title.appendChild(prior_block);

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
intro.appendChild(intro_block);


let intro_textp2 = document.createElement("p")
intro_textp2.textContent = `
As a highly technical architecture and art photographer turned engineer, I bring the same creativity
and problem solving to engineering as I did to the arts. My primary focuses are on building knowledge
in the fields of infrastructure engineering and machine learning while hatching new ideas for the next
industry disrupting startup in my spare time. I'm always thinking about how to improve daily life by imagining
new tools for human-centric software.`

let intro_textp3 = document.createElement("p");
intro_textp3.textContent = `
In general I'm really passionate about efficiency, creativity, and
creating a more inclusive world; these things in general shape the projects I'm most
excited about. Outside of work you'll find me spending time with family, enjoying the
outdoors, and waiting for the day I get to finally bring home a german shorthaired
pointer.
`;

intro_block.appendChild(intro_textp2);
intro_block.appendChild(intro_textp3);



// This is a div element. Can append directly.
let project_1 = document.getElementById('project_1');
let p1_title = document.createElement('h5');
p1_title.style.paddingTop = "15px";
let p1_description = document.createElement('p');
p1_description.style.paddingTop = "5px";
let p1_ref_image = document.createElement('img');
p1_ref_image.className = "full-length-image"
p1_ref_image.src = "images/gcp_pipeline.png";
p1_ref_image.alt = "Image of google cloud platform data pipeline";

project_1.appendChild(p1_title)
project_1.appendChild(p1_description)
project_1.appendChild(p1_ref_image)

p1_title.textContent = 'Google Cloud Data Pipeline Infrastructure';
p1_title.style.textDecoration = "underline";

p1_description.textContent = `
After taking data engineering at Portland State it occurred to me that the entire project build could be automated and
scalable, saving valuable class time and resources. Over a break between terms I sketched out what the infrastructure
would look like and successfully created a project that provisions resources for two virtual machines labeled producer
and consumer that can be used to pull data from public apis, send them to a Kafka topic, consume the messages and store
them in a sql database. The script creates and disposes of ssh keys and provides login commands after the build is complete. A
dditionally a script is pushed up to each virtual machine and run for necessary installs. This will provide a blank slate for a
class project using golang and the trimet API. The proposed architecture and github link are below.
`


// Google Cloud Platform Infrastructure for a small scale data pipeline using Terraform HCL, Confluent Kafka, and Bash.