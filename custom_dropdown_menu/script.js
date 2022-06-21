const optionMenu = document.querySelector('.select-menu')
const selectBtn = optionMenu.querySelector('.select-btn')
const options = optionMenu.querySelectorAll('.option')
const sBtnText = optionMenu.querySelector('.sBtn-text')

selectBtn.addEventListener('click', () => {
  optionMenu.classList.toggle('active')
})

options.forEach(option => {
  option.addEventListener('click', ()=>{
    let selectedOption = option.querySelector('.option-text').innerText
    // let optionHtml = option.innerHTML
    // selectBtn.innerHTML = optionHtml
    sBtnText.innerText = selectedOption
    optionMenu.classList.remove('active')
  })
})