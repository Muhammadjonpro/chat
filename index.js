
//SIEDBAR
const menuItems =document.querySelectorAll('.menu-item');
//MESSAGE
const messageesNotification = document.querySelector('#messeges-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
//THEME

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSize = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 =document.querySelector('.bg-1');
const Bg2 =document.querySelector('.bg-2');
const Bg3 =document.querySelector('.bg-3');



//remove active class from al menu items
const chageActiveItem = () => {
    menuItems.forEach(item =>{
        item.classList.remove('active')
    })
}



menuItems.forEach(item =>{
    item.addEventListener('click',() =>{
        chageActiveItem();
        item.classList.add('active');
        if (item.id != 'notification') {
            document.querySelector('.notification-poup').
            style.display = 'none';
        }else{
            document.querySelector('.notification-poup').
            style.display ='block' ;
            document.querySelector('#notification .notification-count').style.display ='none'
        }
    })
})
//Search
const searchMessage = () =>{
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat =>{
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex'
        }else{
            chat.style.display ='none'
        }
    })
}

messageSearch.addEventListener('keyup',searchMessage)

///message
messageesNotification.addEventListener('click',()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageesNotification.querySelector('.notification-count').style.display ='none';
    setTimeout(() =>{
        messages.style.boxShadow = 'none';
    },2000)
})


//theme/Display Customization


//opens modal
const openThemeModal = () =>{
    themeModal.style.display = 'grid';
}
//close Modal
const closeThemeModal = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none'
    }
}

//close modal
themeModal.addEventListener('click',closeThemeModal)
//open modal
theme.addEventListener('click',openThemeModal);
 


//fonts

//remove active class from spans or font size selectors

const removeSizeSelector = () =>{
    fontSize.forEach(size =>{
        size.classList.remove('active');
    })
}


fontSize.forEach(size =>{

    size.addEventListener('click',() => {
        removeSizeSelector()
        let fontSize;
        size.classList.toggle('active');

    if(size.classList.contains('font-size-1')){
        fontSize = '10px';
        root.style.setProperty('----sticky-top-left','5.4rem')
        root.style.setProperty('----sticky-top-right','5.4rem')
    }else if(size.classList.contains('font-size-2')){
        fontSize = '13px'
        root.style.setProperty('----sticky-top-left','5.4rem')
        root.style.setProperty('----sticky-top-right','-7rem')
    }else if(size.classList.contains('font-size-3')){
        fontSize = '16px'
        root.style.setProperty('----sticky-top-left','-2rem')
        root.style.setProperty('----sticky-top-right','-17rem')
    }else if(size.classList.contains('font-size-4')){
        fontSize = '19px'
        root.style.setProperty('----sticky-top-left','-5rem')
        root.style.setProperty('----sticky-top-right','-25rem')
    }else if(size.classList.contains('font-size-5')){
        fontSize = '22px'
        root.style.setProperty('----sticky-top-left','-12rem')
        root.style.setProperty('----sticky-top-right','-35rem')
    }

    //change font size of the root html
    document.querySelector('html').style.fontSize = fontSize;
    })
})
//remove active 

const chageActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// change primary colors
colorPalette.forEach(color =>{
    color.addEventListener('click', () => {
        let primary;
        chageActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue',primaryHue);
    })
})

//theme BACKGROUNDS values

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const  changeBG = () =>{
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}



Bg1.addEventListener('click',() =>{

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
})
Bg2.addEventListener('click',() =>{
    darkColorLightness ='95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})
Bg3.addEventListener('click',() =>{
    darkColorLightness ='95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})