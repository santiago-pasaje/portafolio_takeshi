//------ Variables ------//
const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');

const resumeList = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');
const portfolioLists = document.querySelectorAll('.portfolio-list');
const portfolioBoxs = document.querySelectorAll('.portfolio-box');

//------ Acciones para la seccion navbar ------//
navs.forEach((nav, idx) => {
    nav.addEventListener('click', () => {
        document.querySelector('.nav-list li.active').classList.remove('active');
        nav.classList.add('active');

        cube.style.transform = `rotateY(${idx * -90}deg)`; 
        
        document.querySelector('.section.active').classList.remove('active');
        sections[idx].classList.add('active');
        
        const array = Array.from(sections);
        const arrSecs = array.slice(1, -1); // solo requiere índices 1,2,3 o no requiere índices de inicio y fin
        arrSecs.forEach(arrSec => {
            if (arrSec.classList.contains('active')) {
                // console.log('ok')
                sections[4].classList.add('action-contact');
            }
        });
        if (sections[0].classList.contains('active')) {
            sections[4].classList.remove('action-contact');
        }
    });
});

//------ Acciones para la seccion resumen ------//
resumeList.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.resume-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.resume-box.active').classList.remove('active');
        resumeBoxs[idx].classList.add('active');
    })
});

//------ Acciones para la seccion portafolio ------//
portfolioLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.portfolio-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.portfolio-box.active').classList.remove('active');
        portfolioBoxs[idx].classList.add('active');
    })
});


//------ Acciones para la seccion contacto ------//

