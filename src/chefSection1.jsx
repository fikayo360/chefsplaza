const Section1 = () => {
    return (
        <div className="w-screen h-screen flex flex-col lg:flex-row">

            <div className="lg:w-1/2 w-full h-full bg-[url(./img/mexican.jpg)] bg-cover bg-center bg-no-repeat"></div>

            <div className="lg:w-1/2 w-full h-full flex flex-col items-center pt-20 justify-center">
                <h1 className="text-3xl mb-10 font-bold uppercase font-pop">mexican cusiness </h1>
                <p className="text-1xl w-[80%] text-center mb-10 font-mont leading-5 md:leading-10">Embark on a culinary journey to the heart of Mexico with our exquisite array of traditional dishes.
                 Each bite tells a story of rich cultural heritage and flavors that dance on your palate. At chef's plaza, we've curated an authentic Mexican menu that pays homage to the vibrant street markets of Mexico City and the soul-warming kitchens of abuela's home.


                </p>
                <span className="text-1xl font-mont"> make an order </span>
            </div>

        </div>
    )
}

export default Section1