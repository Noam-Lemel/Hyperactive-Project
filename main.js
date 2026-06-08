const humburgerBtn=document.getElementById('humburger-container');
const headerNav=document.getElementById('link-container');
const careerItem=document.querySelector('.item');
const careerLink=document.getElementById('career-link');
const mobileCareer=document.getElementById('mobile-career');
const body=document.body;
const circleArrows= document.getElementsByClassName('circle-arrow');
const qaContainers=document.getElementsByClassName('qa-container');
const exitButtons=document.querySelectorAll('.exit-button');
const forms=document.getElementsByTagName('form');
const modalsbackground=document.getElementById('modals-background');
const confirmationModal=document.getElementById('confirmation-modal');
const formModal=document.getElementById('form-modal');
const pluses=document.querySelectorAll('.plus');
const boxes=document.querySelectorAll('.box');
const privacyBtns=document.querySelectorAll('.privacy-btn');
const accessibilityBtns=document.querySelectorAll('.accessibility-btn');
const privecyModal=document.querySelector('.privacy-modal');
const accessibilityModal=document.querySelector('.accessibility-modal');

window.addEventListener('load',()=>{
    modalsbackground.classList.remove('none');
})

humburgerBtn.addEventListener('click',()=>{
        headerNav.classList.toggle('isOpen');
        humburgerBtn.classList.toggle('isOpen');
});
for(let i=0;i<qaContainers.length;i++){
    qaContainers[i].addEventListener('click',()=>{
        qaContainers[i].classList.toggle('isOpen');
    })
}
for(let i=0;i<boxes.length;i++){
    boxes[i].addEventListener('click',()=>{
        boxes[i].classList.toggle('isOpen');
    })
}
for(let i=0;i<exitButtons.length;i++){
    exitButtons[i].addEventListener('click',()=>{
        const modal=exitButtons[i].parentElement;
        modal.classList.add('none');
         modalsbackground.classList.add('none');
    });
}
for(let i=0;i<forms.length;i++){
    forms[i].addEventListener('submit',(event)=>{
        event.preventDefault();
        const name=forms[i].querySelector('input[name="name"]');
        const tel=forms[i].querySelector('input[name="phone-number"]');
        const mail=forms[i].querySelector('input[name="email"]');
        if(name.value.trim().length<2||tel.value.length<9)
            return;
        if(!formModal.classList.contains('none'))
            formModal.classList.add('none');
        modalsbackground.classList.remove('none');
        confirmationModal.classList.remove('none');
    });
}
careerItem.addEventListener('click',(event)=>{
    if(window.innerWidth<1000)
        event.preventDefault();
        careerItem.classList.toggle('isDropdownOpen');
});
humburgerBtn.addEventListener('click',()=>{
    headernav.classList.toggle('isOpen');
    humburgerBtn.classList.toggle('isOpen');
})
for(let i=0;i<privacyBtns.length;i++){
    privacyBtns[i].addEventListener('click',()=>{
        privecyModal.classList.remove('none');
        modalsbackground.classList.remove('none');
    })
}
for(let i=0;i<accessibilityBtns.length;i++){
    accessibilityBtns[i].addEventListener('click',()=>{
        accessibilityModal.classList.remove('none');
        modalsbackground.classList.remove('none');
    })
}