import React from 'react';

//export default
/*
class Header extends React.Component{
        render(){
          return(
                  <p>I Have {this.props.number} items</p>
          );
        }
}
*/

// functional Component

const Header =  ({number}) => {
          return(
                  <p >You have {number} tasks.</p>
          );
}

export default Header;
