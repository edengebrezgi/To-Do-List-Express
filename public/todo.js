
//getting objects

let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
let el = document.getElementsByTagName('li');
let removeBtn = document.querySelector('#Remove');

//creating a function now that will allow element on button click

btn.addEventListener('click',() => {
    let txt = input.value;
    if(txt === ""){
        alert('you must write something');
    }else{
        let li = document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li, list.childNodes[0]);
        input.value = ''; 
    }
})


list.addEventListener('click', e =>{
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
    } 
})