
var num = 0;
showSlides(num);

//Slides pick implementation
var thumbnail = document.getElementsByClassName("column");

for(var i = 0; i < thumbnail.length; i++)
{
    thumbnail[i].addEventListener("click", listener.bind(null, i));
}


function listener(index)
{
    showSlides(index);
}

function showSlides(index)
{
    var slides = document.getElementsByClassName('slides');
    var nextSlide = document.getElementsByClassName('next');
    var prevSlide = document.getElementsByClassName('prev');

    for(var i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    
    slides[index].style.display = "block";

//Next Slide
    for(var i = 0; i < nextSlide.length; i++)
    {
        nextSlide[i].addEventListener("click", function()
        {
            for(var i = 0; i < slides.length; i++)
            {
                slides[i].style.display = "none";
            }
            
            if(index >= slides.length-1)
            {
                index = -1;
            }
            
            slides[index+1].style.display = "block";
            index++;
            
            /*console.log("Next: " + index);*/
        });
    }
  
//Previous Slide
    for(var i = 0; i < prevSlide.length; i++)
    {
        prevSlide[i].addEventListener("click", function()
        {
            for(var i = 0; i < slides.length; i++)
            {
                slides[i].style.display = "none";
            }
            
            if(index <= 0)
            {
                index = slides.length;
            }
            
            slides[index-1].style.display = "block";
            index--;
            /*console.log("Prev: " + index);*/
        });
    }
}












