import React, { Component } from 'react';
import Content from './Content';

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
      </div>
    );
  }
}

export default Page;