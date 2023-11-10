const HowItWorks = () => {
    return(
        <div className="w-screen h:[100%] md:h-screen flex flex-col pt-10 pb-10 md:pt-20 items-center bg-black">
            <div className="h-[30%] flex items-center flex-col ">
                <h1 className="text-3xl text-center font-bold uppercase text-white mb-20 font-pop">how it works </h1>
                <p className=" text-xs text-center w-[70%] md:text-1xl text-white font-mont leading-8 font-bold"> Our platform brings together a diverse range of experiences, ensuring there's something for everyone. 
                </p>
            </div>

            <div className="w-full h-[70%] flex flex-col items-center">

                <div className="w-[95%] h-[60%] md:h-[70%] items-center flex flex-col md:flex-row md:justify-between mb-10">

                <div className="flex flex-col w-[90%] md:w-[30%] h-[90%] items-center pt-10">
                    <img src={'./activity.png'} className="w-[2rem] h-[2rem] md:w-[4rem] md:h-[4rem] mb-10"/>
                    <h1 className="text-white mb-10 text-1xl font-bold uppercase font-mont">activity</h1>
                    <p className=" text-1xl text-center w-[80%] md:text-1xl text-white font-mont">Embark on an exciting journey of wellness and care with our comprehensive food menus.
                     From african to mexican and many more.
                   </p>
                </div>

                
                <div className="flex flex-col w-[90%] md:w-[30%] h-[90%]  items-center pt-10">
                    <img src={'./search.png'} className="w-[2rem] h-[2rem] md:w-[4rem] md:h-[4rem] mb-10"/>
                    <h1 className="text-white mb-10 text-1xl font-bold uppercase font-mont">search chef</h1>
                    <p className=" text-1xl text-center w-[80%] md:text-1xl text-white font-mont">Effortlessly navigate through our extensive offerings with the intuitive Search feature. Finding the perfect activity or service has never been smoother. Simply enter your preferences, 
                    from location to specific services.
                   </p>
                </div>

                
                <div className="flex flex-col w-[90%] md:w-[30%] h-[90%]  items-center pt-10">
                    <img src={'./appointment.png'} className="w-[2rem] h-[2rem] md:w-[4rem] md:h-[4rem] mb-10"/>
                    <h1 className="text-white mb-10 text-1xl font-bold uppercase font-mont">book appointment</h1>
                    <p className=" text-1xl text-center w-[80%] md:text-1xl text-white font-mont">Booking appointments is a breeze with our user-friendly platform. Once you've found the activity or service that resonates with you, take the next step by seamlessly scheduling your appointment. 
                   </p>
                </div>

                </div>
                 <button className="w-[45%] h-[3rem] md:w-[35%] md:h-[3.5rem] border-solid rounded-lg text-white bg-pink-600 text-1xl font-pop">learn more </button>
            </div>

           
        </div>
    )
}

export default HowItWorks