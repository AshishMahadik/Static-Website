const toggle_btn = document.getElementById('navtoggle');

toggle_btn.addEventListener('click', ()=>{
    document.getElementById('toggle-span').classList.toggle('toggle-icon-active');
})


let va;
function change(id){

    let n,m,ids;
    if(id<10)
        n = 3, m = 1, ids=id;
    else
        n = 6, m = 2, ids=id-10;

    const dot = document.querySelector(`.slider-${m} span:nth-child(${ids})`);
    dot.classList.toggle("selected-dot"); 
    for (let i = 1, j = ids+1; i <= n; i++,j++) {
        if(m===1 && j>4)
            j=1;
        else if(m===2 && j>7)
            j=1;

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
            va=-1840;
            break;
        }
        document.getElementById("slide").style.transform = `translate3d(${va}px, 0px, 0px)`;
    }
    else{
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
    
}