const hamburger = document.getElementById('hamburger');
const navlist = document.getElementById('navlist');

hamburger.addEventListener('click', function(){
   
    navlist.classList.toggle("navlist-active")

    
    // if(!navlist.classList.contains('navlist-active')){
    //     navlist.classList.add('navlist-active');
    // }
    // else{
    //     navlist.classList.remove('navlist-active');
    // }
    
})
