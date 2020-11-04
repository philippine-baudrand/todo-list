// je crée ma variable app
var app = {
// dans mon tableau todoList j'écris mes tasks    
  todoList: [
      {
          text: 'Corriger CV',
          done: false,
          favorite: true
      },
      {
          text: 'Faire les minimum 80 % Opquast',
          done: false,
          favorite: true
      },
      {
          text: 'Terminer formation API',
          done: false,
          favorite: true
      },
      {
          text: 'Publier projet Todo List GitHub en public',
          done: false,
          favorite: true
      },
      {
          text: 'Refaire challenge react converter',
          done: false,
          favorite: true
      }
  ],
 
  init: function () {
      app.todo = document.getElementsByClassName('todo');
      app.todo.innerHTML = '';
      app.createForm();
      app.createCount();
      app.createList();
  }
}