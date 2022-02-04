
const screenWidth = window.screen.width;

document.body.style.width = `${screenWidth}px`;


let blocks = [
    {title: 'Что-то здесь записано!' ,
     text: 'ссылка на гугл',
     link: 'http:google.com',
     promoCode: '',
     about: 'нажмите, чтобы перейти по ссылке!'},

     {title: 'Что-то здесь записано!(1)' ,
     text: 'ссылка на яндекс' ,
     link: 'http:yandex.ru',
     promoCode: '',
     about: 'нажмите, чтобы перейти по ссылке!'} ,

     {title: 'Что-то здесь записано!(1)' ,
     text: 'ссылка на яндекс' ,
     link: '',
     promoCode: 'ff456gt6',
     about: 'копировать промокод!'}
];
 
 
for (const item of blocks) {

    let article = document.createElement('article'),
        caption = document.createElement('h5'),
        textBlock = document.createElement('p'),
        aboutText = document.createElement('p'),
        main = document.querySelector('main');

     article.classList.add('main__block');
     caption.classList.add('block__title');
     textBlock.classList.add('block__text');
     aboutText.classList.add('block__about');


     caption.innerText = `${item.title}`;
     textBlock.innerText = `${item.text}`;
     aboutText.innerText = `${item.about}`;
      
     main.append(article);
     article.append(caption);
     article.append(textBlock);
     article.append(aboutText);


     

     if(item.promoCode === ''){
     let   links = document.createElement('a');
         links.classList.add('block__link');
         links.setAttribute('href', `${item.link}`);
         article.append(links);

         aboutText.addEventListener('pointerdown', () =>{
          links.click();
        })
     }

     if(item.link === ''){
    let  promo = document.createElement('p');
        promo.classList.add('block__promo');
     promo.innerText = `${item.promoCode}`;
        textBlock.after(promo);


     aboutText.addEventListener('pointerdown', ()=>{
         navigator.clipboard.writeText(`${item.promoCode}`)
         .then(() =>{
         popUp(article);

         })
         .catch( err => {
             alert('error copy')
         }, err);
       
     })   
     
     }    
 
}



function popUp(arg){
    let div = document.createElement('div');
     div.classList.add('popup');
    div.innerHTML = '<p>Copy!</p>';
    arg.append(div);
    setTimeout(() => div.remove(), 500);
}


document.addEventListener('pointerdown', (e)=>{
    if(e.target === document.querySelector('.wrapper__footer__whats')){
        document.getElementById('whatsApp').click();
    }
    if(e.target === document.querySelector('.wrapper__footer__inst')){
        document.getElementById('inst').click();
    }
    if(e.target === document.querySelector('.wrapper__footer__telegram')){
        document.getElementById('telegram').click();
    }
})





