
const openbtns = document.querySelectorAll('.section-FAQ__plus');
const closebtn = document.querySelector('.section-FAQ__close');
const stepbtns = document.querySelectorAll('.section-work__btn');
const title = document.querySelector('.consulting__title');
const text = document.querySelector('.consulting__text');
const img = document.querySelector('.consulting__image');
const burger = document.querySelector('.header-menu__status');
const menu = document.querySelector('.header-menu__navbar');
const closemenu = document.querySelector('.header__close-btn');
const doc = document.querySelector('html');
const logo = document.querySelector('.header-menu__logo')
const links = document.querySelectorAll('.header-menu__item-link');
new Accordion('.accordion-container');
// ---------------------------- tabs in section "Как мы работаем" -------------
const titles = {   
   step1: "Проводим консультацию",
   step2: "Составляем смету", 
   step3: "Привлекаем подрядчиков",
   step4: "Инспектируем все этапы работ"
}
const texts = {   
    step1: "Влечет за собой процесс внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований. Кстати,  стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу.",
    step2: "Внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований.", 
    step3 : "Идейные соображения высшего порядка, а также новая модель организационной деятельности требует анализа прогресса профессионального сообщества. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнить важные задания по разработке прогресса профессионального сообщества.", 
    step4: "Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет."
}

stepbtns.forEach(elem=> { 
   elem.addEventListener('click', function(e) {
      stepbtns.forEach(step=> step.classList.remove('active'));  
      let path = e.target.dataset.step; 
      console.log(e.target.dataset.step);
      title.textContent = `${titles[path]}`; 
      text.textContent = `${texts[path]}`;
      img.src = `./images/${path}.jpg`;
      console.log(titles[path]);
      elem.classList.add('active');
   })
})

// ----------------------   burger menu ----------------------------------
burger.addEventListener('click', function() { 
   burger.classList.toggle('open')
   menu.classList.toggle('active');
});

links.forEach(e=> {  
   e.addEventListener('click', function(event) { 
      if(menu.classList.contains('active')) { 
         menu.classList.remove('active');
         burger.classList.remove("open");
      }
   })
})
/*document.body.addEventListener('click', function() {  
   if(menu.classList.contains('active')) {
      menu.classList.remove('active');
      closemenu.classList.remove('active')
   }
});*/


// ----------------------------------swiper slider------------------------ 
const swiper = new Swiper('.swiper-container', {
   loop: true,
   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    simulateTouch: true, 
    touchRation: 1,
    touchAngle: 45,
    grabCursor: true,
    a11y: {  
       paginationBulletMessage: 'Кнопка {{index}}',
    }
 });

 
// ---------------- search looop --------------------------  
document.addEventListener('DOMContentLoaded', (e)=> {  
   document.querySelector('.header-menu__search-btn').addEventListener('click', (e)=> { 
      document.querySelector('.header__searchpanel').classList.add('header__searchpanel_show');
   } )
   document.querySelector('.searchpanel__closebtn').addEventListener('click', (e)=> { 
      document.querySelector('.header__searchpanel').classList.remove('header__searchpanel_show');
   } )
   document.querySelector('.header__searchpanel').addEventListener('submit', (e)=> { 
       e.preventDefault(); 
   } )
}) 