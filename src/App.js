import './App.css';
import Navbar from './components/Navbar'
import Textarea from './components/Textarea'

function App() {
  return (
    <div>
      <Navbar brandName = 'TextUtils'/>
      <div className="container my-3">
        <Textarea heading = 'Text analyzer'/>
      </div>
    </div>
  );
}

export default App;
