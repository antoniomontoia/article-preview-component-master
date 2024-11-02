const svgContainer = document.querySelector('.container__section1__2svgcontainer');
const svgContainer2 = document.querySelector('.container__section1__3svgcontainer');
const svgContainer3 = document.querySelector('.container__section1__2svgcontainer-horizontal');
const svgContainer4 = document.querySelector('.container__section1__2svgcontainer-click');
const section2 = document.querySelector('.container__section1__2');
const section3 =  document.querySelector('.container1__3hidden');
const overlay = document.querySelector('.container__overlay')

svgContainer.addEventListener('click', () => {
    section2.style.display = 'none';
    section3.style.display = 'block';
})

svgContainer2.addEventListener('click', () => {
    section3.style.display  = 'none';
    section2.style.display = 'flex';
})

svgContainer3.addEventListener('click', () => {
    overlay.style.display = 'flex';
    svgContainer3.style.display = 'none';
    svgContainer4.style.display = 'flex';
})

svgContainer4.addEventListener('click', () => {
    overlay.style.display = 'none';
    svgContainer3.style.display = 'flex';
    svgContainer4.style.display = "none";
})
;
