import classes from './App.module.css'; 

import Layout from './components/Layout';
import Question from './components/Card';

function App() {
  return (
    <div className={classes.main_container}>
      <Layout />
    </div>
  );
}

export default App;
