document.addEventListener('keypress', (event) => {
    if (event.key == "/") {
        if (!inputElement.focus === inputElement) {
            console.log(`${event.key} was pressed`);

            inputElement.focus();

            setTimeout(() => {
                inputElement.value = "";
            });
        }
    }
})