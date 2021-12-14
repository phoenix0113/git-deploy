import React, { useState, useEffect } from "react";
import Header from "components/Header";
import Carousel from "components/Carousel";
import Masonry from "components/Masonry";
import Footer from "components/Footer";
import { API_URL } from "utils/constants";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [imageWidth, setImageWidth] = useState("50%");
  const [slideTexts, setSlideTexts] = useState<any>({});
  const [slideImages, setSlideImages] = useState<Array<any>>([]);
  const [masonry, setMasonry] = useState<Array<any>>([]);
  const [email, setEmail] = useState("");

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(API_URL, {
      method: "GET",
    });

    const jsonData = await response.json();

    setSlideTexts(jsonData.hero_text);
    setSlideImages(jsonData.hero_slides);
    const cards = jsonData.cards.sort((one: any, two: any) =>
      Date.parse(one.date) > Date.parse(two.date) ? -1 : 1
    );
    setMasonry(cards);
    setLoading(false);
  };

  const fetchNewletterData = async (email: string) => {
    setLoading(true);
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({ email: email }),
    });

    const jsonData = await response.json();

    console.log(jsonData);

    if (jsonData.success) {
      alert("Email submission successful!");
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();

    const updateWindowDimensions = () => {
      if (window.innerWidth > 1440) {
        setImageWidth("33%");
      } else if (window.innerWidth < 1440 && window.innerWidth > 480) {
        setImageWidth("50%");
      } else if (window.innerWidth < 480) {
        setImageWidth("100%");
      }
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  useEffect(() => {
    if (email !== "") {
      fetchNewletterData(email);
    }
  }, [email]);

  return (
    <div className="App">
      {isLoading ? (
        <div className="full-content">
          <Spinner animation="border" variant="info" />
        </div>
      ) : (
        <>
          <Header />
          <Carousel text={slideTexts} images={slideImages} />
          <Masonry cards={masonry} width={imageWidth} />
          <Footer onChangeEmail={setEmail} />
        </>
      )}
    </div>
  );
}

export default App;
