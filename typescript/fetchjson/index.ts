import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  userId: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
   const todo = response.data as Todo;

   const ID  = todo.userId;
   const title = todo.title;
   const completed = todo.completed;

   console.log(`
      The Todo with ID:${ID}
      Has a title of: ${title}
      Is it completed: ${completed}
   `);
});
