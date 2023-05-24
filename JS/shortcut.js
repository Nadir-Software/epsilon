document.addEventListener('keypress', (event) => {
    if (event.key == "/") {
        console.log(`${event.key} was pressed`);

        inputElement.focus();

        setTimeout(() => {
            inputElement.value = "";
        });
    }
})