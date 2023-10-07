const slides = document.querySelectorAll('.slide')

for (const slide of slides){
    slide.addEventListener('click', ()=>{
        clearActtiveClasses()
        slide.classList.add('active')
    })
}

function clearActtiveClasses(){
    slides.forEach((slide)=>{
        slide.classList.remove('active')
    })
}