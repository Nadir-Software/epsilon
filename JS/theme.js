const themeButton = document.getElementById('theme');
var theme = localStorage.getItem('theme');

function changeTheme(theme) {
    if (theme === 'light') {
        document.body.className = "body-light";

        themeButton.innerText = "dark_mode";
        themeButton.onclick = function() {
            changeTheme("dark");
        }

        localStorage.setItem('theme', 'light');
    }

    else if (theme == "dark") {
        document.body.className = "body-dark";

        themeButton.innerText = "light_mode";
        themeButton.onclick = function() {
            changeTheme("light");
        }

        localStorage.setItem('theme', 'dark');
    }

    themeButton.blur();
}

if (theme == "light") {
    changeTheme("light");
}