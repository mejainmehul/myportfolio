function button(){
    document.getElementsByClassName("skill")[4].style.display="none";
    document.getElementsByClassName("skill")[5].style.display="none";
    document.getElementById("button_left").style.display="none";
    document.getElementsByClassName("project")[2].style.display="none";
    document.getElementsByClassName("project")[1].style.display="none";
   
}
function skills_right()
{
    document.getElementsByClassName("skill")[0].style.display="none";
    document.getElementsByClassName("skill")[1].style.display="none";
    document.getElementsByClassName("skill")[4].style.display="inline-block";
    document.getElementsByClassName("skill")[5].style.display="inline-block";
    document.getElementById("button_right").style.display="none";
    document.getElementById("button_left").style.display="inline-block";

}
function skills_left(){
    document.getElementsByClassName("skill")[0].style.display="inline-block";
    document.getElementsByClassName("skill")[1].style.display="inline-block";
    document.getElementsByClassName("skill")[4].style.display="none";
    document.getElementsByClassName("skill")[5].style.display="none";
    document.getElementById("button_right").style.display="inline-block";
    document.getElementById("button_left").style.display="none";

}
var slideIndex = 1;


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("project");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "inline-block";
}
