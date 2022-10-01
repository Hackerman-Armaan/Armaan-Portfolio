var exp=1200;
// fetching the li
var list = document.getElementById("navigation-bar").getElementsByTagName("li");
for(let i=0;i<list.length;i++){
    list[i].addEventListener('click',function(event){
      // to know which icon is clicked
      var element= this.innerText.toLowerCase();
      console.log(element)
      if(element=='home'){
        return;
      }else if(element=='about'){
        exp=100;  // exp is used to scroll upto how many pixels
      }else if(element=='skills'){
        exp=600;
      }else if(element=='experience'){
        exp=1200;
      }else if(element=='education'){
        exp=2600;
      }else if(element=='portfolio'){
        exp=3700;
      }else if(element=='contact'){
        exp=4710;
      }
      
        var dis=0; // every time when clicked dis is 0
        event.preventDefault(); // to stop any default funtionality of the tag
        var stop= setInterval(function(){ // stop is event id
            dis+=80;
            if(dis>=exp){
                clearInterval(stop);
            }
            window.scrollBy(0,80);
        },30);
    
    });
}


// AUTO FILL SKILL SECTION
// this is to trigger function when we reach the section
var observer = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === true)
		console.log('Element has just become visible in screen');
   // empty();
    autofill();  // calling function
    
}, { threshold: [0] });

observer.observe(document.querySelector("#skills-parameter"));// enter section id
var skill=document.querySelectorAll(".percentage"); // fetching all the div


function autofill(){
    for(let i=0;i<skill.length;i++){
      fill(skill[i].getAttribute("data-skillset"),i); // calling fuction fill passing the maxwidth and index of skills
    }

   function fill(width,i){
    let base=0;
    let ide= setInterval(function(event){
      if(base>=width){
      clearInterval(ide);  
      }
          skill[i].style.width=base+'%';  // TO INCRESE WIDTH
          base++;
  
     },5)
    }
  
}

// Coding Ninja Solution
/** 
 * var progressBars = document.querySelectorAll ( ' . skill - progress > div ' ) ;
var skillsContainer = document.getElementById ( ' skills - container ' ) ;
window.addEventListener ( ' scroll ', checkScroll ) ;
ver animationDone = false ;
function initialiseBars ( ) {
    for ( let bar of progressBars ) {
        bar.style.width = 0 + '%' ;
    }
initialiseBars ( ) ;

function fillBars ( ) {

for ( let bar of progressBars ) {
    let targetWidth = bar.getAttribute('data-width')
    let currrentwidth = 0 ;
    let interval =setInterval ( function ( ) {
        if ( currrentwidth > targetWidth ) {
          clearInterval ( interval ) ;
            return ;
    
        } 
          currrentwidth ++ ;
        bar.style.width =currrentWidth + ' % ' ;
        }, 3 ) ;
      } 
}


function checkScroll ( ) {
    // You have to check whether sill container is visible
    var coordinates = skillsContainer.getBoundingClientRect ( ) ;
    if ( ! animationDone && coordinates . top window.innerHeight ) {
        animationDone = true ;
        console.log ( ' Skills Section Visible ' ) ;
        fillBars ( ) ;
   }
 
 */