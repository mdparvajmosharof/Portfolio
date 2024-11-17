import React from 'react'
import pro1 from "/images/diagno-d.png"
import pro2 from "/images/alterno.jpeg"
import pro3 from "/images/rento.jpeg"
import pro4 from "/images/touro.jpeg"
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'

const Projects = () => {

    const project = [
        {
            id: 1,
            title: "Diagno",
            img: pro1,
            description: "This project serves as a comprehensive platform for managing diagnostic centers, enabling users to book tests, view results, and manage appointments. It features an intuitive user interface, robust backend support, and a secure database. Users can access their medical history and test results seamlessly, making healthcare management efficient and user-friendly.",
            link: "https://diagno-auth.web.app/",
            client: "https://github.com/mdparvajmosharof/Diagno",
            server: "https://github.com/mdparvajmosharof/diagno-server"
        },
        {
            id: 2,
            title: "Alterno",
            img: pro2,
            description: "Alterno is a tour-related application designed to showcase featured tours and experiences. The platform allows users to explore various destinations, view details, and book tours effortlessly. With its sleek design and responsive features, Alterno aims to enhance the travel planning experience, making it enjoyable and straightforward for users.",
            link: "https://alterno-auth.web.app/",
            client: "https://github.com/mdparvajmosharof/alterno",
            server: "https://github.com/mdparvajmosharof/alterno-server"
        },
        {
            id: 3,
            title: "Rento",
            img: pro3,
            description: "Rento is a rental platform that connects users with various rental services, including homes, vehicles, and equipment. It provides a user-friendly interface for searching and booking rentals. The project emphasizes secure transactions, real-time updates, and user feedback, ensuring a smooth experience for both renters and property owners.",
            link: "https://auth-rento.web.app/",
            client: "https://github.com/mdparvajmosharof/Rento"
        },
        {
            id: 4,
            title: "Touro",
            img: pro4,
            description: "Touro is a dynamic platform for exploring and booking various travel experiences. It focuses on providing users with detailed information about featured tours, destinations, and activities. The application enhances user engagement with visually appealing design and easy navigation, making travel planning more accessible and enjoyable.",
            link: "https://touro-f1537.web.app/",
            client: "https://github.com/mdparvajmosharof/touro"
        }
    ];


console.log(project[0].img)

    return (
        <div>

            <div className='flex items-center gap-5 '>
                <div className='h-1 mt-2 rounded-full bg-violet-700 w-full'></div>
                <div className='text-4xl font-bold text-right font-["Yeseva One", "serif"]'>Projects</div>
                <div className='h-1 mt-2 rounded-full bg-violet-700 w-full'></div>
            </div>

            <div className='space-y-10 lg:mx-10 mt-10 lg:mt-20'>
                {
                    project.map((proj, inx) => {

                        const isReverse = inx % 2 !== 0;

                        return (
                            <div key={proj.id}>

                                <div className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row '} items-center  font-serif gap-8`}>

                                    <figure
                                    style={{backgroundImage : `url(${proj?.img})`}} 
                                    className={`lg:w-1/2 w-full h-[300px] bg-cover  bg-top hover:bg-bottom transition-all ease-in-out  duration-[4s] rounded-xl hvr-grow border border-violet-600`}>
                                        {/* <img
                                            className='w-full'
                                            src={proj.img}
                                            alt="Album" /> */}
                                    </figure>

                                    <div className="card-body lg:w-1/2 lg:mx-0 text-center hvr-grow bg-violet-700/5 border border-dashed border-violet-500 rounded-md mx-10 w-full">
                                        <h2 className="text-2xl font-extrabold">{proj.title}</h2>
                                        <p className='text-sm text-pretty'>{proj.description}</p>
                                        <div className='flex flex-wrap justify-center mt-3 gap-3'>
                                            <a href={proj.link} target='_blank'><div className="hvr-underline-from-center hvr-grow hvr-icon-down btn btn-sm rounded-xl bg-violet-700/10 border-violet-600 hover:bg-violet-700/30 font-bold font-serif px-10">Live <FaExternalLinkAlt /></div></a>
                                            <a href={proj.client} target='_blank'><div className="hvr-underline-from-center hvr-grow hvr-icon-down btn btn-sm rounded-xl bg-violet-700/10 border-violet-600 hover:bg-violet-700/30 font-bold font-serif px-5 text-nowrap">Github  (client)<FiGithub /></div></a>
                                           { proj?.server && <a href={proj.server} target='_blank'><div className="hvr-underline-from-center hvr-grow hvr-icon-down btn btn-sm rounded-xl bg-violet-700/10 border-violet-600 hover:bg-violet-700/30 font-bold font-serif px-5 text-nowrap"> Github (server)<FiGithub /></div></a>}
                                            
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>

        </div>
    )
}

export default Projects
