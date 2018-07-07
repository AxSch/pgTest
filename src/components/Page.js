import React, { Component } from 'react';
import Content from './Content';
import Sidebar from './Sidebar';
import '../scss/Page.scss';

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
        <div className="page__content">
          {Content(listObj)}
        </div>
        {Sidebar()}
      </div>
    );
  }
}

export default Page;