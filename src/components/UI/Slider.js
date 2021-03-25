import React,{useState} from 'react'
import { SliderData } from './SliderImageData'
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'

const Slider =({slides})=> {
    const [current,setCurrent]= useState(0)
    const length= slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
    
      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      };

      
    


    return(
        
        <section className='slider'>
         <div className='overlay'></div>   
         < RiArrowRightSLine className='left-arrow' onClick={prevSlide} />
         < RiArrowLeftSLine className='right-arrow' onClick={nextSlide} />

            {SliderData.map((slide,index)=>{
                return (

                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                      {index === current && (<img src={slide.image} alt='space' className='image' />)}
                    </div>



                );

            

            })}



        </section>


        ); 

};


        

export default Slider;
