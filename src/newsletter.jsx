const NewsLetter = () => {
    return (
        <div className="w-screen h-[70vh] md:h-[60vh] pt-10 flex flex-col items-center bg-black justify-center">
            <h1 className="text-[1.4rem] md:text-3xl font-bold uppercase mb-20 text-white font-pop">subscribe to our newsLetter </h1>
            <p className="w-[80%] md:w-[85%] text-xs md:text-2xl mb-[6%] md:mb-[5%] text-white text-center leading-6 font-mont">subscribe to our newsletter to get latest information when they drop</p>
            <form className="w-full flex flex-col items-center">
            <input className="w-[80%] md:w-[40%] h-[4rem] border-2 border-black border-solid text-1xl mb-5 pl-4 font-mont" type="text" placeholder="email" />
                <button className="w-[80%] md:w-[40%] h-[2.8rem] md:h-[4rem] border-black border-solid text-1xl text-white bg-blue-800 font-mont font-bold">send</button>
            </form>
        </div>
    )
}

export default NewsLetter