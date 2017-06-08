import React from 'react';

const Gif = props => (
  <div>
    <img src={props.url} alt={props.source}/>
  </div>
);

export default Gif;
