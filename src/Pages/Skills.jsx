import React from 'react'
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import graph6 from '/images/graph6.png';


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
        <div className='font-serif relative'>

            <div className='flex items-center gap-5 lg:mx-10'>
                <div className='h-1 mt-2 rounded-full bg-violet-700 w-full'></div>
                <div className='text-4xl font-bold text-right'>SKILLS</div>
            </div>
            <div className='flex justify-center bg-gradient-to-b  from-violet-700/20 py-5 mt-10 px-6 border-violet-600 border-t-2 rounded-t-3xl'>

            </div>

            <div className='absolute rellax left-1/2 -bottom-8 opacity-45' data-rellax-speed="1" data-rellax-zindex="5">
                <img className="w-96" src={graph6} alt="" />
            </div>

            <div className="mx-auto max-w-5xl py-10 px-6">
                <div className="flex justify-center flex-wrap gap-10">
                    {/* Frontend Skills */}
                    <div className="flex justify-center flex-col hvr-bob items-center gap-5 bg-violet-700/10 py-8 px-6 rounded-xl border border-violet-600 w-72">
                        <div className="text-2xl font-bold">🖥️ Frontend</div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600 hvr-pulse">HTML5</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600 hvr-pulse">CSS3</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600 hvr-pulse">JavaScript</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600 hvr-pulse">React.js</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600 hvr-pulse">Tailwind CSS</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600 hvr-pulse">Next.js</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600 hvr-pulse">TypeScript</p>
                        </div>
                    </div>

                    {/* Backend Skills */}
                    <div className="flex justify-center flex-col hvr-bob items-center gap-5 bg-violet-700/10 py-8 px-6 rounded-xl border border-violet-600 w-72">
                        <div className="text-2xl font-bold">🛠️ Backend</div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600 hvr-pulse">Node.js</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600 hvr-pulse">Express.js</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600 hvr-pulse">Rest APIs</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600 hvr-pulse">security</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600 hvr-pulse">JWT Authentication</p>
                        </div>
                    </div>

                    {/* Database Skills */}
                    <div className="flex justify-center flex-col hvr-bob items-center gap-5 bg-violet-700/10 py-8 px-6 rounded-xl border border-violet-600 w-72">
                        <div className="text-2xl font-bold">🗃️ Database</div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600 hvr-pulse">MongoDB</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600 hvr-pulse">NoSQL</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600 hvr-pulse">Db Conections</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600 hvr-pulse">Crud Oparations</p>
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="flex justify-center flex-col hvr-bob items-center gap-5 bg-violet-700/10 py-8 px-6 rounded-xl border border-violet-600 w-72">
                        <div className="text-2xl font-bold">⚙️ Tools</div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600 hvr-pulse">Git & GitHub</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600 hvr-pulse">VSCode</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600 hvr-pulse">Postman</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600 hvr-pulse">Figma</p>
                        </div>
                    </div>

                    {/* Familiar Technologies Section */}
                    <div className="flex justify-center flex-col hvr-bob items-center gap-5 bg-violet-700/10 py-8 px-6 rounded-xl border border-violet-600 w-72">
                        <div className="text-2xl font-bold text-center">🌟 Familiar Technologies</div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600 hvr-pulse">Familiar with</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600 hvr-pulse">Next.js</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600 hvr-pulse">TypeScript</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="slider-container">
                <Slider {...settings}>
                    {/* {
                        skills.map(skill => (
                            <div>
                                <h3>1</h3>
                                <div className='bg-violet-700/25'>
                                </div>
                            </div>
                        ))
                    } */}

                </Slider>
            </div>
        </div>
    )
}

export default Skills
