import NormasGeneralArcadiaRp from '/normas/NORMATIVA_GENERAL_ARCADIA_RP.pdf';
import NormasEmsArcadiaRp from '/normas/NORMATIVA_EMS_ARCADIA.pdf';
import NormasMecanicosArcadiaRp from '/normas/NORMATIVA_MECANICOS_ARCADIA_CITY.pdf';
import NormasPoliciaArcadiaRp from '/normas/NORMATIVA_POLICIA_ARCADIA_ZEROX.pdf';
import NormasDiscordArcadiaRp from '/normas/Normativa_Discrod.pdf';

import { Normas } from "@react/molecules/sections/normas"
import { useState } from "react"

export const NormasSelection = () => {

    const [pdfUrl, setpdfUrl] = useState({
        name: 'General',
        path: NormasGeneralArcadiaRp
    });

    const normas = [{
        name: 'General',
        path: NormasGeneralArcadiaRp
    }, {
        name: 'Ems',
        path: NormasEmsArcadiaRp
    }, {
        name: 'Mecanicas',
        path: NormasMecanicosArcadiaRp
    }, {
        name: 'Policia',
        path: NormasPoliciaArcadiaRp
    }, {
        name: 'Discord',
        path: NormasDiscordArcadiaRp
    }]

    const handdleChangePdf = (name: string, path: string) => {
        setpdfUrl({ name, path });
    }

    return (
        <div className="bg-[--bg-color] py-[2rem] px-[1.75rem] md:py-[4rem] md:px-[3rem] grid gap-[1rem] md:gap-[2rem]">
            <h3 className="sections-title font-semibold text-center">Normativas Server</h3>

            <ul className='flex flex-wrap justify-center gap-[1.5rem]'>
                {
                    normas.map(({ name, path }) =>
                        <li key={name}>
                            <p onClick={() => handdleChangePdf(name, path)}
                                className={`${name === pdfUrl.name ? 'text-[#FBF196] font-semibold' : 'text-[#90949c]'} text-[1.125rem] font-[400] lg:text-[1.5rem] cursor-pointer text-center `}>
                                {name}
                            </p>
                        </li>
                    )
                }
            </ul>

            <Normas pdfUrl={pdfUrl.path} />
        </div>
    )
}
