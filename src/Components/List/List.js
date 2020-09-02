import React from 'react';

export const List = (props) => {
  return (
    <ul>
      {props.items.map((item, i) => (
        <li
          key={i}
        >{item}</li>
      ))}
    </ul>
  );
}