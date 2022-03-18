import React, { Component } from 'react';
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
} from 'reactstrap'

class TodosDeleted extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpenDone: false,
      todoValue: '',
      todo: '',
      time: '',
    }
  }
  render() {

    const state = this.state

    const closeModalDone = () => {
      this.setState({ isOpenDone: false })
    }
    const handleInputDone = (e) => {
      // console.log(e.target.value)
      this.setState({
        [e.target.name]: e.target.value,
      })
    }
    const save = (e) => {
      e.preventDefault()

      if (this.props.todosDeleted.find((todo) => todo.todo === this.state.todo)) {
        this.setState({ isExist: true })
      } else {
        closeModalDone()
        const change = this.props.todosDeleted.find(
          (item) => item.todo == this.state.todoValue,
        )
        change.todo = this.state.todo
        change.time = this.state.time
        this.setState({ isExist: false })
      }
    }
    const editTodo = (todo) => {
      this.setState({ isOpenDone: true })

      this.setState({ todoValue: todo.todo })
      this.props.todosDeleted.find(
        (item) => item.todo == this.state.todoValue)

       
      this.setState({ todo: todo.todo, time: todo.time })

    }
    console.log(this.props.todosDeleted.find(
      (item) => item.todo == this.state.todoValue));
    return (
      <div>
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
            {this.props.todosDeleted.map((todo, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{todo.todo}</td>
                <td>{todo.time}</td>
                <td>
                <Button color="danger" onClick={() =>  this.props.deletedTodoDeleted(todo)}>Delete</Button>
                  <Button color="primary" className="mx-2" onClick={() => editTodo(todo)}>
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal toggle={closeModalDone} isOpen={this.state.isOpenDone}>
          <Form onSubmit={save}>
            <ModalHeader toggle={closeModalDone}>Edit todo</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="todo">Enter todo name</Label>
                <Input
                  value={state.todo}
                  name="todo"
                  onChange={handleInputDone}
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
                  onChange={handleInputDone}
                  placeholder="19:00 - 20:00"
                  id="time"
                />
                <FormFeedback>You will not be able to see this</FormFeedback>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={closeModalDone}>
                Close
              </Button>
              <Button color="success" type="submit">
                Edit
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default TodosDeleted;