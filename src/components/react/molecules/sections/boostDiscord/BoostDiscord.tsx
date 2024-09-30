import { discordRP } from "src/components/utils/constants"


export const BoostDiscord = () => {
    return (
        <div className="px-[8px] py-[2rem] pb-[5rem] bg-[--bg-color2] m-auto">
            <div className="max-w-[600px] mx-auto p-[2rem]">
                <h4 className="sections-title font-[500] text-center">Boostea nuestro servidor de Discord y obtén recompensas.</h4>

                <a className="m-auto block w-min py-[8px] px-[18px] bg-[--bg-color-white] text-[#fff] rounded-[15px] mt-8" aria-label={`ir al Discord`} href={discordRP} target="_blank">
                    Unirse
                </a>
            </div>
        </div>
    )
}
