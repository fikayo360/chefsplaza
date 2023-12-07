const Hero = () => {
    return (
        <div className="w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center" style={{backgroundImage:'url(./hgbL.jpg)'}}>
            
            <div className="w-3/4 h-[8%] flex justify-center md:justify-end items-center pr-5 "> 

                <div className="flex items-center ">
                    <h1 className="text-white mr-4 font-mont">our socials </h1>
                    <div className="w-[2rem] h-[2rem] rounded-full border-solid border-2 border-white flex justify-center items-center mr-4"><img className="w-[1.1rem] h-[1.1rem]" src={'./twitter.png'}/></div>
                    <div className="w-[2rem] h-[2rem] rounded-full border-solid border-2 border-white flex justify-center items-center"><img className="w-[1.1rem] h-[1.1rem]" src={'./facebook.png'}/></div>
                </div>

            </div>

             <main className="w-full h-[92%] flex flex-col items-center py-10 md:py-20"> 
                <div className="flex items-center flex-col h-[25%] mb-5 md:mb-10">
                <img src={'./chef.png'} className="w-[5rem] h-[5rem] mb-5"/>
                <h1 className="text-4xl text-white font-bold font-pop">ChefPlaza</h1>
                </div>
               

                <div className=" h-[80%] md:h-[60%] w-[80%] md:w-[65%] flex flex-col items-center">
                <h1 className="text-3xl text-center w-[86%] md:text-5xl text-white font-bold uppercase mb-10 md:mb-16 font-pop">the future of fine dining</h1>
                <p className="text-[1.2rem] font-bold leading-7 text-white w-[95%] md:w-[80%] text-center mb-6 md:mb-16 font-mont">We bring you a symphony of flavors crafted with
                 passion and precision. 
                From mouthwatering appetizers to delectable main courses and divine desserts, our menu is a celebration of 
                </p>
                <button className="w-[75%] md:w-[40%] h-[4rem] md:h-[4rem] border-solid rounded-lg text-white text-1xl font-bold bg-black font-pop"> Request a chef </button>
                </div>

             </main>     
        </div> 
    )
}

export default Hero