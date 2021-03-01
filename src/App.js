import React, { useState } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

const App = () => {

  const [values, setValues] = useState({
    value: { text: '' }
  });

  const changeOfLengthHandler = (e) => {
    setValues({
      value: { text: e.target.value }
    })
  }

  const deleteCharactor = (index) => {
    const text = values.value.text.split('');
    text.splice(index, 1);
    const updateText = text.join('');
    setValues({
      value: { text: updateText }
    })
  }

  let char = null;
  if (values.value) {
    char = values.value.text.split('').map((ch, index) => {
      return <CharComponent
        key={index}
        character={ch}
        click={() => deleteCharactor(index)}
        />
    });
  }

  return (
    <div className="App">
      <input type='text' onChange={changeOfLengthHandler} value={values.value.text} />
      <ValidationComponent length={values.value.text.length} />
      <p>{values.value.text}</p>
      {char}

      {/* <li>1.Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
        <li>2.Create a new component (={'>'} ValidationComponent) which receives the text length as a prop</li>
        <li>3.Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
        <li>4.Create another component (={'>'} CharComponent) and style it as an inline box (={'>'} display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
        <li>5.Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
        <li>6.When you click a CharComponent, it should be removed from the entered text.</li>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p> */}
    </div>
  );
}

export default App;
