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
        "text": "Projects",
        "link": "/projects.html"
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


document.body.innerHTML += `

<footer class="footer">
            <div class="row footer-row justify-content-between">
                <div class="col footer-col footer-col-left">
                    <!--
                    <p class="footer-header">
                        Contact
                    </p>
                    -->
                    <a class="footer-text" href="mailto:elliotgmann@gmail.com">
                        elliotgmann@gmail.com
                    </a>
                </div>
                <div class="col footer-col footer-col-center">
                    <button onclick="topFunction()" id="backToTopBtn" title="Back to Top">Back to Top</button>
                </div>
                    <div class="col footer-col footer-col-right social-links">
                </div>
            </div>
        </footer>

`


var socialLinks = document.getElementsByClassName("social-links");
for (var i = 0; i < socialLinks.length; i++){
    socialLinks[i].innerHTML = `
    <a href="https://www.linkedin.com/in/elliot-mann/" class="social-icon-link">
        <img src="/assets/icons/linkedin.svg" class="social-icon">
    </a>
    <a href="https://elliotgmann.itch.io" class="social-icon-link">
        <img src="/assets/icons/itch.svg" class="social-icon">
    </a>
    <a href="https://open.spotify.com/artist/2VMULBbGuXgT0RTJT2yMyi?si=nqbQfGGXTL6Qr_C7HLPzeg&nd=1&dlsi=4493b3734be84645" class="social-icon-link">
        <img src="/assets/icons/spotify.svg" class="social-icon">
    </a>
    <a href="https://www.youtube.com/@elliotgmann/featured" class="social-icon-link">
        <img src="/assets/icons/youtube.svg" class="social-icon">
    </a>
    `
};


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



function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }