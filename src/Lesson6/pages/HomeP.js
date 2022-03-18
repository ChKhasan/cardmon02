import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Table,
} from "reactstrap";

class HomeP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenTodo: false,

      todo: "",
      time: "",
      isExist: false,
      todoValue: '',
      button: true

    };
  }
  render() {
    const state = this.state;
    const closeModalDone = () => {
      this.setState({ isOpenTodo: false })
    }
    const openModalDone = () => {
      this.setState({ isOpenTodo: true })
    }
    const handleInput = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
    console.log(state.button);
    const save = (e) => {
      e.preventDefault();
      if (this.props.todos.find((todo) => todo.todo === this.state.todo)) {
        this.setState({ isExist: true });
      } else {
        if(state.button) {
          
          closeModalDone()
          this.props.getValues(this.state);
          this.props.closeModal();
          this.setState({ todo: "", time: "" });
          this.setState({ isExist: false });
          console.log("q",state.isOpenTodo);
        } 
        else {
          closeModalDone()
          console.log("1",state.isOpenTodo);
          const change = this.props.todos.find(
            (item) => item.todo == this.state.todoValue,
          )
          change.todo = this.state.todo
          change.time = this.state.time
          // closeModal();  
          this.setState({ todo: "", time: "" });
        }
        // e.preventDefault()
       
        
        }
      
    };
    const forEdit = (e) => {
      
      e.preventDefault()
      const change = this.props.todos.find(
        (item) => item.todo == this.state.todoValue,
      )
      change.todo = this.state.todo
      change.time = this.state.time
      closeModalDone();
      this.setState({ todo: "", time: "" });


    }
 const editTodo = (todo) => {
  this.props.openModal()

        this.setState({ todoValue: todo.todo })
        const change = this.props.todos.find(
          (item) => item.todo == this.state.todoValue,
        )
        this.setState({ todo: todo.todo, time: todo.time})
      }

    return (
      <div>
        <div className="d-flex justify-content-between">
          <h3>All Todos</h3>
          <Button onClick={() => {this.props.openModal();this.setState({ todo: '', time: ''}); this.setState({button: true})}} color="success">
            Add
          </Button>
        </div>
        <Table>
          <thead>
            <tr>
              <th>No</th>
              <th>Todo Name</th>
              <th>Interval Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.todos.map((todo, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{todo.todo}</td>
                <td>{todo.time}</td>
                <td>
                <Button color="danger" className="ml-20" onClick={() =>  this.props.deleted(todo)}>Delete</Button>
                  <Button color="secondary" className="ml-20" onClick={() => this.props.deletedTodo(todo)}>Deleted</Button>
                  <Button color="primary" className="ml-20" onClick={() => { editTodo(todo); this.setState({button: false}) }}>
                    Edit
                  </Button>
                  <Button color="success" className="ml-20" onClick={() => this.props.doneTodo(todo)}>Done</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal toggle={this.props.closeModal} isOpen={this.props.isOpen}>
          <Form onSubmit={save}>
            <ModalHeader toggle={this.props.closeModal}>
              Adding ToDo
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="todo">Enter todo name</Label>
                <Input
                  value={state.todo}
                  name="todo"
                  onChange={handleInput}
                  placeholder="Enter todo"
                  id="todo"
                  invalid={state.isExist}
                />
                <FormFeedback>This todo exists !</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="time">Enter interval of time</Label>
                <Input
                  value={state.time}
                  name="time"
                  onChange={handleInput}
                  placeholder="19:00 - 20:00"
                  id="time"
                />
                <FormFeedback>You will not be able to see this</FormFeedback>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.props.closeModal}>
                Close
              </Button>
              { !state.button ?
                <Button color="success" type="submit" onClick={this.props.closeModal}>
                Save
              </Button>:<Button color="success" type="submit" >
              Add
              </Button>
              }
            </ModalFooter>
          </Form>
        </Modal>
       
      </div>
    );
  }
}

export default HomeP;
