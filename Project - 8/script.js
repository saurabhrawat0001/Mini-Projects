const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (e) => {
    const xCord = e.offsetX;
    const yCord = e.offsetY;

    // console.log(xCord, yCord);

    const spanEl = document.createElement("span");

    spanEl.style.left = `${xCord}px`;
    spanEl.style.top = `${yCord}px`;

    const size = Math.random() * 100;

    spanEl.style.width = `${size}px`;
    spanEl.style.height = `${size}px`;

    bodyEl.appendChild(spanEl);

    setTimeout(() => {
        spanEl.remove();
    }, 3000);
})