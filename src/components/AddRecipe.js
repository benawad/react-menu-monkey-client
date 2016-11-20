import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { browserHistory } from 'react-router';

class AddRecipe extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStepChange = this.handleStepChange.bind(this);
  }

  componentWillUpdate(nextProps){
    if (nextProps && nextProps.succAddRecipe) {
      nextProps.finishAddRecipe();
      browserHistory.push('');
    }
  }


  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  handleSubmit(e) {
    this.props.addRecipe(
      this.state.rname,
      this.state.steps.split('\n'),
      this.state.imagePreviewUrl
    );
    e.preventDefault();
  }

  handleStepChange(e) {
    this.setState({ steps: e.target.value });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} >
        <Form.Field>
          <label>Recipe Name</label>
          <input name='rname' onChange={(e) => this.setState({rname: e.target.value})} placeholder='Recipe Name' />
        </Form.Field>
        <Form.Field>
          <label>Recipe Image</label>
          <input name='rimage' type='file' onChange={this.handleImageChange} />
        </Form.Field>
        <Form.Field>
          <label>Steps</label>
          <Form.TextArea name='steps' onChange={this.handleStepChange} placeholder='Steps...' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }
}

export default AddRecipe;
