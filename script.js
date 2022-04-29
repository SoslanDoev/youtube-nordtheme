document.body.classList.add('theme__nord')

function all() {
    let logo = document.querySelector('.HeaderNav__item--logo')
    console.log(logo)
    logo.innerHTML = 'Вговне'
    logo.style.color = '#D8DEE9'
    logo.style.fontSize = "24px"
    logo.style.marginRight = "85px"
}
all()

let logoHover = document.querySelector('.HeaderNav__item--logo')
logoHover.addEventListener('mousedown', () => {
    console.log('Кнопка нажата')
})

function runOnKeys(func, ...codes) {
    let pressed = new Set()
    document.addEventListener('keydown', function (event) {
        pressed.add(event.code);
        for (let code of codes) { // все ли клавиши из набора нажаты?
            if (!pressed.has(code)) {
                return;
            }
        }
        pressed.clear()
        func()
    })
    document.addEventListener('keyup', function (event) {
        pressed.delete(event.code)
    })
}


// 💩

runOnKeys(
    () => {
        console.log('1')
        let shit = document.createElement('p')
        shit.innerText = '💩'
        let screenWidth = window.screen.width
        let screenHeight = window.screen.height
        let rx = Math.floor(Math.random() * screenWidth);
        let ry = Math.floor(Math.random() * screenHeight);
        shit.style.position = 'fixed'
        shit.style.top = ry + 'px'
        shit.style.left = rx + 'px'
        shit.style.zIndex = "5000"
        shit.classList.add('da__text')
        let body = document.body
        body.appendChild(shit)
    },
    "KeyQ",
    "KeyW"
)

