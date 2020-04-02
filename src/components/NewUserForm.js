import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

export default class NewUserForm extends Component {
    state={
        firstName: '',
        lastName: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            firstName: this.state.firstName,
            lastName: this.state.lastName
        });
        this.setState({
            firstName: '',
            lastName: ''
        })
    }
    onFirstNameChangeHandler= (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    onLastNameChangeHandler= (e) => {
        this.setState({
            lastName: e.target.value
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>
                        First Name
                    </Label>
                    <Input required onChange={this.onFirstNameChangeHandler} value={this.state.firstName}></Input>
                </FormGroup>
                <FormGroup>
                    <Label>
                        Last Name
                    </Label>
                    <Input required onChange={this.onLastNameChangeHandler} value={this.state.lastName}></Input>
                </FormGroup>
                <FormGroup>
                    <Button block outline type="submit" color="primary">
                        Create
                    </Button>
                </FormGroup>
            </Form>
        )
    }
}
