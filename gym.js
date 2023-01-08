var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function myFunction_1(){
  var myString ='<h2>First Packages Details</h2>'+
		'<p>This package is for one month.</p>'+
                '<p>Any Individual can access gym service for a month</p>'+
                '<p>In just Rupees <strong>1000</strong> services can be availed.</p>'+
                '<p>Free personalized certified trainers wil be provided';
  document.getElementById("middlebox").innerHTML=myString;
}

function myFunction_2(){
  var myString ='<h2>Second Packages Details</h2>'+
		'<p>This package is for three month.</p>'+
                '<p>Any Individual can access gym service for three months</p>'+
                '<p>In just Rupees <strong>2500</strong> services can be availed.</p>'+
                '<p>Free personalized certified trainers wil be provided';
  document.getElementById("middlebox").innerHTML=myString;
}

function myFunction_3(){
  var myString ='<h2>Third Packages Details</h2>'+
		'<p>This package is for six month.</p>'+
                '<p>Any Individual can access gym service for six months</p>'+
                '<p>In just Rupees <strong>5200</strong> services can be availed.</p>'+
                '<p>Free personalized certified trainers wil be provided';
  document.getElementById("middlebox").innerHTML=myString;
}