const Section2 = () => {
    return (
        <div className="w-screen h-[150vh] md:h-screen  flex flex-col-reverse lg:flex-row">

              <div className="lg:w-1/2 w-full h-[40%]  flex flex-col items-center pt-20 justify-center">
                <h1 className="text-3xl mb-10 font-bold uppercase font-pop">chinese cusiness </h1>
                <p className="text-1xl w-[80%] text-center mb-10 font-mont leading-5 md:leading-10">Embark on a gastronomic adventure as we transport you to the diverse landscapes of China, 
                where ancient culinary traditions meet modern palates. At ChefPlaza, our Chinese menu is a celebration of authenticity, 
                offering a kaleidoscope of tastes and textures that mirror the vastness of this culturally rich nation
                </p>
                <span className="text-1xl font-mont"> make an order </span>
            </div>

            <div className="lg:w-1/2 w-full h-[60%]  bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url(./chinese.jpg)'}}></div>
        </div>
    )
}

export default Section2