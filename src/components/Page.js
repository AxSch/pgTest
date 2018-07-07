import React, { Component } from 'react';
import Content from './Content';
import Sidebar from './Sidebar';

class Page extends Component {
  render() {
    const listObj = [
      {
        obj: 1,
      },
      {
        obj: 2,
      },
      {
        obj: 3,
      },
      {
        obj: 4,
      },
    ];
    return (
      <div className="page__wrapper" >
        <h1>Hello</h1>
        {Content(listObj)}
        {Sidebar()}
      </div>
    );
  }
}

export default Page;