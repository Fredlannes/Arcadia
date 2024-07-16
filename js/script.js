const btn = document.querySelector("#backToTop")
const nav = document.querySelector(".navbar")

btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

const buttonScrollFunction = () => {
    if(window.scrollY > 300) {  // show backToTop
            btn.style.display = "block";
            
        }
        else {                      // hide backTotop
            btn.style.display = "none";
        
    }
} 
window.addEventListener("scroll", buttonScrollFunction);

let scrollFromTop = document.documentElement.scrollTop

document.addEventListener("scroll", navScrollFunction);

function navScrollFunction() {
    const currentScroll = document.documentElement.scrollTop

    if(currentScroll > scrollFromTop){
        nav.style.translate = `0 -${nav.scrollHeight}px`
    }
    else{
        nav.style.translate = `0`
    }
    scrollFromTop = document.documentElement.scrollTop
}