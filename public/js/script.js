'use strict'
const buttons = document.querySelectorAll('.btn_cs');
const modal = document.querySelector('.modal_cs');
const overLay = document.querySelector('.overlay_cs');
const closeModal = document.querySelector('.close_cs');

const switchModal = (onOOff)=>{
    if(onOOff === 'on'){
        modal.classList.remove('hidden');
        overLay.classList.remove('hidden');
    }else if(onOOff === 'off'){
        modal.classList.add('hidden');
        overLay.classList.add('hidden');
    };
 
};

buttons.forEach((e)=>{
   e.addEventListener('click',()=>{
    switchModal('on');

   });
});
closeModal.addEventListener('click',()=>{
    switchModal('off');
});
overLay.addEventListener('click',()=>{
    switchModal('off');
});
document.addEventListener('keydown',(key)=>{
    console.log(key.keyCode);
    if(key.code === 'Escape'){
        switchModal('off')
    };
})