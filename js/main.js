const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector("nav");
    $(document).ready(function(){ 
 
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        }); 
 
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
 
    });
$('body')
  .awesomeCursor('paper-plane', {
    color: '#2cb2da',
    hotspot: 'top right'
  });
function menuCollapse() {
  navbar.classList.toggle("active");
}

menuToggle.addEventListener("click", menuCollapse);

// typing
var app = document.getElementById('myTypewriter');

var typewriter = new Typewriter(app, {
    cursor: "",
    loop: false
});

typewriter.typeString('<h1>Selamat Datang</h1>')
    .pauseFor(2000)
    .start();