import './Main.css';
import React from 'react';
import Header from './Header';




const Principal = (props) => {
  return (
    <React.Fragment>
      <Header {...props} />
      <main className="content container-fluid">
        <div className="p-3 mt-4">
          {props.children}
        </div>
      </main>
    </React.Fragment> 
  );
};

export default Principal;
