"use strict";
const documentCounter = document.querySelector("#counter");
const decrement = document.querySelector("#decrement");
const increment = document.querySelector("#increment");
decrement.addEventListener("click", () => {
    documentCounter.value = (Number(documentCounter.value) - 1).toString();
});
increment.addEventListener("click", () => {
    documentCounter.value = (Number(documentCounter.value) + 1).toString();
});
