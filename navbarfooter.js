const navLinks = [
    {
        "text": "Games",
        "link": "/games"
    },

    {
        "text": "Music",
        "link": "/music"
    },

    {
        "text": "Projects",
        "link": "/projects"
    },

    {
        "text": "CV",
        "link": "/cv"
    }
]



document.getElementById("navbar").innerHTML = `
<div class="container-xxl">

    <!-- logo -->
    <a href="/" id="navbar-logo">
        <img src="/assets/icons/EGMlogo.png" alt="Stylized logo of the letters E G M" height="65">
    </a>

    <!-- toggle button for mobile nav -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
    data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>

    <!-- navbar links -->
    <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
        <ul class="navbar-nav">
            ${navLinks.map(makeNavLink).join('')}
            <form action="/search" class="searchbar d-flex" onsubmit="return search();"></form>
        </ul>
    </div>
</div>
`


document.body.innerHTML += `

<footer class="footer">
    <div class="row footer-row">
        <div class="col footer-col footer-col-left">
            <!--
            <p class="footer-header">
                Contact
            </p>
            -->
            <a class="footer-text" href="mailto:elliotgmann@gmail.com">elliotgmann@gmail.com</a>
        </div>
        <div class="col footer-col footer-col-center">
            <button onclick="topFunction()" id="backToTopBtn" class="footer-col-center" title="Back to Top">Back to Top</button>
        </div>
        <div class="col footer-col footer-col-right social-links">
        </div>
    </div>
</footer>

`


var searchTitle = document.getElementById("search-term");

if (searchTitle) {
    var searchTerm = getSearchTerm();
    htmlSearchTerm = `"${searchTerm.toUpperCase()}"`;
    if (htmlSearchTerm === `""`) {
        htmlSearchTerm = "UNFILTERED";
    }
    searchTitle.innerHTML = htmlSearchTerm;
    document.getElementById("search-library").innerHTML = makeSearchLibrary(searchTerm);

    if (searchTerm === "") {

    } else {
        document.title += ` - "${searchTerm}"`;
    }
}

function getSearchTerm() {
    var searchTerm = document.location.href.split('=')[1];

    if (searchTerm) {
        return searchTerm.replaceAll("+", " ").replaceAll("%20", " ");
    }

    return "";
}

function search() {

}






var socialLinks = document.getElementsByClassName("social-links");
for (var i = 0; i < socialLinks.length; i++){
    socialLinks[i].innerHTML = `
    <a href="https://www.linkedin.com/in/elliot-mann/" class="social-icon-link" target="_blank" aria-label="Visit my LinkedIn">
        <img src="/assets/icons/linkedin.svg" class="social-icon" alt="LinkedIn">
    </a>
    <a href="https://elliotgmann.itch.io" class="social-icon-link" target="_blank" aria-label="Visit my itch.io page">
        <img src="/assets/icons/itch.svg" class="social-icon" alt="itch.io">
    </a>
    <a href="https://open.spotify.com/artist/2VMULBbGuXgT0RTJT2yMyi?si=nqbQfGGXTL6Qr_C7HLPzeg&nd=1&dlsi=4493b3734be84645" class="social-icon-link" target="_blank" aria-label="Visit my Spotify">
        <img src="/assets/icons/spotify.svg" class="social-icon" alt="Spotify">
    </a>
    <a href="https://www.youtube.com/@elliotgmann/featured" class="social-icon-link" target="_blank" aria-label="Visit my YouTube page">
        <img src="/assets/icons/youtube.svg" class="social-icon" alt="YouTube">
    </a>
    `
};

var searchBars = document.getElementsByClassName("searchbar");
for (var i = 0; i < searchBars.length; i++) {
    searchBars[i].innerHTML = `
    <input type="text" placeholder="Search..." name="search" ${searchTitle ? autofocus="autofocus" : ""}>
    <button type="submit" onsubmit="return doSomething();" class="search-button" aria-label="Search for projects"><img src="/assets/icons/search.svg" alt="Search button"></button>
    `
}


function makeNavLink(link) {
    return `
    <li class="nav-item">
        <a class="nav-link"${isSelected(link)} href="${shouldDirectOpenCV(link.text) ? `/assets/CV%20Elliot%20George%20Mann.pdf" target="_blank` : link.link}">
            ${link.text}
        </a>
    </li>
    `
}



function shouldDirectOpenCV(link) {
    return link.toLowerCase().includes("cv") && window.matchMedia('(max-width: 500px)').matches;
}



function isSelected(link) {
    var selectedHTML = ` id="selected-nav-tab"`;
    var currLoc = location.href;

    if (currLoc.includes("?search")) {
        return "";
    }

    var currProj = getCurrProject();

    if (currProj) {
        if (currProj.category === link.text.toLowerCase()) {
            return selectedHTML;
        }

        else {
            return "";
        }
    }

    else if (currLoc.includes(link.text.toLowerCase())) {
        return selectedHTML;
    }

    else if (link.text === "CV" && currLoc.includes("elliotgmann.com/cv")) {
        return selectedHTML;
    }
    
    else {
        return "";
    }

}



function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}