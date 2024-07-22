document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("nav-icon");
const changeElementsColor = (tagName,color)=>{
    const elements = document.getElementsByTagName(tagName);
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = color;
    }

}

const sun = document.getElementById("nav-icon-sun");



    btn.addEventListener("click", function () {
        document.body.style.backgroundColor = 'black';
        changeElementsColor('a','white')
        changeElementsColor('h1','white')
        changeElementsColor('h3','white')

       btn.style.display='none'

        sun.style.display='block'


    })
sun.addEventListener("click", function () {

        document.body.style.backgroundColor = 'white';
        changeElementsColor('a','#212529')
        changeElementsColor('h1','#212529')
        changeElementsColor('h3','#212529')
        btn.style.display='block'






})

});
