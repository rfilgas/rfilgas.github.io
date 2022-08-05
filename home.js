// Ryan Filgas
// Notes: Unless stated otherwise:
//       1. Styles are located under the declaration.
//       2. Appending of child elements comes at the end.

// Collapse navbar on click
$('.navbar-nav').click(function(){
    $('.navbar-collapse').collapse('hide');
});

// TITLE BLOCK
let title = document.getElementById('title-container');
let prior_block = document.createElement("div");
title.appendChild(prior_block);

let title_textp0 = document.createElement("h1");
title_textp0.textContent = `
Ryan Filgas`
title_textp0.style.textAlign = "center";
title_textp0.style.maxWidth = "95%";
title_textp0.style.paddingLeft = "25px";
title_textp0.className = "my-name";

let title_textp1 = document.createElement("p");
title_textp1.textContent = `
Software Engineer | Student`;
title_textp1.style.textAlign = "center";
title_textp1.style.paddingLeft = "14px";
title_textp1.style.maxWidth = "90%";
// title_textp1.style.fontWeight = "bold";
title_textp1.style.fontSize = "10";

prior_block.appendChild(title_textp0);
prior_block.appendChild(title_textp1);
// END TITLE BLOCK



// INTRO BLOCK
let intro = document.getElementById('intro-container');
let intro_block = document.createElement("div");
intro.appendChild(intro_block);

let intro_textp2 = document.createElement("p");
intro_textp2.alt="text";
intro_textp2.textContent = `
As a former professional photographer turned engineer, I bring the same creativity
and problem solving to engineering as I did to the arts. My primary focuses are on building knowledge
in the fields of infrastructure engineering and machine learning while hatching new ideas for the next
industry disrupting startup in my spare time. I'm always thinking about how to improve daily life by imagining
new tools for human-centric software.`;

let intro_textp3 = document.createElement("p");
intro_textp3.style.paddingBottom = "0%";
intro_textp3.style.marginBottom = "0%";
intro_textp3.alt="text";
intro_textp3.textContent = `
In general I'm really passionate about efficiency, creativity, and
creating a more inclusive world; these things in general shape the projects I'm most
excited about. Outside of work you'll find me spending time with family, enjoying the
outdoors, and waiting for the day I get to finally bring home a german shorthaired
pointer.
`;

intro_block.appendChild(intro_textp2);
intro_block.appendChild(intro_textp3);
// END INTRO BLOCK

// PROJECT 1 -> Elements styles come immediately after their declaration.
let project_1 = document.getElementById('project_1');
let p1_title = document.createElement('h3');
p1_title.className = "paragraph-block paragraph-heading";
p1_title.style.paddingTop = "15px";
p1_title.style.margin = "auto";
p1_title.textContent = 'Google Cloud Data Pipeline Infrastructure | HCL ~ Kafka ~ Bash Scripts';


let p1_description = document.createElement('p');
p1_description.className = "paragraph-block";
p1_description.style.paddingTop = "5px";
p1_description.style.margin = "auto";
p1_description.alt="text";
p1_description.textContent = `
After taking data engineering at Portland State it occurred to me that the entire project build could be automated and
scalable, saving valuable class time and resources. Over a break between terms I sketched out what the infrastructure
would look like and successfully created a project that provisions resources for two virtual machines labeled producer
and consumer that can be used to pull data from public apis, send them to a Kafka topic, consume the messages and store
them in a sql database. The script creates and disposes of ssh keys and provides login commands after the build is complete. A
dditionally a script is pushed up to each virtual machine and run for necessary installs. This will provide a blank slate for a
class project using golang and the trimet API. The proposed architecture and github link are below.
`;

let p1_ref_image = document.createElement('img');
p1_ref_image.className = "full-length-image";
p1_ref_image.src = "images/gcp_pipeline.png";
p1_ref_image.alt = "google cloud platform data pipeline";

project_1.appendChild(p1_title);
project_1.appendChild(p1_description);
project_1.appendChild(p1_ref_image);
// END PROJECT 1

// PROJECT 2 -> Elements styles come immediately after their declaration.
let project_2 = document.getElementById('project_2');

let p2_title = document.createElement('h3');
p2_title.className = "paragraph-block paragraph-heading";
p2_title.style.paddingTop = "15px";
p2_title.style.margin = "auto";
p2_title.textContent = 'Noise Reduction Through Image Fusion | A Novel Application of OpenCV';


let p2_description = document.createElement('p');
p2_description.className = "paragraph-block";
p2_description.style.paddingTop = "5px";
p2_description.style.margin = "auto";
p2_description.alt="text";
p2_description.textContent = `In the course of my photography career I picked up a number of tips and tricks
when shooting, lighting, assisting, and retouching. In this project I applied a shooting and retouching technique
that allows for the fusion of multiple exposures not for HDR, but for noise reduction. Given a 2 image bracket this
program will pull the low-noise pixels from a brighter image, and seamlessly fuse them into a darker image achieving
a jpeg file that has the exposure flexibility of a raw file at a fraction of the size. This technique has an added
benefit of achieving higher color preservation than a pushed jpeg as color is captured directly from the sensor in the
brighter image. Zooming in will be required to see full results. The last mash up in this set both images are brightened
to further see noise detail.`

let p2_ref_image = document.createElement('img');
p2_ref_image.className = "full-length-image";
p2_ref_image.src = "images/photo-project-1.png";
p2_ref_image.alt = "Image Editing Process";

let p2_ref_image2 = document.createElement('img');
p2_ref_image2.className = "full-length-image";
p2_ref_image2.src = "images/photo-project-2.png";
p2_ref_image2.alt = "Images after process";

let p2_ref_image3 = document.createElement('img');
p2_ref_image3.className = "full-length-image";
p2_ref_image3.src = "images/photo-project-3.png";
p2_ref_image3.alt = "Images with brightness boosted to show noise";

project_2.appendChild(p2_title);
project_2.appendChild(p2_description);
project_2.appendChild(p2_ref_image);
project_2.appendChild(p2_ref_image2);
project_2.appendChild(p2_ref_image3);
// END PROJECT 2

// PROJECT 3 -> Elements styles come immediately after their declaration.
let project_3 = document.getElementById('project_3');
project_3.style.paddingBottom = "15px"; // Padding for ending button.

let p3_title = document.createElement('h3');
p3_title.className = "paragraph-block paragraph-heading";
p3_title.style.paddingTop = "15px";
p3_title.style.margin = "auto";
p3_title.textContent = 'Optical Flow Algorithm Implementation | Python';


let p3_description = document.createElement('p');
p3_description.className = "paragraph-block";
p3_description.style.paddingTop = "5px";
p3_description.style.paddingBottom = "10px"
p3_description.style.margin = "auto";
p3_description.textContent = `The goal of the optical flow algorithm is to
essentially detect motion between two or more image frames. Below the results can be seen
as the motion is detected between the images, creating small vectors that can be essentially
seen as "hotspots" of motion. Further implementation details can be seen in the github repo.`;

let p3_ref_image = document.createElement('img');
p3_ref_image.className = "half-length-image";
p3_ref_image.src = "images/optical_flow.jpg";
p3_ref_image.alt = "Optical flow example";
p3_ref_image.style.margin = "auto"

project_3.appendChild(p3_title);
project_3.appendChild(p3_description);
project_3.appendChild(p3_ref_image);
// END PROJECT 3
