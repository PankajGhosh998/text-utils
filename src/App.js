import './App.css';
import Navbar from './components/Navbar'
import Textarea from './components/Textarea'

function App() {
  return (
    <div>
      <Navbar brandName = 'TextUtils'/>
      <Textarea heading = 'Text analyzer'/>
    </div>
  );
}

export default App;
