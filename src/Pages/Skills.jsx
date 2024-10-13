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
        <div className='font-serif'>

            <div className='flex items-center gap-5 mx-10'>
                <div className='h-1 mt-2 rounded-full bg-violet-700 w-full'></div>
                <div className='text-4xl font-bold text-right font-["Yeseva One", "serif"]'>SKILLS</div>
            </div>

            <div className="mx-auto max-w-5xl py-10 px-6">
                <div className="flex justify-center flex-wrap gap-10">
                    {/* Frontend Skills */}
                    <div className="flex justify-center flex-col items-center gap-5 bg-violet-700/10 py-8 px-6 rounded-xl border border-violet-600 w-72">
                        <div className="text-2xl font-bold">🖥️ Frontend</div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600">HTML5</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600">CSS3</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600">JavaScript</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600">React.js</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600">Tailwind CSS</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600">Next.js</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600">TypeScript</p>
                        </div>
                    </div>

                    {/* Backend Skills */}
                    <div className="flex justify-center flex-col items-center gap-5 bg-violet-700/10 py-8 px-6 rounded-xl border border-violet-600 w-72">
                        <div className="text-2xl font-bold">🛠️ Backend</div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600">Node.js</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600">Express.js</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600">Rest APIs</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600">security</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600">JWT Authentication</p>
                        </div>
                    </div>

                    {/* Database Skills */}
                    <div className="flex justify-center flex-col items-center gap-5 bg-violet-700/10 py-8 px-6 rounded-xl border border-violet-600 w-72">
                        <div className="text-2xl font-bold">🗃️ Database</div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600">MongoDB</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600">NoSQL</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600">Db Conections</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600">Crud Oparations</p>
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="flex justify-center flex-col items-center gap-5 bg-violet-700/10 py-8 px-6 rounded-xl border border-violet-600 w-72">
                        <div className="text-2xl font-bold">⚙️ Tools</div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600">Git & GitHub</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600">VSCode</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600">Postman</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600">Figma</p>
                        </div>
                    </div>

                    {/* Familiar Technologies Section */}
                    <div className="flex justify-center flex-col items-center gap-5 bg-violet-700/10 py-8 px-6 rounded-xl border border-violet-600 w-72">
                        <div className="text-2xl font-bold text-center">🌟 Familiar Technologies</div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600">Familiar with</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600">Next.js</p>
                            <p className="px-4 py-1 rounded-full bg-violet-700/10 border border-violet-600">TypeScript</p>
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
