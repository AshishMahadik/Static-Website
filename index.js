const toggle_btn = document.getElementById('navtoggle');

toggle_btn.addEventListener('click', ()=>{
    document.getElementById('toggle-span').classList.toggle('toggle-icon-active');
})


let va;
function change(id){

    let n,m,ids;
    if(id<10)
        n = 3, m = 1, ids=id;
    else if(id<20)
        n = 6, m = 2, ids = id - 10;
    else
        n = 4, m = 3, ids = id - 20;

    const dot = document.querySelector(`.slider-${m} span:nth-child(${ids})`);
    dot.classList.toggle("selected-dot"); 
    for (let i = 1, j = ids+1; i <= n; i++,j++) {
        if (m === 1 && j > 4)
            j = 1;
        else if (m === 2 && j > 7)
            j = 1;
        else if (m === 3 && j > 5)
            j = 1;

        if(document.querySelector(`.slider-${m} span:nth-child(${j})`).classList.contains("selected-dot")){
            document.querySelector(`.slider-${m} span:nth-child(${j})`).classList.toggle("selected-dot");
        }
    }

    if(id<10){
        switch(id){
            case 1:
            va=0;
            break;
    
            case 2:
            va=-460;
            break;
    
            case 3:
            va=-920
            break;
    
            case 4:
            va=-1380;
            break;
    
            default:
            va=0;
            break;
        }
        document.getElementById("slide").style.transform = `translate3d(${va}px, 0px, 0px)`;
    }
    else if(id<20){
        switch(id){
            case 11:
            va=0;
            break;
    
            case 12:
            va=-216;
            break;
    
            case 13:
            va=-432;
            break;
    
            case 14:
            va=-648;
            break;

            case 15:
            va=-864;
            break;

            case 16:
            va=-1080;
            break;

            case 17:
            va=-1320;
            break;
    
            default:
            va=0;
            break;
        }
        document.getElementById("slide2").style.transform = `translate3d(${va}px, 0px, 0px)`;
    }
    else {
        switch(ids){
            case 1:
            va=0;
            break;
    
            case 2:
            va=-326;
            break;
    
            case 3:
            va = -652;
            break;
    
            case 4:
            va=-978;
            break;
            
            case 5:
            va=-1304;
            break;
    
            default:
            va=0;
            break;
        }
        document.getElementById("slide3").style.transform = `translate3d(${va}px, 0px, 0px)`;
    }
    
}


function isInViewport(ele) {
    const rect = ele.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

function eleview() {
    if (isInViewport(document.getElementById("section-2"))) {
        if (document.getElementById("sub-1").classList.contains("text-anim")) {
        }
        else {
            document.getElementById("sub-1").classList.add("text-anim");
        }
    }
    if (isInViewport(document.getElementById("section3"))) {
        if (document.getElementById("img-1").classList.contains("img-anim-left")) {
        }
        else {
            document.getElementById("img-1").classList.add("img-anim-left");
            document.getElementById("img-2").classList.add("img-anim-bottom");
        }
    } 
    if (isInViewport(document.getElementById("section4"))) {
        
        if (document.getElementById("ch-1").classList.contains("img-anim-right")) {
        }
        else {
            document.getElementById("ch-1").classList.add("change");
            document.getElementById("ch-2").classList.add("change");
            document.getElementById("ch-3").classList.add("change");
            document.getElementById("ch-4").classList.add("change");
        }
    } 
    if (isInViewport(document.getElementById("section5"))) {
        if (document.getElementById("sub-2").classList.contains("text-anim")) {
            
        }
        else {
            document.getElementById("sub-2").classList.add("text-anim");
        }
    }
    if (isInViewport(document.getElementById("section6"))) {
        if (document.getElementById("sub-3").classList.contains("text-anim")) {
            
        }
        else {
            document.getElementById("sub-3").classList.add("text-anim");
            document.getElementById("bar-1").classList.add("img-anim-right");
        }
    }
    if (isInViewport(document.getElementById("section7"))) {
        if (document.getElementById("sub-4").classList.contains("text-anim")) {
            
        }
        else {
            document.getElementById("sub-4").classList.add("text-anim");
        }
    }
    if (isInViewport(document.getElementById("section8"))) {
        if (document.getElementById("sub-5").classList.contains("text-anim")) {
            
        }
        else {
            document.getElementById("sub-5").classList.add("text-anim");
        }
    }
    if (isInViewport(document.getElementById("sub-6"))) {
        if (document.getElementById("sub-6").classList.contains("text-anim")) {
            
        }
        else {
            document.getElementById("sub-6").classList.add("text-anim");
        }
    }
    if (isInViewport(document.getElementById("section10"))) {
        if (document.getElementById("sub-7").classList.contains("text-anim")) {
            
        }
        else {
            document.getElementById("sub-7").classList.add("text-anim");
            document.getElementById("img-3").classList.add("img-anim-left");
        }
    }
    if (isInViewport(document.getElementById("section11"))) {
        if (document.getElementById("sub-8").classList.contains("text-anim")) {
            
        }
        else {
            document.getElementById("sub-8").classList.add("text-anim");
        }
    }

    if (isInViewport(document.getElementById("sub-9"))) {
        if (document.getElementById("sub-9").classList.contains("text-anim")) {
            
        }
        else {
            document.getElementById("sub-9").classList.add("text-anim");
        }
    }

}
window.addEventListener('scroll', eleview);