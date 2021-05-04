const accordinFeature = () => {
  let accordin = document.getElementsByClassName("accordion-btn");
let startAccordin;

for (startAccordin = 0; startAccordin < accordin.length; startAccordin++) {
  accordin[startAccordin].addEventListener("click", function() {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
}

accordinFeature();

const navbarSlider = () => {
  let bars = document.querySelector('.bars');
  let menu = document.querySelector('.menu-item');
  let links = document.querySelectorAll('.menu-item li')

  bars.addEventListener('click', () => {
      
      bars.classList.toggle('cross');
      menu.classList.toggle('show');
      links.forEach((value, index) => {
        if(value.style.animation) {
         value.style.animation = '';
        } else {
         value.style.animation = `navSlides 1s ease forwards ${index/7 + 0.2}s`
        }
     })
      
      
  }) 
}

navbarSlider();