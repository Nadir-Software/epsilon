const copyButton = document.getElementById("copy");

function copy(content) {
    if (content == "article") {
        var contentToCopy = document.getElementById("response-text").innerText;

        if (contentToCopy.includes("Text will appear here once you ask a question")) {
            copyButton.blur();

            copyButton.style.backgroundColor = "var(--error-container)";
            copyButton.style.color = "var(--on-error-container)";

            setTimeout(function() {
                copyButton.style.backgroundColor = "";
                copyButton.style.color = "";
            }, 1000);
        }

        else {
            console.log(contentToCopy);

            navigator.clipboard.writeText(contentToCopy);

            copyButton.innerText = "done";

            setTimeout(() => {
                copyButton.innerText = "content_copy";
                copyButton.blur();
            }, 1000);
        }
    }
}