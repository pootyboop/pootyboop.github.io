const projectsData = {
    "games": [
        {
            "name": "Sandboard",
            "year": "2022",
            "platform": "PC VR",
            "desc": "High-speed VR sand surfing and grappling",
            "featured": "true"
        },

        {
            "name": "Gata Guressi",
            "year": "2024",
            "platform": "Windows",
            "desc": "Sci-fi translation/exploration RPG",
            "featured": "true"
        },

        {
            "name": "Head in the Clouds",
            "year": "2023",
            "platform": "Windows",
            "desc": "Chill airborne book delivery",
            "featured": "true"
        },

        {
            "name": "PVP Playground",
            "year": "2021",
            "platform": "Unreleased",
            "desc": "Loadout-focused multiplayer movement shooter"
        },

        {
            "name": "Mutablus",
            "year": "2023",
            "platform": "Web",
            "desc": "Procedurally-generated 2D exploration"
        },

        {
            "name": "Dynamometer Dash",
            "year": "2023",
            "platform": "PC VR",
            "desc": "Record-breaking VR train ride"
        },

        {
            "name": "Heat of the Moment",
            "year": "2022",
            "platform": "Windows, Mac",
            "desc": "Intense burning house escape"
        },

        {
            "name": "EM",
            "year": "2019",
            "platform": "Unreleased",
            "desc": "Conceptual 2D exploration game"
        },

        {
            "name": "Hoop Sports",
            "year": "2022",
            "platform": "Windows, Mac",
            "desc": "Physics-based sports chaos"
        }
    ],

    "music": [
        {
            "name": "Mind of Glass",
            "year": "2023"
        },
        
        {
            "name": "Saliva",
            "year": "2021"
        }
    ]
}

document.getElementById("featured-library-games").innerHTML = `
${projectsData.games.map(makeCardFromProjectFeatured).join('')}
`

document.getElementById("full-library-games").innerHTML = `
${projectsData.games.map(makeCardFromProjectFull).join('')}
`


function makeCardFromProjectFeatured(project) {
    return makeCardFromProject(project, true);
}


function makeCardFromProjectFull(project) {
    return makeCardFromProject(project, false);
}



function makeCardFromProject(project, onlyIfFeatured) {
    if (onlyIfFeatured && !isProjectFeatured(project)) {
        return "";
    }

    const name = project.name
    const slug = slugify(project.name)
    return `
    <div class="col-sm-12 col-lg-4">
        <a href="/games/${slug}.html" class="card-link">
            <div class="card">
                <img class="card-img-top" src="/assets/games/${slug}/preview.png" alt="${name} preview image">
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