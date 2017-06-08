import React from 'react';


const p_styling = {
  display :'inline',
};

const p_done_styling = {
  display :'inline',
  textDecoration : 'line-through',
};

export default
class TasksBoard extends React.Component{
      render(){
        const items = this.props.items.map((elem,idx) => {
          const checkfunc = (data) => {
            console.log(data)
            if (data.done === 'false') {
              return <p style={p_styling}>{data.data.name}</p>
            }else {
              return <p style={p_done_styling}>{data.data.name}</p>
            }
          }

          return (
            <div key = {idx}>
              <input id = {idx}
                type="checkbox"
                value= {elem.data.name}
                onChange = {this.props.checkOnChangeHandler}
                />

            {checkfunc(elem)}

              <input
                type="button"
                value="Delete"
                onClick={this.props.deleteHandler} id={idx}
                />
            </div>
            );
          })

        return(
          <div>
            {items}
          </div>
        )
      }
}
