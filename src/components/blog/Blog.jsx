import React from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { images } from '../../constants';
import './blog.css';

const Blog = () => {

    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
        current.scrollLeft -= 300;
        } else {
        current.scrollLeft += 300;
        }
    };

    return (
        <div className="app__gallery flex__center bg-gray-800" id='blog'>
          <div className="app__gallery-content">
            <h1 className="headtext__cormorant text-white font-mono">THE MTE BLOG</h1>
            <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu Lorem ipsum dolor sit amet, c
                onsectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
            <a href="#blog"><button type="button" className="border-2 border-white py-3 px-8 text-white hover:text-black hover:bg-white">View More</button></a>
            
          </div>
          <div className="app__gallery-images">
            <div className="app__gallery-images_container" ref={scrollRef}>
              {[images.car1, images.car2, images.car3, images.car4, images.car5, images.car6, images.car7, images.car8].map((image, index) => (
                <div className="app__gallery-images_card flex__center" key={`car_image-${index + 1}`}>
                  <img src={image} alt="gallery_image" />
                  <p className='absolute bottom-10 right-10 text-black bg-white px-6 py-3 rounded-lg font-bold'>Read more</p>
                  
                </div>
              ))}
            </div>
            <div className="app__gallery-images_arrows">
              <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
              <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
            </div>
          </div>
        </div>
      );
}

export default Blog