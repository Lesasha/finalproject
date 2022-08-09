function changebar(){
    var navbar= document.getElementById('navbar')
    var barvalue= window.scrollY
if(navbar < 150){
    navbar.classList.remove('bgcolor')
}else{
    navbar.classList.add('bgcolor')
}
}

window.addEventListener('scroll',changebar)

