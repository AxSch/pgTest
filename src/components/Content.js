import React from 'react';
import '../scss/Content.scss';

const Content = (listOfObjects) => {
  return listOfObjects.map(item => {
    return (
          <div className="item__content">
            <img src="https://picsum.photos/288/198/?random" alt="random_image"/>
            <div className="item__paraGraphs">
            <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Donec gravida libero quis lorem facilisis porttitor. 
            Aenean sodales nulla enim. Nulla et felis leo. 
            Ut ullamcorper consectetur lacus ut dignissim. 
            Sed non tristique odio.
          </p>
          <p>
          Nullam et dolor a velit posuere dictum. 
            Vivamus gravida libero ac lorem varius, eu tincidunt nibh condimentum. 
            Morbi erat nibh, vehicula in condimentum et, finibus vel nisl. 
            Pellentesque lacus sem, venenatis sit amet urna sed, gravida laoreet nisi. 
            Integer dignissim, nisi at posuere commodo, massa mi suscipit justo, ut aliquam lacus diam dignissim leo. 
            In hac habitasse platea dictumst.
          </p>
            </div>
          </div>
    );
  })
}

export default Content;