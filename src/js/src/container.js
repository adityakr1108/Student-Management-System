import React from 'react';
const Container = props => {
     return (
       <div style = {{width : '1400px', margin : '0 auto', alignItems : 'center', textAlign : 'center'}}>
          {props.children}
       </div>
     );
};
export default Container;