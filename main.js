let wrap = document.querySelector('.wrap');
let items = document.querySelector('.items');
let itemCount = document.querySelectorAll('.item').length;
let scroller = document.querySelector('.scroller');
let transform = Modernizr.prefixed('transform');
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let pos = 0;

function setTransform(){
    items.style[transform] = 'translate3d('+(-pos * items.offsetWidth) + 'px,0,0)';
}

function prevFunction(){
    pos = Math.max(pos - 1, 0);
    setTransform();

}

function nextFunction(){
    pos = Math.max(pos + 1, itemCount - 3);
    
    if(pos >= itemCount){
        pos = 0;
    }
    setTransform();

    console.log(pos);
    console.log(itemCount);
    
    

}


window.addEventListener('resize', setTransform);
prev.addEventListener('click', prevFunction);
next.addEventListener('click', nextFunction);