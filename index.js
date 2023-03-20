const toggle_btn = document.getElementById('navtoggle');

toggle_btn.addEventListener('click', ()=>{
    document.getElementById('toggle-span').classList.toggle('toggle-icon-active');
})