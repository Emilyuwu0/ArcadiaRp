import ImgBg from "@assets/bg/bgheroarcadia.webp";
import "./index.css";
import { itemsMenuIds } from "src/components/utils/constants";
export const Hero = () => {
    return (
        <div id={itemsMenuIds.home} className="city-game-sky-grand">
            <img className="w-full" alt="Rectangle" src="https://cdn.discordapp.com/attachments/966004692985475183/1290373636292874382/image.png?ex=66fc3998&is=66fae818&hm=5fca81ef1a66d395ab0ad39e5369219f1e8ff48074cb672ab4c51b8f2554948d&" />
        </div>
    )
}
