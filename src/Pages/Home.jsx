import Hero from "../Components/Hero";
import Wave from "../../public/wave.svg";

const Home = () => {
    return (
        
        <div className=" relative flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
         <Hero/>
         <img className="absolute bottom-0 w-full" src={Wave} alt="" />
        </div>


    );
};

export default Home;