const bar = document.querySelector('.bar');
const list = document.querySelector('.list');
const close = document.querySelector('.close')
bar.addEventListener("click", () => {
    show();
})
close.addEventListener("click", () => {
    hide();
})

function show() {
    list.style.display = "block"
}

function hide() {
    list.style.display = "none"
}