function handleClick(e) {
  let btn = e.target || e.srcElement;
  let action = document.getElementById(btn.id).innerHTML;
  let result = document.getElementById('result');
  
  switch (action) {
    case 'C':
      result.innerHTML = '';
      break;
    case 'Del':
      result.innerHTML = result.innerHTML.substr(0, result.innerHTML.length - 1);
      break;
    case '=':
      result.innerHTML = eval(result.innerHTML);
      break;
    default:
      result.innerHTML += action;
      break;
  }
}

const btns = document.getElementsByTagName('button');
for (let btn of btns) {
  btn.onclick = handleClick;
}