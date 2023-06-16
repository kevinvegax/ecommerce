import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'

const Slider = () => {

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
      <div className="abcd">
        <img src={data[0]} alt=""/>
      </div>
      <div>
        <img src={data[1]} alt="" />
      </div>
      <div>
        <img src={data[2]} alt="" />
      </div>
    </Carousel>
  );
};

export default Slider;
