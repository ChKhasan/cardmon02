import React, { Component } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import HomeP from "./HomeP";
import LoginP from "./LoginP";
import { TOKEN } from "./../const";
import TodosDone from "./TodosDone";
import TodosDeleted from "./TodosDeleted";
import Layout from "../comps/Layout";

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      todos: [],
      todosDone: [],
      todosDeleted: [],
    };
  }
  render() {
    const state = this.state;
    const openModal = () => {
      this.setState({ isOpen: true });
    };
    const closeModal = () => {
      this.setState({ isOpen: false });
    };
    const getValues = (values) => {
      this.setState({ todos: [...this.state.todos, values] });
    };
    const doneTodo = (todo) => {
      this.setState({
        todos: this.state.todos.filter((item) => item.todo !== todo.todo),
        todosDone: [...this.state.todosDone, todo],
      });
    };
    const deletedTodo = (todo) => {
      this.setState({
        todos: this.state.todos.filter((item) => item.todo !== todo.todo),
        todosDone: this.state.todosDone.filter((item) => item.todo !== todo.todo),
        todosDeleted: [...this.state.todosDeleted, todo],
      });
      console.log(this.state.todosDeleted);

    };
    const deleted= (todo) => {
      const delTodos = this.state.todos.findIndex(item => item.todo == todo.todo);

      this.state.todos.splice(delTodos,1)

      this.setState({ todo: "", time: "" });

          
    }
    const deletedTodoDeleted = (todo) => {

      const delTodoDeleted = this.state.todosDeleted.findIndex(item => item.todo == todo.todo);
 
      this.state.todosDeleted.splice(delTodoDeleted,1)
      this.setState({ todo: "", time: "" });

          
    }
    const deletedTodoDone = (todo) => {

      const delTodoDone = this.state.todosDone.findIndex(item => item.todo == todo.todo);
 
      this.state.todosDone.splice(delTodoDone,1)
      this.setState({ todo: "", time: "" });

          
    }


    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginP />}></Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route
              path=""
              element={
                <Layout todosNumber={state.todos.length} todosDoneNumber={state.todosDone.length} todosDeletedNumber={state.todosDeleted.length}>
                  <HomeP
                  deleted={deleted}
                    isOpen={state.isOpen}
                    closeModal={closeModal}
                    openModal={openModal}
                    getValues={getValues}
                    todos={state.todos}
                    doneTodo={doneTodo}
                    deletedTodo={deletedTodo}
                    
                  />
                </Layout>
              }
            />
            <Route
              path="done"
              element={
                <Layout todosNumber={state.todos.length} todosDoneNumber={state.todosDone.length} todosDeletedNumber={state.todosDeleted.length}>
                  <TodosDone deletedTodoDone={deletedTodoDone} todosDone={state.todosDone}  openModal={openModal}  />
                </Layout>
              }
            />
            <Route
              path="deleted"
              element={
                <Layout todosNumber={state.todos.length} todosDoneNumber={state.todosDone.length} todosDeletedNumber={state.todosDeleted.length}>
                  <TodosDeleted deletedTodoDeleted={deletedTodoDeleted} todosDeleted={state.todosDeleted} openModal={openModal}/>
                </Layout>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default index;

const PrivateRoute = () => {
  const auth = localStorage.getItem(TOKEN);
  return auth ? <Outlet /> : <Navigate to="/login" />;
};
