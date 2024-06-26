const hamburger = getElementById("hamburger")
const navlist = getElementById("navlist")

hamburger.addEventListener("click", ()=>{
    navlist.classList.toggle("navlist-active")
})
