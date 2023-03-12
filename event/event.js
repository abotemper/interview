//通用的事件绑定函数
function bindEvent(elem, type, fn) {
    elem.addEventListener(type, fn);
}

function bindEvent2(elem, type, selector, fn) {
 //如果没有第四个参数，那么就将最后一个参数当作fn而不是selector
    if (fn == null) {
        fn = selector;
        selector = null;
    }

    elem.addEventListener(type, event => {
        const target = event.target;
        console.log(target);
        if (selector) {
            if(target.matches(selector)) {
              fn.call(target, event);
            }
        } else {
            fn.call(target, event);
        }
    })
}

//普通绑定
const btn1 = document.getElementById('btn1');
bindEvent2(btn1, 'click', function(event) {
    event.preventDefault();
    alert(this.innerHTML);

});

//代理绑定
const div3 = document.getElementById('div3');
bindEvent2(div3, 'click', 'a', function(event){
    event.preventDefault();
    alert(this.innerHTML);
});

const p1 = document.getElementById('p1');
bindEvent(p1, 'click', event => {
    // event.stopPropagation();
    console.log('激活');
});

const body = document.body;
bindEvent(body, 'click', event => {
    console.log('取消');

    console.log(event.target);
});

const div2 = document.getElementById('div2');
bindEvent(div2, 'click', event => {
    console.log('div2 clicked');

    console.log(event.target);
});
