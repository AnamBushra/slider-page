const left=document.querySelector(".left")
const right=document.querySelector(".right")
const slider=document.querySelector(".slider")
const images=document.querySelectorAll(".image")
const bottom=document.querySelector(".bottom")
let slideNumber=1;
let length=images.length;
const nextSlide = ()=> {
    slider.style.transform = `translateX(-${slideNumber*800}px)`
    slideNumber++ ;
}
const getFirstSlide =()=>{
    slider.style.transform=`translateX(0px)`
    slideNumber=1;
}
const getLastSlide = ()=> {
  slider.style.transform=`translateX(-${(length-1)*800}px)`
  slideNumber=length
}
const prevSlide =()=>{
    slider.style.transform = `translateX(-${(slideNumber-2)*800}px)`
    slideNumber-- ;
}


for(let i=0;i<length;i++){
    const div=document.createElement("div")
    div.className="button"
    bottom.appendChild(div)
}

const buttons=document.querySelectorAll(".button")
const resetbg=()=>{
    buttons.forEach(button=>{
        button.style.backgroundColor="transparent"
    })
}
buttons[0].style.backgroundColor="white"
buttons.forEach((button,i)=>{
    button.addEventListener("click",()=>{
        slider.style.transform=`translateX(-${i*800}px)`
        resetbg();
        buttons[i].style.backgroundColor="white"
        slideNumber=i+1
    })
})

right.addEventListener("click",()=>{
    slideNumber<images.length ? nextSlide() : getFirstSlide() 
    resetbg()
    buttons[slideNumber-1].style.backgroundColor="white"

})

left.addEventListener("click",()=>{
    slideNumber>1 ? prevSlide(): getLastSlide()
    resetbg()
    buttons[slideNumber-1].style.backgroundColor="white"
})