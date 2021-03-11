import logo from './logo.svg';
import './App.css';

import TextInput from './view/components/textInput.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div> <TextInput /> </div> */}
        <div id='keyBoard'>
          <div id='topRow'>
            <div id='KeyQ' className='key'> Q</div>
            <div id='KeyW' className='key'> W</div>
            <div id='KeyE' className='key'> E</div>
            <div id='KeyR' className='key'> R</div>
            <div id='KeyT' className='key'> T</div>
            <div id='KeyY' className='key'> Y</div>
            <div id='KeyU' className='key'> U</div>
            <div id='KeyI' className='key'> I</div>
            <div id='KeyO' className='key'> O</div>
            <div id='KeyP' className='key'> P</div>
          </div>
          <div id='midRow'>
            <div id='KeyA' className='key'> A</div>
            <div id='KeyS' className='key'> S</div>
            <div id='KeyD' className='key'> D</div>
            <div id='KeyF' className='key'> F</div>
            <div id='KeyG' className='key'> G</div>
            <div id='KeyH' className='key'> H</div>
            <div id='KeyJ' className='key'> J</div>
            <div id='KeyK' className='key'> K</div>
            <div id='KeyL' className='key'> L</div>
            <div id='Enter' className='key'> enter </div>
          </div>
          <div id="bottomRow">
            <div id='KeyZ' className='key'> Z</div>
            <div id='KeyX' className='key'> X</div>
            <div id='KeyC' className='key'> C</div>
            <div id='KeyV' className='key'> V</div>
            <div id='KeyB' className='key'> B</div>
            <div id='KeyN' className='key'> N</div>
            <div id='KeyM' className='key'> M</div>
          </div>
          
          <div id='Space' className='key'>-</div>
        </div>
        <div id="inputContainer"> <TextInput />
        </div>




      </header>


    </div>
  );
}

export default App;
