
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
    distance: '100px',
    duration: 2000,
    reset: true
})

sr.reveal('.home_title',{})
sr.reveal('.button',{delay:200})
sr.reveal('.home_img',{delay:400})
sr.reveal('.home_social-icon',{interval:200})

const sb= ScrollReveal({
    origin: 'bottom',
    distance: '100px',
    duration: 2000,
    reset: true
})

sb.reveal('.about_img',{})
sb.reveal('.about_subtitle',{delay:200})
sb.reveal('.about_text',{delay:400})
sb.reveal('.counting-sec',{interval:200})

sb.reveal('.work_img',{interval:200})
sb.reveal('.contact_container',{interval:200})

const sl= ScrollReveal({
    origin: 'left',
    distance: '100px',
    duration: 2000,
    reset: true
})
sl.reveal('.section-title',{delay:200})
sl.reveal('.skills_text',{delay:200})
sl.reveal('.skills_data',{interval:400})
sl.reveal('.skills_img',{delay:400})
sl.reveal('.footer_title',{delay:400})
sl.reveal('.footer_social',{interval:600})

const typedTextSpan = document.querySelector('.typedtext');
const cursorSpan = document.querySelector('.cursor');
const textarray=["Java/Netsuite/SQL Developer","Workato Automation Developer","Technology Driven"];
const typingDelay=100;
const erasingDelay=50;
const newTextDelay=1000;
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

const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/github.com/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}
