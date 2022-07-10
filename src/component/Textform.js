
import React, { useState } from 'react'

export default function Textform(props) {
  const UpperCase = () => {
    // console.log('upper hitted')
    let newText = Text.toUpperCase();
    setText(newText);
    props.showalert("converted to upper case", "success");
  }
  const lowercase = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showalert("converted to Lowercase", "success");

  }
  const Clear = () => {
    let newText = '';
    setText(newText);
    props.showalert("text cleared", "success");

  }
  const handleCopy = () => {
    var text = document.getElementById("Textform");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Copyed on clipboard", "success");

  }
  const RemoveExtraaSpaces = () => {
    let newtext = Text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showalert("Removed extra spaces", "success");



  }

  const OnChange = (event) => {
    setText(event.target.value);
  }

  const [Text, setText] = useState('');
  return (
    <>
      <div className='container  text-black text-opacity-75'  >

        <h1 >{props.heading}</h1>

        <div className="mb-3">
          <textarea className="form-control" value={Text} onChange={OnChange} style={{ backgroundColor: props.mode === 'dark' ? '#121212' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="Textform" rows="8"></textarea>
          <button className='btn btn-primary my-3 mx-2' onClick={UpperCase}>Convert to Uppercase</button>
          <button className='btn btn-primary my-3 mx-2' onClick={lowercase}>Convert to Lowercase</button>
          <button className='btn btn-primary my-3 mx-2' onClick={handleCopy}>copy</button>
          <button className='btn btn-primary my-3 mx-2' onClick={Clear}>Clear</button>
          <button className='btn btn-primary my-3 mx-2' onClick={RemoveExtraaSpaces}>Remove Extraa Spaces</button>



        </div>
      </div>
      <div className='container text-black text-opacity-75' >
        <h1>Text-Summary</h1>
        <div className='container text-opacity-50'  >
          <p class="card-body d-flex"  >
            <p className='container ' ><strong>Word :  </strong>{Text.split(" ").length - 1}</p>
            <p className='container' ><strong>Charater: </strong> {Text.length}</p>
            <p className='container' ><strong>Reading time : </strong>{0.008 * Text.split(" ").length}</p>




          </p>
        </div>
        <h2>Preview</h2>
        <p  >{Text.length > 0 ? Text : 'Enter your text here to preview'}</p>
      </div>
    </>
  )
}
