import ImgBg from "@assets/bg/bgheroarcadia.webp";
import "./index.css";
import { itemsMenuIds } from "src/components/utils/constants";
export const Hero = () => {
    return (
        <div id={itemsMenuIds.home} className="city-game-sky-grand">
            <img className="w-full" alt="Rectangle" src="https://i.ibb.co/ypc4D04/image.png" />
        </div>
    )
}
