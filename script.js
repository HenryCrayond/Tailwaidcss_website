const openMenu = document.getElementById('open')
const menu = document.getElementById('menu')
const home = document.getElementById('item_home')
const about = document.getElementById('item_about')
const conduct = document.getElementById('item_conduct')


openMenu.addEventListener('click',function(){
    console.log("first")
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
    }else{
        menu.classList.add('hidden')
    }
})

home.addEventListener('click',function(){
    home.style.borderColor="#84CC16"
    home.style.color="#84CC16"
    about.style.borderColor="white"
    about.style.color="gray"
    conduct.style.borderColor="white"
    conduct.style.color="gray"
})
about.addEventListener('click',function(){
    home.style.borderColor="white"
    home.style.color="gray"
    about.style.borderColor="#84CC16"
    about.style.color="#84CC16"
    conduct.style.borderColor="white"
    conduct.style.color="gray"
})
conduct.addEventListener('click',function(){
    home.style.borderColor="white"
    home.style.color="gray"
    about.style.borderColor="white"
    about.style.color="gray"
    conduct.style.borderColor="#84CC16"
    conduct.style.color="#84CC16"
})