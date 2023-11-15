const ContactUs = () => {
    return (
        <div className="w-screen h-screen flex flex-col items-center pt-20 overflow-scroll">
            <h1 className="text-3xl font-bold mb-10 font-pop">Contact us </h1>
            <h1 className="text-2xl mb-5 font-mont"> To busy to e-mail </h1>
            <h2 className="text-2xl mb-10 font-mont">call us on <span className="text-2xl"> 0914 552 1243 </span></h2>

            <div className="w-full relative h-[1px] bg-slate-300 mb-20"><span className="w-[40px] h=[1rem] text-center absolute left-1/2 -top-2 bg-black text-xs font-bold uppercase text-white">or</span></div>

            <form className="w-[90%] h-[67%]md:bg-white flex flex-col justify-center items-center mb-10  md:mt-20">
                <input className="w-[80%] md:w-[45%] h-[5rem] border-2 border-black border-solid text-1xl mb-10 pl-4 font-mont" type="text" placeholder="email" />
                <textarea className="w-[80%] md:w-[45%] h-[10rem] border-2 border-black border-solid text-1xl p-4 mb-10 font-mont" placeholder="message" />
                <button className="w-[80%] md:w-[45%] h-[3.5rem] md:h-[4.5rem] border-black border-solid text-1xl text-white bg-blue-800 font-bold font-mont">book your order </button>
            </form>
            
        </div>
    )
}

export default ContactUs