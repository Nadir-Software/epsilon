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

            document.getElementById('wikipedia').style.backgroundColor = "var(--error-container)";
            document.getElementById('wikipedia').style.color = "var(--on-error-container)";

            setTimeout(function() {
                document.getElementById('wikipedia').style.backgroundColor = "";
                document.getElementById('wikipedia').style.color = "";
            }, 1000);

            return;
        }

        window.open(`https://en.wikipedia.org/wiki/${encodeURIComponent(localStorage.getItem('searchTerm'))}`);
    }
}