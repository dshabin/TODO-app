import React from 'react';


const buttom_styling ={
  backgroundColor: '#4CAF50', /* Green */
  border: 'none',
  color: 'white',
  textAlign: 'center',
}
const input_styling ={
  fontSize : '24px',
  fontStyle: 'italic',
  height : '50px',
  width : '250px',
  border: 'none',
  boxShadow: '0 8px 6px -6px gray',
}



export default
class AddTask extends React.Component {
  constructor(){
    super();
    this.state = {
      text: ""
    }
  }
  changeHandler = (evn) => {
    this.setState({
      text: evn.target.value
    });
  }
  clickHandler = () => {
    const {text} = this.state;
    const name = text;
    const data = {
      name
    }
    this.setState({
      text: ""
    });
    this.props.addItemFunc(data);
  }
  render(){
    return(
      <div>
        <input style={input_styling}
          placeholder="What is your task ?"
          type="text"
          value={this.state.text}
          onChange={this.changeHandler}
        />
        <input style = {buttom_styling}
          type="button"
          value="Add"
          onClick={this.clickHandler}
        />
      </div>
    )
  }
}
