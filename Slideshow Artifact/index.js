var myImages =["https://defenders.org/sites/default/files/styles/homepage-feature-2015/public/polar-bear_j.-lyle.png?itok=EAQm89Z4", "https://cdn.images.express.co.uk/img/dynamic/109/590x/Polar-Bear-924655.jpg","https://polarbearsinternational.org/media/3315/00473-54115.jpg","http://www.latimes.com/resizer/eMLhya2d1neobVLpZuBiOL0RRJo=/1400x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/YSXM2PXMJFA37E2JW5MHVWDPSM.jpg","https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/polar%20bear.jpg?itok=4Q6FMaNA"];


var captionImages =["Laugh","Love","Lunch","Happiness","Family"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,2000); // Next
