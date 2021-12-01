import './App.css';
import ComponentInputAge from './components/ComponentInputAge';
import ComponentInputName from './components/ComponentInputName';
import ComponentView from './components/ComponentView';

function App() {
  return (
    <div className="App">
        <ComponentInputName/>
        <ComponentInputAge/>
        <ComponentView/>
    </div>
  );
}

export default App;
