const documentCounter = document.querySelector<HTMLInputElement>("#counter")!;
const decrement = document.querySelector<HTMLButtonElement>("#decrement")!;
const increment = document.querySelector<HTMLButtonElement>("#increment")!;

decrement.addEventListener("click", () => {
    documentCounter.value = (Number(documentCounter.value) - 1).toString();
});

increment.addEventListener("click", () => {
    documentCounter.value = (Number(documentCounter.value) + 1).toString();
});
