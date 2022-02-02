import { Store } from "react-stores";

const UserStore = new Store({
  todos: {},
  removeTodo: {},
  nameState: {
    auth: false,
    username: "Todo",
  },
  secondState: {
    todo: false,
    lastname: "Tasks ",
    data: [
      {
        name: "Task 1",
        task: "work1",
      },
      {
        name: "task 2",
        task: "work2",
      },
      {
        name: "task 3",
        task: "work3",
      },
    ],
  },
});

export { UserStore };
