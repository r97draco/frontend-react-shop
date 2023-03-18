import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import Item from "./components/Item";
import Sidecard from "./components/Sidecard";

const API_URL =
  "https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6";

function App() {
  const [appState, setAppState] = useState({
    loaded: false,
  });

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        const raw_data = res.data;
        setAppState({ loaded: true, api_data: raw_data });
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
  }, [setAppState]);

  return (
    <section className="bg-slate-50 body-font ">
      <Navbar />
      {!appState.loaded && (
        <div className="px-5 py-12 mx-auto text-2xl text-gray-600">
          Please wait until the data is fetched!
        </div>
      )}
      <div className="flex flex-col lg:flex-row">
        <div className="container flex px-5 py-12 mx-auto md:w-1/2">
          {appState.loaded && (
            <Sidecard
              imageURL={appState.api_data.data.products[0].imageURLs[0]}
            />
          )}
        </div>

        <div className="container flex flex-wrap justify-center px-5 py-12 mx-auto">
          {appState.loaded &&
            appState.api_data.data.products.map((product, idx) => (
              <Item
                key={idx}
                _id={product._id}
                imageURL={product.imageURLs[1]}
                fulhausProductName={product.fulhausProductName}
                rentalPrice={product.rentalPrice}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default App;
