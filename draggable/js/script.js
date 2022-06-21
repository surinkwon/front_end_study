const nav = document.querySelector('nav'),
      toggleBtn = nav.querySelector('.toggle-btn')

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('open')
})
console.log(window);

function onDrag({movementY}) {
  const navStyle = window.getComputedStyle(nav),
        navTop = parseInt(navStyle.top),
        navHeight = parseInt(navStyle.height), // 300px
        windowHeight = window.innerHeight
  
  nav.style.top = navTop > 0 ? `${navTop + movementY}px` : '10px'
  if (navTop > windowHeight - navHeight) {
    nav.style.top = `${windowHeight - navHeight}px`
  }
}

nav.addEventListener('mousedown', () => {
  nav.addEventListener('mousemove', onDrag)
})

nav.addEventListener('mouseup', () => {
  nav.removeEventListener('mousemove', onDrag)
})

nav.addEventListener('mouseleave', () => {
  nav.removeEventListener('mousemove', onDrag)
})