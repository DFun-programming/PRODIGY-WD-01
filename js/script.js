document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById('navbar');
    var aboutSection = document.querySelector("#about");
    var homeSection = document.querySelector("#home");
    var contactSection = document.querySelector("#contact");
    var serviceSection = document.querySelector("#services");
    

    var homeSectionTop = homeSection.offsetTop;
    var homeSectionHeight = homeSection.clientHeight;
    
    var aboutSectionTop = aboutSection.offsetTop;
    var aboutSectionHeight = aboutSection.clientHeight;
    
    var serviceSectionTop = serviceSection.offsetTop;
    var serviceSectionHeight = serviceSection.clientHeight;
    
    var contactSectionTop = contactSection.offsetTop;
    var contactSectionHeight = contactSection.clientHeight;

    window.addEventListener('scroll',()=>{
        if (window.scrollY > aboutSectionTop - aboutSectionHeight && window.scrollY <= aboutSectionTop) {
            document.querySelector("#about-menu").classList.add('selected');
          } else {
            document.querySelector("#about-menu").classList.remove('selected');
          }
          if (window.scrollY > homeSectionTop - homeSectionHeight && window.scrollY <= homeSectionTop) {
            document.querySelector("#home-menu").classList.add('selected');
          } else {
            document.querySelector("#home-menu").classList.remove('selected');
          }
        if (window.scrollY > serviceSectionTop - serviceSectionHeight && window.scrollY <= serviceSectionTop) {
            document.querySelector("#service-menu").classList.add('selected');
          } else {
            document.querySelector("#service-menu").classList.remove('selected');
          }
          if (window.scrollY > contactSectionTop - contactSectionHeight && window.scrollY <= contactSectionTop) {
            document.querySelector("#contact-menu").classList.add('selected');
          } else {
            document.querySelector("#contact-menu").classList.remove('selected');
          }
    })

    
    // Change background color on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#181717'; // Change the background color when scrolled
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    });

    // Reset background color on top
    window.addEventListener('scroll', function() {
        if (window.scrollY <= 50) {
            navbar.style.backgroundColor = 'transparent';
        }
    });

    
});