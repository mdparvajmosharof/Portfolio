import React from 'react'
import pro1 from "/images/diagno-d.png"

const Projects = () => {

    const project = [
        {
            id: 1,
            title: "Diagno",
            img: pro1, // Dummy image URL
            description: "This project serves as a comprehensive platform for managing diagnostic centers, enabling users to book tests, view results, and manage appointments. It features an intuitive user interface, robust backend support, and a secure database. Users can access their medical history and test results seamlessly, making healthcare management efficient and user-friendly.",
            link: "https://diagno-auth.web.app/",
            client: "https://github.com/mdparvajmosharof/Diagno",
            server: "https://github.com/mdparvajmosharof/diagno-server"
        },
        {
            id: 2,
            title: "Alterno",
            img: "https://via.placeholder.com/300", // Dummy image URL
            description: "Alterno is a tour-related application designed to showcase featured tours and experiences. The platform allows users to explore various destinations, view details, and book tours effortlessly. With its sleek design and responsive features, Alterno aims to enhance the travel planning experience, making it enjoyable and straightforward for users.",
            link: "https://alterno-auth.web.app/",
            client: "https://github.com/mdparvajmosharof/alterno",
            server: "https://github.com/mdparvajmosharof/alterno-server"
        },
        {
            id: 3,
            title: "Rento",
            img: "https://via.placeholder.com/300", // Dummy image URL
            description: "Rento is a rental platform that connects users with various rental services, including homes, vehicles, and equipment. It provides a user-friendly interface for searching and booking rentals. The project emphasizes secure transactions, real-time updates, and user feedback, ensuring a smooth experience for both renters and property owners.",
            link: "https://auth-rento.web.app/",
            client: "https://github.com/mdparvajmosharof/Rento"
        },
        {
            id: 4,
            title: "Touro",
            img: "https://via.placeholder.com/300", // Dummy image URL
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

            <div className='space-y- mx-10 mt-12'>
                {
                    project.map((proj, inx) => {

                        const isReverse = inx % 2 !== 0;

                        return (
                            <div key={proj.id}>

                                <div className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row '} items-center  font-serif`}>

                                    <figure
                                    style={{backgroundImage : `url(${proj?.img})`}} 
                                    className={`lg:w-1/2 h-[350px] bg-cover  bg-top hover:bg-bottom transition-all ease-in-out  duration-[3s] rounded-xl`}>
                                        {/* <img
                                            className='w-full'
                                            src={proj.img}
                                            alt="Album" /> */}
                                    </figure>

                                    <div className="card-body lg:w-1/2 text-center">
                                        <h2 className="text-2xl font-extrabold">{proj.title}</h2>
                                        <p>{proj.description}</p>
                                        <div className='flex justify-around mt-3'>
                                            <a href={proj.link} target='_blank'><div className="btn">Live</div></a>
                                            <a href={proj.client} target='_blank'><div className="btn">Github  (client)</div></a>
                                            <a href={proj.server} target='_blank'><div className="btn"> Github (server)</div></a>
                                            
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
