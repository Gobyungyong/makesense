import { BrowserRouter,Routes,Route } from "react-router-dom";

import classes from './App.module.css'; 
import TestPage from './page/TestPage';
import StartPage from "./page/StartPage";
import ResultPage from "./page/ResultPage";
import DashBoardPage from "./page/DashBoardPage";

function App() {
  return (
    <BrowserRouter>    
      <div className={classes.main_container}>
          <Routes>
            <Route index element={<StartPage/>} />
            <Route path="/test" element={<TestPage/>} />
            <Route path="/result/:mbti" element={<ResultPage/>} />
            <Route path="/monnani/dashboard/" element={<DashBoardPage/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;