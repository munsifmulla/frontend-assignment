import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import ListingPage from "./components/pages/listingPage";
import axios from "axios";
import animall from "./theme";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function renderElements() {
      axios
        .get("https://animall-backend-assesment.herokuapp.com/data")
        .then(res => {
          console.log(typeof res.data.data[0].animalType);
          const newData = res.data.data;
          setData(newData);
          setLoading(false);
        });
    }
    renderElements();
  }, []);

  if (loading) return <h3 className="loader"> Initializing App....</h3>;

  return (
    <ThemeProvider theme={animall}>
      <div className="App">
        <Router>
          <Suspense fallback={<h3>Loading...</h3>}>
            <Routes>
              <Route exact path="/" element={<ListingPage data={data} />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
