//import { Router } from 'react-router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <main>
      <section>
        <Router path="/">
          <div>
            post
          </div>
        </Router>
      </section>
    </main>
  );
}

export default App;
