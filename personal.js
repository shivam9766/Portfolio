
window.addEventListener("scroll", function(){
    let navbar = document.querySelector('.navbar')
    if(window.pageYOffset > 50){
        navbar.classList.add('sticky')
    }
    else{
        navbar.classList.remove('sticky')
    }
})
const menubtn = document.getElementsByClassName('menubtn')[0]
const navbarli = document.getElementsByClassName('list')[0]
menubtn.addEventListener("click", function(){
    navbarli.classList.toggle('active')
})
let type = new Typed('.autoinput', {
    strings : ['Frontend Developer.' , 'Freelancer.','Data Analytics.' ],
    typeSpeed : 100,
    backSpeed : 100,
    loop : true
})
let scroll = document.querySelector('.scrollbtn');
window.addEventListener('scroll', function(){
    scroll.classList.toggle('click' , window.pageYOffset >500)
})
scroll.addEventListener('click', function(){
  window.scrollTo({
      top:0
  })
})

 
