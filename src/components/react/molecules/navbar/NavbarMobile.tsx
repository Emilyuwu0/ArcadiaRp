import { useRef } from 'react'
import { motion } from 'framer-motion';
import { base, discordRP } from 'src/components/utils/constants';

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const variants2 = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

interface Props {
    itemsMenu: { href: string, title: string }[],
    navbar: boolean
}

export const NavbarMobile = ({ itemsMenu, navbar }: Props) => {

    const containerRef = useRef(null);

    return (
        <motion.nav ref={containerRef} initial={false} animate={navbar ? "open" : "closed"} className={`${navbar ? "grid" : "hidden"} md:hidden  h-screen animated fixed z-10 top-0 bottom-0 left-0 right-0`}>
            <div className={`grid items-center bg-[--bg-color] w-full`}>

                <motion.ul variants={variants} className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-center font-medium">
                    {
                        itemsMenu.map((item, index) => (
                            <motion.li key={index} variants={variants2}>
                                <a aria-label={`Ir a ${item.title}`} href={`${base}${item.href}`}>
                                    <p className="text-[--text-color] text-[1.25rem] cursor-pointer font-[500]">
                                        {item.title}
                                    </p>
                                </a>
                            </motion.li>
                        ))
                    }
                    <motion.li variants={variants2}>
                        <a aria-label={`ir al Discord`} href={discordRP} target="_blank">
                            <p className="text-[--text-color] text-[1.25rem] cursor-pointer font-[500]">
                                Discord
                            </p>
                        </a>
                    </motion.li>
                </motion.ul>
            </div>
        </motion.nav>
    )
}
