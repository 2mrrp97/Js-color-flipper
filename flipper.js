let btn = document.getElementById('flip-btn');
let clrName = document.getElementById('clr-id');
let bgdiv = document.querySelector('.bg-div');

btn.addEventListener('click', () => {
    let cr = Math.floor((Math.random() * 255));
    let cg = Math.floor((Math.random() * 255));
    let cb = Math.floor((Math.random() * 255));

    let s = `rgb(${cr},${cg},${cb})`;
    bgdiv.style.backgroundColor = s;
    clrName.innerText = s;
    //console.log(bgdiv.style.backgroundColor);
});