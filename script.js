
const showMenu = (toggleId,navId) =>{
    const toggle =document.getElementById(toggleId),
          nav= document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu');

const navLink = document.querySelectorAll(".nav_link")
function linkAction()
{
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const sr= ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.home_title',{})
sr.reveal('.button',{delay:200})
sr.reveal('.home_img',{delay:400})
sr.reveal('.home_social-icon',{interval:200})

sr.reveal('.about_img',{})
sr.reveal('.about_subtitle',{delay:200})
sr.reveal('.about_text',{delay:400})

sr.reveal('.skills_subtitle',{})
sr.reveal('.skills_text',{delay:200})
sr.reveal('.skills_data',{interval:400})
sr.reveal('.skills_img',{delay:400})

sr.reveal('.work_img',{interval:200})

sr.reveal('.contact_input',{interval:200})

sr.reveal('.footer_title',{interval:150})
sr.reveal('.footer_social',{interval:250})

const typedTextSpan = document.querySelector('.typedtext');
const cursorSpan = document.querySelector('.cursor');
const textarray=["WEB DEVELOPER","PROGRAMMER","JR. DEVELOPER"];
const typingDelay=200;
const erasingDelay=100;
const newTextDelay=2000;
let textarrayIndex=0;
let charIndex=0;

function type()
{
    if(charIndex < textarray[textarrayIndex].length)
    {
     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
     typedTextSpan.textContent+=textarray[textarrayIndex].charAt(charIndex);
     charIndex++;
     setTimeout(type,typingDelay);
    }
    else{
     cursorSpan.classList.remove("typing");
     setTimeout(erase,newTextDelay);
    }
}

function erase()
{
    if(charIndex>0)
    {
     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
     typedTextSpan.textContent =textarray[textarrayIndex].substring(0,charIndex-1);
     charIndex--;
     setTimeout(erase,erasingDelay);
    }
    else{
     cursorSpan.classList.remove("typing");
     textarrayIndex++;
     if(textarrayIndex>=textarray.length) textarrayIndex=0;
     setTimeout(type,typingDelay+1100);
    }
}
document.addEventListener("DOMContentLoaded", function()
{
    if(textarray.length) setTimeout(type,newTextDelay + 250);
});