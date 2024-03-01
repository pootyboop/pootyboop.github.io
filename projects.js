const projectsData = [
    {
        "name": "Sandboard",
        "category": "games",
        "year": "2022",
        "platform": "PC VR",
        "desc": "High-speed VR sand surfing and grappling",
        "featured": "true",

        "skills": [
            "Unreal Engine 🖳",
            "Meta Quest 2 🖳",
            "Blender 🖍",
            "Photoshop 🖍",
            "Logic Pro ♫",
            "Final Cut Pro ▷"
        ],

        "projectEmbed": `<iframe class="project-embed" frameborder="0" src="https://itch.io/embed/1573118?linkback=true&amp;bg_color=161616&amp;fg_color=f9f9f9&amp;link_color=ffc400" width="552" height="167"><a href="https://elliotgmann.itch.io/sandboard">Sandboard by Elliot George Mann</a></iframe>`,
        "ytEmbed": `<iframe id="yt-video" class="d-block embed-responsive" src="https://www.youtube.com/embed/n4X4D63GAXI?si=0ShOzcLuyZ_Xg3e5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        "carouselScreenshots": [
            {
                "screenshot": "/assets/projects/sandboard/home.png"
            },
            {
                "screenshot": "/assets/projects/sandboard/preview.png"
            },
            {
                "screenshot": "/assets/projects/sandboard/Screenshot (323).png"
            }
        ],

        "similarProjects": [
            "Dynamometer Dash",
            "Gata Guressi",
            "Heat of the Moment"
        ]
    },

    {
        "name": "Gata Guressi",
        "category": "games",
        "year": "2024",
        "platform": "Windows",
        "desc": "Sci-fi translation/exploration RPG",
        "featured": "true",

        "skills": [
            "Unity 🖳",
            "C# 🖳",
            "Blender 🖍",
            "Photoshop 🖍",
            "Logic Pro ♫",
            "Final Cut Pro ▷"
        ],

        "projectEmbed": `<iframe class="project-embed" frameborder="0" src="https://itch.io/embed/2484673?linkback=true&amp;bg_color=161616&amp;fg_color=f9f9f9&amp;link_color=ffc400" width="552" height="167"><a href="https://elliotgmann.itch.io/gata-guressi">Gata Guressi by Elliot George Mann</a></iframe>`,
        "ytEmbed": `<iframe id="yt-video" class="d-block embed-responsive" src="https://www.youtube.com/embed/hOg4MtOmip4?si=grhSfJ1SB-lCPBZF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        "carouselScreenshots": [
            {
                "screenshot": "/assets/projects/gata-guressi/window.png"
            },
            {
                "screenshot": "/assets/projects/gata-guressi/preview.png"
            },
            {
                "screenshot": "/assets/projects/gata-guressi/painting.png"
            },
            {
                "screenshot": "/assets/projects/gata-guressi/F0bar.png"
            },
            {
                "screenshot": "/assets/projects/gata-guressi/our-future-is-bright.png"
            },
            {
                "screenshot": "/assets/projects/gata-guressi/janowin.png"
            },
        ],

        "similarProjects": [
            "Head in the Clouds",
            "EM",
            "Sandboard"
        ]
    },

    {
        "name": "Head in the Clouds",
        "category": "games",
        "year": "2023",
        "platform": "Windows",
        "desc": "Chill airborne book delivery",
        "featured": "true"
    },

    {
        "name": "PVP Playground",
        "category": "games",
        "year": "2021",
        "platform": "Unreleased",
        "desc": "Loadout-focused multiplayer movement shooter"
    },

    {
        "name": "Mutablus",
        "category": "games",
        "year": "2023",
        "platform": "Web",
        "desc": "Procedurally-generated 2D exploration"
    },

    {
        "name": "Dynamometer Dash",
        "category": "games",
        "year": "2023",
        "platform": "PC VR",
        "desc": "Record-breaking VR train ride"
    },

    {
        "name": "Heat of the Moment",
        "category": "games",
        "year": "2022",
        "platform": "Windows, Mac",
        "desc": "Intense burning house escape"
    },

    {
        "name": "EM",
        "category": "games",
        "year": "2019",
        "platform": "Unreleased",
        "desc": "Conceptual 2D exploration game"
    },

    {
        "name": "Hoop Sports",
        "category": "games",
        "year": "2022",
        "platform": "Windows, Mac",
        "desc": "Physics-based sports chaos"
    },

    {
        "name": "Mind of Glass",
        "category": "music",
        "year": "2023",
        "length": "29 min",
        "desc": "Phobia-themed electronic beats",

        "skills": [
            "Logic Pro ♫",
            "Massive ♫",
            "Final Cut Pro ▷",
            "Photoshop 🖍"
        ],

        "ytEmbed": `
            <iframe id="yt-video" class="d-block embed-responsive" src="https://open.spotify.com/embed/album/1fo60ZGGMVg6U0yjzpzM9B?utm_source=generator&theme=0"
            width="100%" height="500" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,    
        
        "carouselScreenshots": [
            {
                "screenshot": "/assets/projects/mind-of-glass/preview.png"
            },

            {
                "screenshot": "/assets/projects/mind-of-glass/9minds.png"
            },

            {
                "screenshot": "/assets/projects/mind-of-glass/old-cover.png"
            },

            {
                "screenshot": "/assets/projects/mind-of-glass/mindofglass alt2.png"
            }
        ],

        "similarProjects": [
            "Saliva",
            "Onion Ecdysis"
        ]
    },
    
    {
        "name": "Saliva",
        "category": "music",
        "year": "2021",
        "length": "30 min",
        "desc": "Concept album surrounding liquid and heat"
    },
    
    {
        "name": "Onion Ecdysis",
        "category": "music",
        "year": "2020",
        "length": "24 min",
        "desc": "Experimental electronica/beat tape"
    }
];



var featuredLibrary = document.getElementById("featured-library");
if (featuredLibrary) {
    featuredLibrary.innerHTML = makeFeaturedLibrary();
}

var fullLibraryGames = document.getElementById("full-library-games");
if (fullLibraryGames) {
    fullLibraryGames.innerHTML = makeFullLibrary("games");
}

var fullLibraryMusic = document.getElementById("full-library-music");
if (fullLibraryMusic) {
    fullLibraryMusic.innerHTML = makeFullLibrary("music");
}

var similarLibrary = document.getElementById("similar-library");
if (similarLibrary) {
    similarLibrary.innerHTML = makeSimilarLibrary(getCurrProject());
}



function makeFullLibrary(category) {
    var library = "";

    for (var i = 0; i < projectsData.length; i++) {
        if (projectsData[i].category === category) {
            library += makeCardFromProject(projectsData[i]);
        }
    }

    return library;
}

function makeFeaturedLibrary() {
    var library = "";

    for (var i = 0; i < projectsData.length; i++) {
        if (projectsData[i].featured) {
            library += makeCardFromProject(projectsData[i]);
        }
    }

    return library;
}

function makeSimilarLibrary(project) {
    if (!project.similarProjects) {
        return "";
    }

    var library = `
    <h2>🏷 SIMILAR PROJECTS</h2>
    <hr>
    <div class="container-fluid project-library">
        <div class="row" id="similar-library">
    `;

    for (var i = 0; i < project.similarProjects.length; i++) {
        library += makeCardFromProject(getProjectByName(project.similarProjects[i]), false)
    }
    library += `
        </div>
    </div>
    `;

    return library;
}



function makeCardFromProject(project) {
    const name = project.name
    const slug = slugify(project.name)
    return `
    <div class="col-sm-12 col-lg-4">
        <a href="/${project.category}/${slug}.html" class="card-link">
            <div class="card">
                <img class="card-img-top" src="/assets/projects/${slug}/preview.png" alt="${name} preview image">
                <div class="card-body">
                    <h3 class="card-title">${name.toUpperCase()}</h3>
                    <p class="card-date">${projectExtraInfo(project)}</p>
                    <p class="card-text">${project.desc}</p>
                </div>
            </div>
        </a>
    </div>
    `
}


function projectExtraInfo(project) {
    var subtitle = project.year;
    if (project.hasOwnProperty('platform')) {
        subtitle += " • " + project.platform;
    }

    else if (project.hasOwnProperty('length')) {
        subtitle += " • " + project.length;
    }

    return subtitle;
}



function isProjectFeatured(project) {
    if (project.hasOwnProperty('featured')) {
        return (project.featured === "true");
    }

    else {
        return false;
    }
}




function slugify(str) {
    return String(str)
      .normalize('NFKD') // split accented characters into their base characters and diacritical marks
      .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
      .trim() // trim leading or trailing whitespace
      .toLowerCase() // convert to lowercase
      .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
      .replace(/\s+/g, '-') // replace spaces with hyphens
      .replace(/-+/g, '-'); // remove consecutive hyphens
}

function verifyProjectKey(project, key) {
    return project.hasOwnProperty(key);
}

function getCurrProject() {
    var currLoc = "/" + location.href.split("/").slice(-1);
    return projectsData.find(project => currLoc.includes(slugify(project.name))) || false;
}

function getProjectByName(name) {
    for (var i = 0; i < projectsData.length; i++){
        if (projectsData[i].name === name){
            return projectsData[i];
        }
      }

      return "";
}




var projectHeader = document.getElementById("project-header");
if (projectHeader) {
    projectHeader.innerHTML = `
    ${makeProjectHeader(getCurrProject())}
    `
}

function makeProjectHeader(project) {

    if (project.projectEmbed) {
        return `
        <div class="row">
                <div class="col">
                    <h1>${String(project.name).toUpperCase()}</h1>
                    <p>${projectExtraInfo(project)}</p>
                </div>
                <div class="col">
                    ${makeProjectEmbed(project)}
                </div>
            </div>
        `
    }

    else {
        return `
            <h1>${String(project.name).toUpperCase()}</h1>
            <p>${projectExtraInfo(project)}</p>
        `
    }
}


function makeProjectEmbed(project) {
    if (verifyProjectKey(project, 'projectEmbed')) {
        return project.projectEmbed;
    }
    
    return "";
}




var projectOverviewGraphics = document.getElementById("project-overview-graphics");
if (projectOverviewGraphics) {
    projectOverviewGraphics.innerHTML = `
    ${makeProjectOverviewGraphics(getCurrProject())}
    `
}

function makeProjectOverviewGraphics(project) {
    return `
    <div class="row">
        ${project.ytEmbed ? 
            `
            <div class="col-sm-12 col-lg-6 project-graphic">
                <div${project.category !== "music" ?  ` class="embed-responsive embed-responsive-16by9"` : ` class="project-graphic-iframe-container"`}>
                    ${project.ytEmbed}
                </div>
            </div>
            `
        :
        ""}



        <div class="col-sm-12 col-lg-6 project-graphic">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    ${makeCarouselButtons(project.carouselScreenshots.length)}
                </div>
                <div class="carousel-inner">
                    ${makeScreenshots(project.carouselScreenshots)}
                </div>
                <button id="prev-btn" class="carousel-control-prev btn carousel-btn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button id="next-btn" class="carousel-control-next btn carousel-btn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
    `
}

function makeCarouselButtons(number) {
    var carouselButtons = "";

    for (let i = 0; i < number; i++) {
        var newButton;

        if (i === 0) {
            newButton = `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>`
        }

        else {
            newButton = `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" aria-label="Slide ${i + 1}"></button>`;
        }

        carouselButtons += newButton;
    }

    return carouselButtons;

}

function makeScreenshots(inScreenshots) {
    var screenshots = "";

    for (let i = 0; i < inScreenshots.length; i++) {
        var newSc;

        if (i === 0) {
            newSc = `<div class="carousel-item active">`
        }

        else {
            newSc = `<div class="carousel-item">`;
        }

        newSc += `
            <img class="d-block" src="${inScreenshots[i].screenshot}" alt="First slide">
        `;

        if (inScreenshots[i].caption) {
            newSc += `
            <div class="carousel-caption d-none d-md-block">
                    <p class="image-caption">${inScreenshots[i].caption}</p>
                </div>
            `;
        }
                

        newSc += `
            </div>
        `

        screenshots += newSc;
    }

    return screenshots;
}










var projectSkills = document.getElementById("skills");
if (projectSkills) {
    projectSkills.innerHTML = `
    ${makeSkills(getCurrProject())}
    `
}

function makeSkills(project) {
    if (verifyProjectKey(project, 'skills')) {
        return project.skills.map(makeSkill).join('');
    }
    
    return "";
}



function makeSkill(skill) {
    return `<p class="badge skill">${skill}</p>`;
}