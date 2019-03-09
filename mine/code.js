window.onload = function ()
{
    var elem = document.getElementById("animate");  
    var elem2 = document.getElementById("animate2");
    var pospa = 0;
    var posna = 350;
    var pospb = 350;
    var posnb = 0;
    var id = setInterval(frame, 5);

    /*
    **  batata mucho boa
    */
    function frame() 
    {
        if (pospa >= 0 && pospa <=350 && pospb <= 350 && pospb >= 0)
        {
            pospa++;
            pospb--;
            elem.style.top = pospa + 'px';
            elem.style.left = pospa + 'px';
            elem2.style.top = pospa + 'px';
            elem2.style.left = pospb + 'px';
            if (pospa == 350 && pospb == 0)
            {
                posna = 350;
                posnb = 0;
                elem.style.backgroundColor = 'red';
                elem2.style.backgroundColor = 'purple';
            }
            else if (pospb > 175)
            {
                elem.style.backgroundColor = 'blue';
                elem2.style.backgroundColor = 'yellow';
            }
            else
            {
                elem.style.backgroundColor = 'red';
                elem2.style.backgroundColor = 'purple';
            }
        }
        else
        {
            posna--;
            posnb++;
            elem.style.top = posna + 'px'; 
            elem.style.left = posna + 'px';
            elem2.style.top = posna + 'px';
            elem2.style.left = posnb + 'px';
            if (posna == 0 && posnb == 350)
            {
                pospa = 0;
                pospb = 350;
            }
            else if (posnb <= 175)
            {
                elem.style.backgroundColor = 'blue';
                elem2.style.backgroundColor = 'yellow';
            }
            else
            {
                elem.style.backgroundColor = 'red';
                elem2.style.backgroundColor = 'purple';
            }
        }
    }
}

var click;
var posslide = 0 
var dir = 1;
var esq = 0;
function slide() 
{
    var slide = document.getElementById("slide");
    if(click != 0 && dir ==1)
    {
        slide.style.backgroundColor = 'orange';
        posslide = posslide + 20;
        slide.style.left = posslide + 'px';
        click = 0;
    }
    else if(click == 0 && dir ==1)
    {
        slide.style.backgroundColor = 'lime';
        posslide = posslide + 20;
        slide.style.left = posslide + 'px';
        click = 1;
        if(posslide >= 100)
        {
            esq = 1;
            dir = 0;
        }
    }
    else if(click != 0 && esq ==1)
    {
        slide.style.backgroundColor = 'red';
        posslide = posslide - 20;
        slide.style.left = posslide + 'px';
        click = 0;
    }
    else if(click == 0 && esq ==1)
    {
        slide.style.backgroundColor = 'blue';
        posslide = posslide - 20;
        slide.style.left = posslide + 'px';
        click = 1;
        if(posslide <= 0)
        {
            esq = 0;
            dir = 1;
        }
    }
}