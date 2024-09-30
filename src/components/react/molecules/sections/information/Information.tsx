import Ropa from "@assets/images/woman-clothes.webp";
import Auto from "@assets/images/rueda.webp";
import Facciones from "@assets/images/corbata-de-mono.webp";
import "./index.css"
export const Information = () => {
    return (
        <div className="box">

            <div className="text-center">
                <h3 className='sections-title font-bold'>
                    Contamos
                </h3>

                <p className='small-color-text'>
                    con
                </p>
            </div>
            <div className="container mx-auto p-4">

                <div className="flex flex-wrap -mx-4">

                    <div className="w-full sm:w-4/12 px-4">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={Ropa.src} alt="" className="icons-cards" />
                                    <p className="title">Ropa</p>
                                    <p>Diversidad</p>
                                </div>
                                <div className="flip-card-back">
                                    <p>Podras diseñar tus outfits y enseñarselos a la comunidad!</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="w-full sm:w-4/12 px-4">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={Auto.src} alt="" className="icons-cards" />
                                    <p className="title">Vehiculos</p>
                                    <p>Los mejores </p>
                                </div>
                                <div className="flip-card-back">
                                    <p>No te quedes sin el tuyo!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-4/12 px-4">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={Facciones.src} alt="" className="icons-cards" />
                                    <p className="title">Facciones</p>
                                    <p>Postulate!</p>
                                </div>
                                <div className="flip-card-back">
                                    <p>Animate a entrar a nuestra facciones YA!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
