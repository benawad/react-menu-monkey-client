import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react'
import { browserHistory } from 'react-router';

class AddRecipe extends Component {

  constructor(props) {
    super(props);
    this.state = {nameError: false, error: false, name: '', ingredients: '', description: ''};
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
  }

  componentWillUpdate(nextProps){
    if (nextProps && nextProps.succAddRecipe) {
      nextProps.finishAddRecipe();
      this.props.recentRecipes();
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
    const name = this.state.name.trim();
    if (name === '') { 
      this.setState({nameError: true, error: true});
    } else if (this.state.imagePreviewUrl === undefined) {
      this.setState({error: true});
    } else {
      this.props.addRecipe(
        name,
        this.state.description,
        this.state.ingredients.split('\n'),
        this.state.imagePreviewUrl
      );
    }
    e.preventDefault();
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  handleIngredientChange(e) {
    this.setState({ ingredients: e.target.value });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} error={this.state.error}>
        <Form.Field error={this.state.nameError} >
          <label>Recipe Name</label>
          <input value={this.state.name} name='name' onChange={(e) => this.setState({name: e.target.value})} placeholder='Recipe Name' />
        </Form.Field>
        <Form.Field>
          <label>Recipe Image</label>
          <input name='image' type='file' onChange={this.handleImageChange} />
        </Form.Field>
        <Form.Field>
          <label>Ingredients (one per line)</label>
          <Form.TextArea value={this.state.ingredients} name='ingredients' onChange={this.handleIngredientChange} placeholder='Ingredients...' />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <Form.TextArea value={this.state.ingredients} name='description' onChange={this.handleDescriptionChange} placeholder='Description...' />
        </Form.Field>
        <Message
          error
          header='Error'
          content='Recipe name and image is required'
        />
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }
}

export default AddRecipe;
