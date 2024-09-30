import LogoVertical from "@assets/images/logoVertical.webp";
import "./index.css"
export const Discovery = () => {


    return (
        <div className="bg-sections mb-24">
            <div className="container mx-auto p-4 -mt-2">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full sm:w-6/12 px-4 ">
                        <img src={LogoVertical.src} alt="uwu" />
                    </div>


                    <div className="w-full sm:w-6/12 p-8  sm:mt-0">

                        <h2 className="text-sm font-light  text-white mt-20 mb-6">Inicio</h2>
                        <span className="text-title-purple font-bold text-3xl">¡DESCUBRE EL ROLEPLAY <span className="text-white">DEFINITIVO</span>  EN GTA V CON NUESTRO <span className="text-white">CONFIABLE</span> SERVIDOR!</span>
                        <p className="text-white mt-8 text-light">¿Sueñas con vivir una vida virtual extraordinaria? Conéctate a nuestro servidor de roleplay en GTA V y sumérgete en tramas emocionantes que tú mismo construirás.<br /> Únete a una comunidad apasionada y comienza tu propia historia hoy mismo.<br /><br />
                            Adéntrate en el fascinante universo de Arcadia Rp, donde tu narrativa espera ser descubierta. Embárcate en emocionantes aventuras en nuestro servidor. ¿Preparado para convertirte en el protagonista de tu propia odisea?<br /><br /> Únete a nosotros y comienza tu viaje.</p>

                        <button className="py-[8px] px-[18px] bg-[--bg-color-white] text-[#fff] rounded-[15px] mt-8">
                            Sobre nosotros
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}; 
