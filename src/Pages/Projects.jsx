import React from 'react'

const Projects = () => {

    const project = [
        {
            id: 1,
            title: "Diagnostic Center Management System",
            img: "https://via.placeholder.com/300", // Dummy image URL
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




    return (
        <div className='mt-20'>

            <div className='flex items-center gap-5 '>
                <div className='h-1 mt-2 rounded-full bg-violet-700 w-full'></div>
                <div className='text-4xl font-bold text-right'>Projects</div>
            </div>

            {
                project.map((proj, inx) =>{ 

                const isReverse = inx % 2 !== 0;

                    return (
                    <div>
                        <div className={`flex ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                                    alt="Album" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">New album is released!</h2>
                                <p>Click the button to listen on Spotiwhy app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Listen</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            )
            }

        </div>
    )
}

export default Projects
