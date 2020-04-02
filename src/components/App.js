import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getUserRequest, createUserRequest, deleteUserRequest, userError} from '../actions/users';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';
import {Toast, ToastBody, ToastHeader} from 'reactstrap';

class App extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount = () => {
    this.props.getUserRequest();
  }

  handleSubmit = ({firstName, lastName}) => {
    this.props.createUserRequest({firstName, lastName})
  }
  
  handleDeleteUserClick = (userId) => {
    this.props.deleteUserRequest(userId);
  }

  closeAlert = () => {
    this.props.userError({
      error: ''
    })
  }

  render(){
    return (
      <div className="App">
        <Toast isOpen={!!this.props.users.error}>
          <ToastHeader icon="primary" toggle={this.closeAlert}>
            Error
            </ToastHeader>
            <ToastBody>
              {this.props.users.error}
            </ToastBody>
          </Toast>
        <NewUserForm onSubmit={this.handleSubmit}/>
        <UsersList users={this.props.users.users} onDeleteUser={this.handleDeleteUserClick}/>
      </div>
    );
  }
}

export default connect(({users}) => ({users}), {
  getUserRequest,
  createUserRequest,
  deleteUserRequest,
  userError
})(App);
