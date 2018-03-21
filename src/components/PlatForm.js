import React, { Component } from 'react';
import Books from './Books';
import {FormGroup, FormControl,InputGroup, Glyphicon } from 'react-bootstrap';

class PlatForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      query:'',
      items:[]
    }
  }
  search(){
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    fetch(`${BASE_URL}${this.state.query}`, {method:'GET'})
    .then(response => response.json()).then(json =>{
      let {items}= json;
      this.setState({items})
    });
  }

  render(){
    return(
      <div className="Platform">
        <h2>Books Explorer!</h2>
        <form>
          <FormGroup>
            <InputGroup>
              <FormControl type="text" placeholder="Enter a book title"
                onChange={event=> this.setState({query:event.target.value})}
                onKeyPress= { event => {
                  if(event.key==='Enter'){
                    this.search();
                    event.preventDefault();
                  }
                }} />
              <InputGroup.Addon onclick={()=> this.search()}>
                <Glyphicon glyph='search'/>
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
        </form>
          <Books items={this.state.items}/>
      </div>
    );
  }
}
export default PlatForm;