import './App.css';
import LeftSearch from './components/LeftSearchComponent';
import RightDisplayComponent from './components/RightDisplayComponent';

function App() {
  return (
    <div className="App row">
      <div className="title">
        <h2>Flight Search App</h2>
      </div>
      <div className="body-wrapper row">
        <div className="outer-left-wrapper col-md-3">
            <LeftSearch/>
        </div>
        <div className="col-md-9">
          <RightDisplayComponent/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
