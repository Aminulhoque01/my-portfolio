import jsPDF from 'jspdf';
import React from 'react';
import { Link } from 'react-router-dom';
import './BannerItems.css';

const BannerItems = ({ slide }) => {
    const { image, id, prev, next } = slide;

    const handlerPdf =()=>{
        const doc=jsPDF('landscape', 'px','a4', 'false');
            doc.text('', 60,60);
           
           
           
        
            doc.save('a.pdf');
    

        
    }
    return (
        <div className="carousel-item relative w-full  justify-end sm:justify-end">
            <div className='carousel-img '>
                <img src={image} alt='' className="w-full " />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/3 left-24 top-1/4 sm:top-1/4">
                <h1 className='text-6xl font-bold text-white'>
                    Hi <br /> <p className='text-4xl'> I'M AMINUL HAQUE<br />
                        Web Developer</p>
                 </h1>

            </div>



            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-3/4 w-2/7 pt-10 ">
                <button onClick={handlerPdf} className="btn btn-outline btn-warning mr-3"><a href="https://drive.google.com/file/d/13s69e2udG_YCkm5T2LoFWN3hDUUwUkDr/view" target="_blank">Download Resume</a></button>

            </div>


        </div>
    );
};

export default BannerItems;