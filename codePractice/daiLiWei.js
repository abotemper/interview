const p1 = document.getElementById('p1');
const body = document.body

bindEvent(p1, 'click', e => {
  e.stopPropagation();
  alert('激活');
});

bindEvent(body, 'click', e => {
  alert('取消');
});