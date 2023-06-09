function doloop()
{
    var currTime = 5;
    var i = 1;
    do
    {
        setTimeout(function() { 
            document.getElementById("timer").innerHTML = "Drill initiates at 0.sec /sec = " + currTime;
            currTime = currTime - 1;
    } , 1000 * i);
    i += 1;
    } while (i < 7);
}

function playSong()
{
    mySound = new sound("The_Twilight_Zone_Theme_Song.mp3")
    mySound.play();
}
//The above function is used to change the music/ song you want to play.

function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;

    this.play = function()
    {
        this.sound.play();
    }
}

function whileloop()
{
    var currTime = 5;
    var i = 1;
    while (i < 7)
    {
        setTimeout(function() { 
            document.getElementById("timer").innerHTML = "tango down in 6.sec /sec = " + currTime;
            currTime = currTime - 1;
    } , 1000 * i);
    i += 1;
    };
}

function StopSong()
{
    window.location.reload();
}

function forloop()
{
    var currTime = -10;
    var i = 1;
    for (i = 1; i < 12; i++)
    {
        setTimeout(function() { 
            document.getElementById("timer").innerHTML = "target terminates! at 0.sec / sec =  " + currTime;
            currTime = currTime + 1;
    } , 1000 * i);
    
    };
}

