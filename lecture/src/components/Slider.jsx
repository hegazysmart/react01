// import SliderItem from "./SliderItem";
import Carousel from "react-bootstrap/Carousel";

const Slider = ({ sliders }) => {
  return (
    <Carousel>
      {sliders
        ? sliders.map((slider, i) => {
            return <Carousel.Item>
            <img className="d-block w-100" src={slider.img} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>;
          })
        : 
        <p>
            There is no list to render
        </p>}
    </Carousel>
  );
};

export default Slider;
