var c=['blue','black','yellow','red'];
function changecolor()
{
    setTimeout(function loop(){
        document.bgColor=c.shift();
        if(c.length)
        {
            setTimeout(loop,5000);
        }
    },5000);
}
function start()
{
    setInterval(changecolor(),20000);
        
}