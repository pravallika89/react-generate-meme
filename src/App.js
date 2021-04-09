import Meme from './components/Meme';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      {/* Heading with text */}
      <div className='row text-center'>
        <div className='col'>
          <h1>Make Generate Meme! So cool</h1>
        </div>
      </div>
      {/* section for my meme component */}
      <Meme />
    </div>
  );
};

export default App;