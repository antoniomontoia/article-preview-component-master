const svgContainer = document.querySelector('.container__section1__2svgcontainer');
const svgContainer2 = document.querySelector('.container__section1__3svgcontainer')
const section2 = document.querySelector('.container__section1__2');
const section3 =  document.querySelector('.container1__3hidden');

svgContainer.addEventListener('click', () => {
    section2.style.display = 'none';
    section3.style.display = 'block';
})

svgContainer2.addEventListener('click', () => {
    section3.style.display  = 'none';
    section2.style.display = 'flex';
})

;
