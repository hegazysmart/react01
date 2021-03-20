import Carousel from "react-bootstrap/Carousel";

const SliderItem = ({ img }) => {
  return (
    <Carousel.Item>
      <img className="d-block w-100" src={img} alt="First slide" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
};

export default SliderItem;
