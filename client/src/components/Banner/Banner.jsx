import { TypeAnimation } from "react-type-animation";
import bg from '../../assets/bg.png'
import vd from '../../assets/new.mp4'
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
        }}>
            <div className="hero min-h-screen bg-base-200 bg-opacity-30 w-full">
                <div className="hero-content flex-col w-full lg:flex-row-reverse justify-between">
                    {/* <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
                    <div className='w-1/2'>
                        <video src={vd} controls loop className=" rounded-lg shadow-2xl"></video>
                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">
                            <TypeAnimation
                                sequence={[
                                    "TASK",
                                    1000,
                                    "PROJECTS",
                                    1000,
                                    "BUSINESS",
                                    1000,
                                    // "",
                                    // 1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                            <br></br>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                Manage
                            </span>
                            <TypeAnimation
                                sequence={[
                                    "Ment!",
                                    1000,
                                    // "",
                                    // 1000,
                                    // "",
                                    // 1000,
                                    // "",
                                    // 1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h1>
                        <p className="py-6">Management is how businesses organize and direct workflow, operations, and employees to meet company goals. The primary goal of management is to create an environment that lets employees work efficiently and productively</p>
                        <NavLink to='/deshboard'><button className="btn btn-primary">Let’s Explore</button></NavLink>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
