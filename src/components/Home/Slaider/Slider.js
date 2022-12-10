import React from 'react';
import BannerItems from './BannerItems';
import image1 from '../../../assisset/images/banner/1.png'
const BannerData =[
    {
        image: image1,
        
    },
    
   
]
const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">

                {
                    BannerData.map(slide => <BannerItems
                        key={slide.id}
                        slide={slide}
                    ></BannerItems>)
                }


            </div>
        </div>
    );
};

export default Slider;