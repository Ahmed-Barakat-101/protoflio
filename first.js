let image =document.getElementsByClassName('image');

window.onscroll  = function(){
let value = scrollX ;
image.style.right = value + 'px' ;

}
 
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkills = () => {
  skillBars.forEach(bar => {
    const barTop = bar.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

  
    if (barTop < windowHeight - 80) {
      const targetWidth = bar.getAttribute('data-width');
      bar.style.width = targetWidth;
    }
  });
};
 
window.addEventListener('scroll', animateSkills);

 animateSkills();










 