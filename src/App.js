import axios from "axios";
import Navigation from "./components/routing/Navigation";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const apiCall = async () => {
    const response = await axios.get("/milk/user/");
    console.log(response.data);
  };
  apiCall();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
