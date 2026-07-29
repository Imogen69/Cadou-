// ======================================
// ORĂ ȘI DATĂ AUTOMATĂ
// ======================================

const luni = [
    "ianuarie",
    "februarie",
    "martie",
    "aprilie",
    "mai",
    "iunie",
    "iulie",
    "august",
    "septembrie",
    "octombrie",
    "noiembrie",
    "decembrie"
];


function updateClock(){

    const now = new Date();

    const ore = String(now.getHours()).padStart(2,"0");
    const minute = String(now.getMinutes()).padStart(2,"0");


    const data =
    now.getDate() +
    " " +
    luni[now.getMonth()] +
    " " +
    now.getFullYear();


    const elements = {

        statusTime: ore + ":" + minute,

        homeTime: ore + ":" + minute,

        lockClock: ore + ":" + minute,

        lockDate: data

    };


    for(let id in elements){

        const el=document.getElementById(id);

        if(el){

            el.textContent = elements[id];

        }

    }

}


updateClock();

setInterval(updateClock,1000);





// ======================================
// DEBLOCARE IPHONE
// ======================================


const lockScreen=document.getElementById("lockScreen");
const homeScreen=document.getElementById("homeScreen");


function unlockPhone(){

    if(lockScreen && homeScreen){

        lockScreen.classList.add("hidden");

        homeScreen.classList.remove("hidden");

    }

}



if(lockScreen){


    // click

    lockScreen.onclick=function(){

        unlockPhone();

    };



    // swipe

    let startY=0;


    lockScreen.addEventListener("touchstart",function(e){

        startY=e.touches[0].clientY;

    });



    lockScreen.addEventListener("touchend",function(e){

        let endY=e.changedTouches[0].clientY;


        if(startY-endY>80){

            unlockPhone();

        }

    });


}






// ======================================
// DESCHIDERE APLICAȚII
// ======================================


function openApp(app){

    const page=document.getElementById(app);


    if(page){

        page.classList.remove("hidden");

    }


}



function closeApp(app){

    const page=document.getElementById(app);


    if(page){

        page.classList.add("hidden");

    }


}





// ======================================
// ICONIȚE IPHONE
// ======================================


const apps = {


    photosIcon:"photosPage",

    musicIcon:"musicPage",

    videoIcon:"videoPage",

    letterIcon:"letterPage",

    secretIcon:"giftPage"


};



for(let icon in apps){


    const element=document.getElementById(icon);


    if(element){


        element.onclick=function(){


            openApp(apps[icon]);


        };


    }


}







// ======================================
// GALERIE FOTO
// ======================================


const poze=[

"images/poza1.jpeg",
"images/poza2.jpeg",
"images/poza3.jpeg",
"images/poza4.jpeg",
"images/poza5.jpeg"

];


let pozaActuala=0;


const galleryImage=document.getElementById("galleryImage");

const nextPhoto=document.getElementById("nextPhoto");

const prevPhoto=document.getElementById("prevPhoto");





if(nextPhoto){


nextPhoto.onclick=function(){


pozaActuala++;


if(pozaActuala>=poze.length){

pozaActuala=0;

}


if(galleryImage){

galleryImage.src=poze[pozaActuala];

}


};


}





if(prevPhoto){


prevPhoto.onclick=function(){


pozaActuala--;


if(pozaActuala<0){

pozaActuala=poze.length-1;

}


if(galleryImage){

galleryImage.src=poze[pozaActuala];

}


};


}







// ======================================
// ÎNCHIDERE APLICAȚII CU BUTON BACK
// ======================================


document.querySelectorAll(".backButton").forEach(button=>{

    button.onclick=function(){

        const app=this.closest(".page");

        if(app){

            app.classList.add("hidden");

        }

    };

});
document.querySelectorAll(".gallery img").forEach(img=>{


    img.onclick=function(){


        let viewer=document.createElement("div");

        viewer.className="photoOpen";


        viewer.innerHTML=`

        <img src="${this.src}">

        `;


        document.getElementById("phone").appendChild(viewer);


        viewer.onclick=function(){

            viewer.remove();

        };


    };


});
let startY = 0;


document.addEventListener("touchstart", function(e){

    startY = e.touches[0].clientY;

});


document.addEventListener("touchend", function(e){

    let endY = e.changedTouches[0].clientY;


    let diferenta = startY - endY;


    // dacă glisează în sus de jos
    if(diferenta > 100 && startY > 700){


        document.querySelectorAll(".page")
        .forEach(page=>{

            page.classList.add("hidden");

        });


        document.getElementById("homeScreen")
        .classList.remove("hidden");


    }

});