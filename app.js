// je crée ma variable app
var app = {
// dans mon tableau todosList j'écris mes tasks    
  todosList: [
      {
          text: 'Corriger CV',
          done: false,

      },
      {
          text: 'Faire les minimum 80 % Opquast',
          done: false,

      },
      {
          text: 'Terminer formation API',
          done: false,

      },
      {
          text: 'Publier projet Todo List GitHub en public',
          done: false,

      },
      {
          text: 'Refaire challenge react converter',
          done: false,

      }
  ],
 
  init: function () {
      app.todo = document.getElementById('todo');
      app.todo.innerHTML = '';
      app.createForm();
      app.createCount();
      app.createList();
  },
  createForm: () => {
      const form = document.createElement('form');
      const input = document.createElement('input');
      app.input = input;
      input.id = 'todo-input';
      input.placeholder = "Ajouter une tâche";
      form.addEventListener('submit', app.addItem);
      form.appendChild(input);
      app.todo.appendChild(form);
  },
  createCount: () => {
      app.counter = document.createElement('div');
      app.counter.id = 'todo-counter';
      app.updateCounter();
      app.todo.appendChild(app.counter);
  },
  createList: () => {
      app.list = document.createElement('ul');
      app.list.id = 'todo-list';
      app.todosList.forEach((todoObject) => {
      app.generateItem(todoObject);      
      });
      app.todo.appendChild(app.list);
    },
    addItem: (evt) => {
        evt.preventDefault();
        console.log('submit');
        const text = app.input.value;
        app.todosList.push({
            text: text,
            done: false,
            
        });
        app.init();
        app.input.value = '';
        app.updateCounter();
    },
    generateItem: (objectTodo) => {
        const { text: todoText, done } = objectTodo;
        const item = document.createElement('li');
        item.className = done ? 'todo todo--done' : 'todo';
        const check = document.createElement('input');
        check.type = 'checkbox';
        check.checked = done;
        check.addEventListener('change', (evt) => {
            objectTodo.done = !done;
            app.init();
        });
        const text = document.createElement('span');
        text.className ='todo-text';
        text.textContent = todoText;
        item.appendChild(check);
        item.appendChild(text);
        app.list.appendChild(item);
  
    },
    updateCounter: () => {
        const total = app.todosList.filter(todo => !todo.done).length;
        console.log(total);
        let message;
        switch (total) {
          case 0:
            message = "0 tâche en cours";
            break;
          case 1:
            message = "1 tâche en cours"
            break;
          default:
            message = total + " tâches en cours"
            break;
        }
        app.counter.textContent = message;
      }
    };

document.addEventListener('DOMContentLoaded', app.init);