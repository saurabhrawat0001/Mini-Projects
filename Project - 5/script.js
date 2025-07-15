const btnEl = document.querySelector('.search-btn')
const containerEl = document.querySelector('.search-container')

btnEl.addEventListener('click', () => {
    containerEl.classList.toggle('active')
})