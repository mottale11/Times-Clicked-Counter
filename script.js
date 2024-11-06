document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("click-button");
    const counterValue = document.getElementById("counter-value");
    let count = 0;

    button.addEventListener("click", function () {
        count += 1;
        counterValue.textContent = count;
    });
});
