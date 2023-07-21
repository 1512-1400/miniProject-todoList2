let $ = document;
let col = $.querySelectorAll(`.col`);
var allTodos;
var draged;
var closeIcon;
var modal = $.querySelector(`.modalBg`);
var ok = $.querySelector(`.ok`);

// $.body.addEventListener(`keydown`, () => {
//   modal.style.display = `none`;
// });

$.body.addEventListener(`keyup`, (key) => {
  if(modal.style.display != `none`){
    modal.style.display = `none`
  }else if (key.keyCode == 13) {
    var uservalue = prompt(`New Todo: `);
    var todo = $.createElement(`div`);
    todo.draggable = `true`;
    todo.className = `w-11/12 py-2 px-5 my-1 flex justify-between items-center border-2 border-gray-400 rounded-xl`;
    todo.classList.add(`todos`);
    todo.innerHTML = uservalue;
    closeIcon = $.createElement(`span`);
    closeIcon.innerHTML = `X`;
    closeIcon.className = `text-md text-gray-500`;
    todo.append(closeIcon);
    col[0].append(todo);
  }
  closeIcon.addEventListener(`click`, (event) => {
    event.target.parentElement.remove();
  });
  allTodos = $.querySelectorAll(`.todos`);

  allTodos.forEach((element) => {
    element.addEventListener(`dragstart`, (event) => {
      draged = event.target;
    });
  });
});

col.forEach((element) => {
  element.addEventListener(`dragover`, (event) => {
    event.preventDefault();
  });
  element.addEventListener(`drop`, () => {
    element.append(draged);
  });
});

ok.addEventListener(`click`, () => {
  ok.parentElement.parentElement.style.display = `none`;
});
