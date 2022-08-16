const closeFace= document.querySelector('.closed')
const openFace= document.querySelector('.open')

//add event listener

closeFace.addEventListener('click',()=>{
if(openFace.classList.contains('open')){
    openFace.classList.add('active');
    closeFace.classList.remove('active');
}

})
openFace.addEventListener('click',()=>{
    if(openFace.classList.contains('active')){
        openFace.classList.remove('active');
        closeFace.classList.add('active');
    }
    
    })