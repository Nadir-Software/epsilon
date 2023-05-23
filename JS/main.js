const responseTextElement = document.getElementById('response-text');
const responseImagesElement = document.getElementById('response-images');

const inputElement = document.getElementById('input');

function understand() {
    var input = inputElement.value;
    const uneditedInput = input;

    input = input.toLowerCase();

    checkProfanity(input)
    .then(result => {
        if (result) {
            responseTextElement.innerHTML = `
            <span class="material-symbols-rounded">error</span>
            Profanity detected!
            `;
        }

        else {
            respond(input);
        }
    });
}

function checkProfanity(str) {
    return fetch(`https://www.purgomalum.com/service/containsprofanity?text=${str}`)
        .then(response => response.text())
        .then(data => {

            if (data === 'true') {
                return true;
            }
            
            else {
                return false;
            }
        });
}

function respond(str) {
    if (/what is .*/i.test(str) || /what are .*/i.test(str) || /what was .*/i.test(str) || /who is .*/i.test(str) || /who was .*/i.test(str) || /where is .*/i.test(str) || /where was .*/i.test(str)) {
        responseImagesElement.innerHTML = "";
    
        var searchTerm = str.replace(/(\?|\ba\b|\ban\b|\bwhat is\b|\bwhat are\b|\bwhat was\b|\bwho is\b|\bwho was\b|\bwhere is\b|\bwhere was\b|\bthe\b)/gi, "").trim();
        console.log(searchTerm);

        fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchTerm)}`)
            .then(response => response.json())
            .then(data => {
                const title = data.title;
                const extract = data.extract;
                responseTextElement.innerHTML = `<h1>${title}</h1><p>${extract}</p>`;

                if (data.originalimage) {
                    responseImagesElement.innerHTML = `<img src="${data.originalimage.source}">`;
                }

                else {
                    responseImagesElement.innerHTML = `<span class="material-symbols-rounded">error</span><p>No image found</p>`;
                }
            });
    }
}