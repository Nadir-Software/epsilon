const copyButton = document.getElementById("copy");

function copy(content) {
    if (content == "article") {
        var contentToCopy = document.getElementById("response-text").innerText;

        console.log(contentToCopy);

        navigator.clipboard.writeText(contentToCopy);

        copyButton.innerText = "done";

        copyButton.blur();

        setTimeout(() => {
            copyButton.innerText = "content_copy";
        }, 1000);
    }
}