import logo from './logo.svg';
import './App.css';

import TextInput from './components/TextInput';
import WeatherAndDate from './components/WeatherAndDate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WeatherAndDate />
        <TextInput />
      </header>
    </div>
  );
}

export default App;
