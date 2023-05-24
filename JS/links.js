function openLink(site) {
    if (site == "github") {
        window.open("https://github.com/Nadir-Software/epsilon");
    }

    else if (site == "home") {
        window.open("https://nadir-software.github.io/home");
    }

    else if (site == "article") {
        if (localStorage.getItem('searchTerm') == null) {
            document.getElementById('wikipedia').blur();
            return;
        }

        window.open(`https://en.wikipedia.org/wiki/${encodeURIComponent(localStorage.getItem('searchTerm'))}`);
    }
}