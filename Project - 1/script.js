const button = document.querySelectorAll('.box')
const body = document.querySelector('body')

button.forEach(function(box){
    box.addEventListener('click',function(color){
        if (color.target.id === "box1") {
            body.style.background = "#06923E"
        }
        if (color.target.id === "box2") {
            body.style.background = "#898AC4"
        }
        if (color.target.id === "box3") {
            body.style.background = "#FF9F00"
        }
        if (color.target.id === "box4") {
            body.style.background = "darkcyan"
        }
        if (color.target.id === "box5") {
            body.style.background = "coral"
        }
    })
})