import ImageLogo from '@assets/images/logoHorizontal.webp'
import { DiscordNSvg, InstagramSvg, TiktokSvg } from '@react/atoms/icons';
import { discordRP, goToFiveM, instagramRP, itemsMenuIds, tiktokRP } from 'src/components/utils/constants';
import { Tooltip } from "@nextui-org/react";
const { about, home, norms, footer } = itemsMenuIds;
export const Footer = () => {


    return (
        <>
            <div id={`${footer}`} className="bg-[--bg-color]">
                <div className="container mx-auto px-[1.5rem] py-[2rem] flex flex-wrap justify-center sm:items-center gap-9 lg:gap-[6rem]">

                    <div className='w-[360px] text-center'>
                        <img className='object-contain' loading='lazy' src={ImageLogo.src} alt={"Arcadia RP Logo"} />

                        <p className='small-color-alt  text-left'>
                            ArcadiaRP no está afiliado ni respaldado por Rockstar North u otros titulares de derechos. Todas las marcas comerciales utilizadas pertenecen a sus respectivos propietarios.
                        </p>

                        <p className='small-color-alt pt-[1rem] text-left'>
                            En Arcadia, no solo jugamos a GTA V, creamos historias épicas juntos. Sumérgete en un mundo vibrante lleno de oportunidades para forjar tu propio destino. ¿Quieres ser un astuto empresario, un intrépido policía, o tal vez un hábil ladrón de bancos? ¡Tú decides!
                        </p>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-9 lg:gap-[5rem]'>
                        <div>

                            <h5 className='text-[--text-color] text-[1rem] md:text-[1.25rem]'>Links</h5>

                            <div className='mt-[1.5rem] grid gap-[.75rem]'>
                                <a className='small-color-alt block' href={`/`}>Inicio</a>
                                <a className='small-color-alt block' href={`https://discord.gg/arcadiacommunity`} target="_blank">Discord</a>
                                <a className='small-color-alt block' href={goToFiveM} target="_blank">Jugar</a>
                            </div>

                        </div>

                        <div>
                            <h5 className='text-[--text-color] text-[1rem] md:text-[1.25rem]'>Información</h5>

                            <div className='mt-[1.5rem] grid gap-[.75rem]'>
                                <a className='small-color-alt block' href={`/normas`}>Normativas</a>
                                <a className='small-color-alt block' href={`#`}>Términos de Servicio</a>
                                <a className='small-color-alt block' href={`#`}>Política de Privacidad</a>
                            </div>

                        </div>

                        <div>
                            <h5 className='text-[--text-color] text-[1rem] md:text-[1.25rem]'>Nuestras Redes</h5>

                            <div className='mt-[1.5rem] flex justify-center gap-[1.25rem]'>

                                <a title="Unete a nuestro Discord" className='small-color-alt block' href={discordRP}>
                                    <DiscordNSvg className="general-icon-networks" />
                                </a>

                                <a title="Siguenos en Instagram" className='small-color-alt block' href={instagramRP}>
                                    <InstagramSvg className="general-icon-networks" />
                                </a>

                                <a title="Siguenos en Tiktok" className='small-color-alt block' href={tiktokRP}>
                                    <TiktokSvg className="general-icon-networks" />
                                </a>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg-[--bg-color2] p-[1rem]">
                <p className="text-[--title-color] text-[0.6rem] text-center font-light">Copyright © 2023 Arcadia RP | All Rights Reserved.</p>
            </div>
        </>
    )
}
