import { Button, Image } from "@nextui-org/react";
import { MenuIcon, CloseIcon } from "../../atoms/icons";
import { useState } from "react";
/* import { useNavigate } from "react-router-dom"; */
import { NavbarMobile } from "./NavbarMobile";
import { useScrollOnTop } from "./useScrollOnTop";
import ImageSvg from '@assets/images/logoHome.webp';
import { base, discordRP, goToFiveM, itemsMenuIds } from "src/components/utils/constants";


export const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const sticky = useScrollOnTop();

    const itemsMenu = [
        {
            title: "Inicio ",
            href: "/"
        },

        {
            title: "Normativas ",
            href: "/normas"
        }
    ];

    return (
        <div className="relative">
            <nav className={`${sticky ? 'nav-menu ' : ''}w-full fixed z-[15]`}>
                <div className="relative z-20">
                    <div className="container mx-auto relative z-[21] flex justify-between md:justify-evenly items-center py-3 px-3">
                        <a aria-label="link to home" href={"#homeSection"} className="w-[60px] h-[60px]">
                            <Image className="w-full" src={ImageSvg.src} alt="Logo de la marca de TsukiiYamero" />
                        </a>

                        <div className={`hidden md:flex`}>
                            <ul className="navbar font-menu-d items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-center font-light">
                                {
                                    itemsMenu.map((item, index) => (
                                        <li className="flex" key={index}>
                                            <div className="line-menus bg-[#fff] mr-[20px]"></div>
                                            <a aria-label={`Ir a ${item.title}`} href={`${base}${item.href}`}>
                                                <p className="text-[#fff] text-[1.20rem] cursor-pointer">
                                                    {item.title}
                                                </p>
                                            </a>
                                        </li>
                                    ))
                                }

                                <li className="flex">
                                    <div className="line-menus bg-[#fff] mr-[20px]"></div>
                                    <a aria-label={`ir al Discord`} href={discordRP} target="_blank">
                                        <p className="text-[#fff] text-[1.20rem] cursor-pointer">
                                            Discord
                                        </p>
                                    </a>
                                </li>

                                <li className="flex">
                                    <div className="line-menus bg-[#fff] mr-[20px]"></div>
                                    <a aria-label={`ir al Discord`} href={goToFiveM} target="_blank">
                                        <p className="text-[#fff] text-[1.20rem] cursor-pointer">
                                            Jugar
                                        </p>
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div className="hidden md:block">
                            <a aria-label={`Ir a información Contacto`} href={`#${itemsMenuIds.footer}`} className="block py-[6px] px-[18px] bg-[--bg-color] text-[#fff] rounded-[15px]">
                                Contacto
                            </a>
                        </div>

                        <div className="md:hidden" >
                            <Button onClick={() => setNavbar(!navbar)} className="outline-none rounded-lg bg-[--bg-color] p-2" isIconOnly size="sm" variant="flat">
                                {
                                    navbar
                                        ? <CloseIcon className="general-icon" />
                                        : <MenuIcon className="general-icon" />
                                }
                            </Button>
                        </div>
                    </div>


                    <NavbarMobile itemsMenu={itemsMenu} navbar={navbar} />


                </div>

            </nav>



        </div>
    )
}
