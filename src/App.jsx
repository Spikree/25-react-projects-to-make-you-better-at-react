import Accordian from "./components/accordian/index";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image slider";

function App() {
  return (
    <>
      {/* Accordian component */}

      {/* <Accordian /> */}

      {/* Random color generator */}

      {/* <RandomColor /> */}

      {/* star rating */}

      {/* <StarRating numberOfStars={10}/> */}

      {/* image slider */}

      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"4"}
        page={"1"}
      />
    </>
  );
}

export default App;
