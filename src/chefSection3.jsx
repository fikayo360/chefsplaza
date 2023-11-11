const Section3 = () => {
    return (
        <div className="w-screen h-screen flex flex-col lg:flex-row">
            <div className="lg:w-1/2 w-full h-full bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url(./african.jpg)'}}></div>

            <div className="lg:w-1/2 w-full h-full flex flex-col items-center pt-20 justify-center">
                <h1 className="text-3xl mb-10 font-bold uppercase font-pop"> african cusiness </h1>
                <p className="text-1xl w-[80%] text-center mb-10 font-mont leading-5 md:leading-10">Immerse yourself in the magic of storytelling as we proudly present our curated collection 
                of African Movies at chef's plaza. Capturing the spirit, diversity, and creativity of the continent, 
                our film selection showcases a vibrant mosaic of narratives that celebrate the uniqueness and resilience of African cultures.


                </p>
                <span className="font-mont text-1xl "> make an order </span>
            </div>

        </div>
    )
}

export default Section3