import profile from '/images/wbge1.png';
import profile2 from '/images/blwtp2.png';

const Home = () => {
  return (
    <div className="relative max-h-screen h-screen overflow-hidden">

      {/* Section for text and title */}
      <div className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center h-[70vh] z-10">
        <div className='w-full mb-16'>
          <div className="text-xl font-thin">Hi, I’m Md. <span className="text-3xl font-bold font-['Yeseva One', 'serif']">PARVAJ</span> Mosharof, a</div>
          <div className='text-4xl font-bold -mb-12 mt-5 ml-7 opacity-80'>
            WEB
          </div>
        </div>
        <div className="uppercase text-[10rem] font-extrabold flex items-center justify-center relative">
          {/* DEVELOPER text behind the image */}
          
          <span className="absolute opacity-60 z-0">
            
            Developer
            </span>
        </div>

        <div className="absolute right-8 top-[55vh] text-center text-xl font-light">
          Specializing in 
          <span className="text-2xl font-bold font-['Yeseva One', 'serif']"> REACT </span>
           and <span className="text-2xl font-bold font-['Yeseva One', 'serif']"> MERN </span>
           stack<br /> to build <span className='font-bold'>Dynamic</span> web solutions.
        </div>
      </div>

      {/* Profile Image */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
        <img className="h-[85vh]" src={profile2} alt="Profile" />
      </div>

    </div>
  );
};

export default Home;
