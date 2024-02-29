const navLinks = [
    {
        "text": "Games",
        "link": "/games.html"
    },

    {
        "text": "Music",
        "link": "/music.html"
    },

    {
        "text": "CV",
        "link": "/cv.html"
    },

    {
        "text": "About Me",
        "link": "/about-me.html"
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
        </ul>
    </div>
</div>
`


function makeNavLink(link) {
    return `
    <li class="nav-item">
        <a class="nav-link"${isSelected(link)} href=${link.link}>
            ${link.text}
        </a>
    </li>
    `
}



function isSelected(link) {
    var currLoc = "/" + location.href.split("/").slice(-1);
    if (currLoc.includes(link.link)) {
        return ` id="selected-nav-tab"`;
    } else {
        return "";
    }

}