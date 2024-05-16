import './App.css';
import home from './components/home/home';
import db from './data/db.json'
function App() {
  return (
    <div className="App">
     <home data={db}/>           {/* passing the data as props to Home*/}
    </div>
  );
}

export default App;