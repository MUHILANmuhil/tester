import './App.css';
import ME from './component/Itsme'

function App() {
  return (
    <div className="App">
      <ME name={`${prompt("Enter YOur name:")}`}/>      
    </div>
  );
}

export default App;
