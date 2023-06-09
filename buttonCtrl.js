//Terry Shade Assignment 4.1 Event Driven Programming

//The below functions either disables/enable the start and stop buttons
function start()
{
    alert("in start")
    document.getElementById("stopButton").disabled = false;
    document.getElementById("startButton").disabled = true;
}

function stop()
{
    alert("in stop")
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}
//By use of the below function ,the "stopmeme button will reload the page resulting in the stopping of the image and relocating to the start position.
function stopmeme()
{
    window.location.reload()
    
}
//The below function control movement of the image per the px input relating to the "X" and "Y" axis of the page.
function countdown()

{
    var currTime = 10;
    var i = 1;
    var change = 50;
    var image = document.getElementById("imgMeme");
    image.style.left= change + "px";
    image.style.top= change + "px";
    
// The below is the do condition that controls the amount of px's the image move per the amount of time set. (50px for 10sec.)
    do
    {
        setTimeout(function() 
        {
            image.style.left= change + "px";
            image.style.top= change + "px";
            document.getElementById("imgMeme").innerHTML = "X:" + image.style.left + "Y:" + image.style.top;
            currTime = currTime - 1;
            change+=50;
    } , 1000 * i);
    i += 1;
    } while (i < 12);
}


