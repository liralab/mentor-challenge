const menuopen=document.querySelector(".dropdown-menu");
const buton=document.querySelector(".dropdown-btn");
const menuopencompany=document.querySelector("#Company");
const buton2=document.querySelector(".second");

buton.addEventListener("click", function() {
    if (menuopen.style.display === 'none') {
        menuopen.style.display = 'block'
    } else {
        menuopen.style.display = 'none'
    }
  });
  buton2.addEventListener("click", function() {
    if ( menuopencompany.style.display === 'none') {
         menuopencompany.style.display = 'block'
    } else {
         menuopencompany.style.display = 'none'
    }
  });



const closeıcon=document.querySelector('#close');
const linesıcon=document.querySelector('#lines');
const menu = document.querySelector('nav > ul')

linesıcon.addEventListener('click',function(){
    menu.classList.toggle("open-menu")
    const yep = (menu.style.display === 'block')
    menu.style.display =!yep
    closeıcon.style.display='block'
})
closeıcon.addEventListener('click',function(){
    menu.classList.toggle("open-menu")
    const yep = (menu.style.display === 'none')
    menu.style.display =!yep
    closeıcon.style.display='none'

})
