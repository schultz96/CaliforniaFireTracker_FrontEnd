import React, { useState } from 'react';
import { List } from './Components/List/List';
import { Weather } from './Components/Weather/Weather';
import './App.css';

const App = () => {
  const [ form, setForm ] = useState({
    firstName: '',
    lastName: ''
  });

  const [ names, setNames ] = useState([]);

  const formFieldChanged = (fieldName, value) => {
    setForm({
      ...form,
      [fieldName]: value
    });
  };

  const addName = () => {
    setNames([
      ...names,
      form.firstName + ' ' + form.lastName
    ]);
    setForm({
      firstName: '',
      lastName: ''
    });
  };

  console.log(form);

  return (
    <div className="App">
      <input
        placeholder="First Name"
        value={form.firstName}
        onChange={e => formFieldChanged('firstName', e.target.value)}
      />
      <input
      value={form.lastName}
        placeholder="Last Name"
        onChange={e => formFieldChanged('lastName', e.target.value)}
      />
      <br/>
      <button
        onClick={addName}
      >Add to list</button>
      <br/>
      <List
        items={names}
      />
      <br/>
      <Weather/>
    </div>
  );
}

export default App;
