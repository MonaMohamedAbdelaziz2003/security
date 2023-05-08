////////////slids
var imgs = ["/carousel-2.jpg",
    "/carousel-1.jpg", "/carousel-3.jpg"
];
var htitle = ["Smart Security Solution For All Business", "Best CCTV & Security Solution For You", "Innovative Solution For Security System"];
var ptitle = ["Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
    "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
    "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr."
];
var img = document.getElementById("img");
var h = document.getElementById("htitel");
var p = document.getElementById("ptitel");
var index = 0;

function nextt() {
    ++index;
    if (index == imgs.length) {
        index = 0;
    }
    img.src = imgs[index];
    h.textContent = htitle[index];
    p.textContent = ptitle[index];


}

function backk() {
    --index;
    if (index == -1) {
        index = imgs.length - 1;
    }
    img.src = imgs[index];
    h.textContent = htitle[index];
    p.textContent = ptitle[index];

}
/////////////////// project
var pro1 = document.getElementById("pro1");
var pro2 = document.getElementById("pro2");
var pro3 = document.getElementById("pro3");
var pro4 = document.getElementById("pro4");
var pro5 = document.getElementById("pro5");
var pro6 = document.getElementById("pro6");
var bu1 = document.getElementById("bu1");
var bu2 = document.getElementById("bu2");
var bu3 = document.getElementById("bu3");


function button1() { //1,3,5
    pro2.style.display = "block";
    pro4.style.display = "block";
    pro6.style.display = "block";
    pro1.style.display = "block";
    pro3.style.display = "block";
    pro5.style.display = "block";
    bu1.style.color = "#65B530";
    bu2.style.color = "black";
    bu3.style.color = "black";
}

function button2() { //1,3,5
    pro1.style.display = "block";
    pro3.style.display = "block";
    pro5.style.display = "block";
    pro2.style.display = "none";
    pro4.style.display = "none";
    pro6.style.display = "none";
    bu2.style.color = "#65B530";
    bu1.style.color = "black";
    bu3.style.color = "black";
}

function button3() { //1,3,5
    pro2.style.display = "block";
    pro4.style.display = "block";
    pro6.style.display = "block";
    pro1.style.display = "none";
    pro3.style.display = "none";
    pro5.style.display = "none";
    bu3.style.color = "#65B530";
    bu2.style.color = "black";
    bu1.style.color = "black";
}
/////////////////////arrow && nav
var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;
var arrow = document.getElementById("arrow");
window.onscroll = function() {

    if (window.pageYOffset >= sticky) { //pageYOffset//offsetTop
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed")
    }
    if (window.scrollY >= 1200) {
        arrow.style.opacity = 1;
    } else {
        arrow.style.opacity = 0;
    }

}
arrow.onclick = function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    ///////////////////////page8  _img_Testimonial
var imgt1 = document.getElementById("imgt1");
var imgt2 = document.getElementById("imgt2");
var imgt3 = document.getElementById("imgt3");
var pp1 = document.getElementById("pp1");
var pp2 = document.getElementById("pp2");
var hh1 = document.getElementById("hh1");

function img1() {
    imgt1.classList.remove("img");
    imgt1.classList.add("act");
    imgt2.classList.add("img");
    imgt3.classList.add("img");
    pp1.textContent = "Clita1 clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.";
    hh1.textContent = "M";
    pp2.textContent = "Profession";
}

function img2() {
    imgt2.classList.remove("img");
    imgt2.classList.add("act");
    imgt1.classList.add("img");
    imgt3.classList.add("img");
    pp1.textContent = "Clita 2 clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.";
    hh1.textContent = "O";
    pp2.textContent = "Profession";
}

function img3() {
    imgt3.classList.remove("img");
    imgt3.classList.add("act");
    imgt2.classList.add("img");
    imgt1.classList.add("img");
    pp1.textContent = "Clita 3 clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.";
    hh1.textContent = "N";
    pp2.textContent = "Profession";
}
///////////////////menu
var menu = document.getElementById("list_menu");

function me() {
    if (menu.style.height == "0px") {
        menu.style.height = '310px';
    } else {
        menu.style.height = '0px';
    }
}
//////////////////
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");
var page4 = document.getElementById("page4");
var page5 = document.getElementById("page5");

function home() {
    page1.style.color = "red";
}

function about() {
    page2.style.color = "red";
}

function Service() {

}

function Project() {


}

function contact() {

}
////////////count page2
var count1 = document.getElementById("count1");
var count2 = document.getElementById("count2");

function animat(ele, start, end, duration) {
    var increment = 0;
    if (end > start) {
        increment = 1;
    } else {
        increment = -1;
    }
    var timer = setInterval(() => {
        start += increment;
        ele.textContent = start;
        if (start == end) {
            clearInterval(timer);
        }

    }, duration);

}
animat(count1, 1, 1234, 0.1);
animat(count2, 1, 1234, 0.01);