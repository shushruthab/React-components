
import './App.css';
import EightBall from './EightBall';
import question from './question';
import answers from './answers';

function App() {
  return (
    <>
      <EightBall question={question} answers={answers}/>
    </>
  );
}

export default App;
