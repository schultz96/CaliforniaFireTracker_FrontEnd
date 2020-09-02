import React, {useState} from 'react';
import { 
  Link,
  useRouteMatch
 } from 'react-router-dom';

export const MenuItem = (props) => {
  const { path } = useRouteMatch();

  const parentExpanded = path.startsWith(props.relativeTo);

  const [ open, setOpen ] = useState(parentExpanded);

  const toggleOpen = () => {
    setOpen(!open);
  }

  return (
  <div className="menu-item">
    <h3
      onClick={toggleOpen}
    >
      {props.to ? (
        <Link to={props.to}>{props.title}</Link>
      ) : props.title}
    </h3>
    {props.children ? (
    <div className={
      `menu-item-children ${open ? 'menu-item-open' : ''}`
    }>
      {props.children}
    </div>
    ) : ''}
  </div>
  )
  
}