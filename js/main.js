window.onload = () => {
    let elem = document.querySelectorAll('.block__content h4');
    function calculator(number, elem) {
        let i = 0;
        let interval;

        interval = setInterval(up, 20, number, elem);
        function up(number, elem) {
            if (i <= number) {
                i++;
                elem.innerHTML = i;
            }
            else
                clearInterval(interval);
        }
    }

    setTimeout(()=>{
        calculator(123, elem[0]);
        calculator(223, elem[1]);
        calculator(523, elem[2]);
        calculator(23, elem[3]);
    
    },2000) 
}


mybutton = document.getElementById("myBtn");

mybutton.addEventListener("click", topFunction);

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const items = document.querySelectorAll(".wwd, .banner, .wwa");

function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top < (window.pageYOffset + window.innerHeight) - 350 &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
    );
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
        if (elementInViewport(items[i])) {
            if (!items[i].classList.contains("show")) {
                items[i].classList.add("show");
            }
        }
    }
}
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);