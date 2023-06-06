import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



import img1 from '../../../assets/chhola.jpg'                
import img2 from '../../../assets/dosa.jpg'                
import img3 from '../../../assets/gujrati.jpeg'                 
import img4 from '../../../assets/idli.jpg'                 
import img5 from '../../../assets/masala.jpg'                 
import img6 from '../../../assets/paneer.jpg'                 

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} alt="" />
                <h3>img 1</h3>
            </div>
            <div>
                <img src={img2} alt="" />
                <h3>img 1</h3>
            </div>
            <div>
                <img src={img3} alt="" />
                <h3>img 1</h3>
            </div>
            <div>
                <img src={img4} alt="" />
                <h3>img 1</h3>
            </div>
            <div>
                <img src={img5} alt="" />
                <h3>img 1</h3>
            </div>
            <div>
                <img src={img6} alt="" />
                <h3>img 1</h3>
            </div>

        </Carousel>
    );
};

export default Banner;