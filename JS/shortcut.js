document.addEventListener('keypress', (event) => {
    if (event.key == "/") {
        if (!document.activeElement === inputElement) {
            console.log(`${event.key} was pressed`);

            inputElement.focus();

            setTimeout(() => {
                inputElement.value = "";
            });
        }
    }
})