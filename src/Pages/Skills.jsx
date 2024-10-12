import React from 'react'
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 7,
        autoplay: true,
        speed: 7000,
        autoplaySpeed: 0,
        cssEase: "linear",
        // nextArrow: <SampleNextArrow />
    };

  

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "red" }}
                onClick={onClick}
            />
        );
    }

    return (
        <div>
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        skills.map(skill => (
                            <div>
                                <h3>1</h3>
                                <div className='bg-violet-700/25'>
                                    {skill}
                                </div>
                            </div>
                        ))
                    }

                </Slider>
            </div>
        </div>
    )
}

export default Skills
