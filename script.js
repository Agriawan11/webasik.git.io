const menu = document.getElementById('menu');

menu.addEventListener('click',function displayMenu(){
    const div = document.getElementById('menubar');
    const status = div.style.display;
    if (status == 'none'){
        div.style.display = "flex"
    }else{
        div.style.display ='none'
    }
})