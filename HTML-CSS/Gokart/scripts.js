document.querySelector('.icon').onclick=function(){
    document.querySelectorAll('a:not(.icon)').forEach(item=>{
        item.classList.toggle('mobil-menuitem')
    })
}