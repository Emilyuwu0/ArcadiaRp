import NormativasImg from '@assets/images/1.png';
import Normativas2Img from '@assets/images/7.png';
import Normativas3Img from '@assets/images/8.png';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import "./index.css"

export const Gallery = () => {

    /* const { isOpen, onOpen, onOpenChange } = useDisclosure(); */
    let [isOpen, setIsOpen] = useState(false)
    const [Imgsgallery, setImgsgallery] = useState<{ url: string }[]>([]);

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const imgSelfies = [
        {
            url: "https://cdn.discordapp.com/attachments/966004692985475183/1197275229316186164/image_1.png?ex=65baac72&is=65a83772&hm=f83e2712f824ab2134670a255023a42c732d67a8a9a3507157ee48f4cea3c85b& ",
        },

        {
            url: "https://cdn.discordapp.com/attachments/966004692985475183/1197275318847807539/police.png?ex=65baac88&is=65a83788&hm=4f6319679d7ab101956cd2609c8caced093a1cad48c9b41b3b2a1a4aab00f5c8& ",
        },
        {
            url: "https://cdn.discordapp.com/attachments/966004692985475183/1197275384891322368/ems.png?ex=65baac98&is=65a83798&hm=d02578cf84080aae48b75c721d06a7e088bc5ec242575fa27cd29c8520301abb& ",
        },
        {
            url: "https://cdn.discordapp.com/attachments/966004692985475183/1197275436154105866/meca.png?ex=65baaca4&is=65a837a4&hm=a59d8259845427a1c5c16a70dc8a2893f0a1d53d8109c85a58b7053d8c11de15& ",
        },
        {
            url: "https://cdn.discordapp.com/attachments/966004692985475183/1197304025691988070/conce.png?ex=65bac744&is=65a85244&hm=ca063f401e6e00b47c8a5aca807aecde7506965347b1a312783a0bc12c8de7ab& ",
        },
        {
            url: "https://cdn.discordapp.com/attachments/966004692985475183/1197304071686733854/banners.png?ex=65bac74f&is=65a8524f&hm=f2df4e65d9ae8d85142f36633b5966d400a9d7cd25bf555c2bed0d21f5edebbe& ",
        },
    ];

    const imgSelfies2 = [
        {
            url: "https://cdn.discordapp.com/attachments/1069798134160556092/1194321960264548352/image.png?ex=65b92880&is=65a6b380&hm=1650a234bba0c3b15bad3881cd6496c522dfe59a3610864bea90f6822d82c799&"
        },
        {
            url: "https://cdn.discordapp.com/attachments/1069798134160556092/1194322215982874765/image.png?ex=65b928bd&is=65a6b3bd&hm=dbe3758379811d342951813b245cd4aba4697d99f55321dbf995b257cd2f7b68&"
        },
        {
            url: "https://cdn.discordapp.com/attachments/966004692985475183/1197304128490196992/rex.png?ex=65bac75d&is=65a8525d&hm=e810ba9388e3f7eb019933fc7f0b5b9aae68f9731758302326a8632c51e65210& ",
        },
        {
            url: "https://cdn.discordapp.com/attachments/966004692985475183/1197304174333923388/rex2.png?ex=65bac767&is=65a85267&hm=17b138b9e1bf196b50b6b05b7dd49cb144765e8945912e1564f04e33d03d3c20& ",
        },
        {
            url: "https://cdn.discordapp.com/attachments/966004692985475183/1197304352377933834/police2.png?ex=65bac792&is=65a85292&hm=75eb635c44f4507bbfbe229bf2c498e64009e95808a4e7fd3537a3da602a0f68& ",
        },
        {
            url: "https://cdn.discordapp.com/attachments/966004692985475183/1197313398321459302/image.jpg?ex=65bacfff&is=65a85aff&hm=8d17e1312de7360f268c7066b7295fa9aba24b159e46d6db91f4424fe2ff5e60&"
        }
    ]

    const profileSelfies = [
        {
            url: "https://cdn.discordapp.com/attachments/1069798134160556092/1194322263512727602/image.png?ex=65b928c9&is=65a6b3c9&hm=0924d9f81138a59e2041023d8c637426528d7296e23b883dbec5e08ad6563f17&"
        },
        {
            url: "https://cdn.discordapp.com/attachments/966004692985475183/1197304403661701192/police3.png?ex=65bac79e&is=65a8529e&hm=7115e35019e62ca1a462fc41d107c7e05820d6e7166c631574adb373b434ecbd&"
        },
        {
            url: "https://cdn.discordapp.com/attachments/966004692985475183/1197313998232756265/image.png?ex=65bad08e&is=65a85b8e&hm=d90f3d93ae58316703e9afbbaa1bfa26f1c135edf37b8e72485a417debd49f20&"
        },
        {
            url: "https://cdn.discordapp.com/attachments/966004692985475183/1197314999383765012/image.png?ex=65bad17c&is=65a85c7c&hm=02f9d51f922208dec0cf23434bb0040cc6b457618894c84c75e99bdcf7ae137e&"
        },
        {
            url: "https://cdn.discordapp.com/attachments/966004692985475183/1197315767037857852/image.png?ex=65bad233&is=65a85d33&hm=ab356762eed749485d6f88fa7f01ee601ce29a2593003a37aeaeec2e0a23b6cd&"
        },
        {
            url: "https://cdn.discordapp.com/attachments/966004692985475183/1197315973804466296/image.png?ex=65bad265&is=65a85d65&hm=04788abc62102efb8174c3e134d3dd5f6e24efaa8a4b0c9ed75a4b6f2932f1f3&"
        }
    ]

    return (
        <div className='bg-[--bg-color2]'>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative " onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/60 z-[40]" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto z-[80] ">
                        <div className="flex min-h-full relative z-[50] items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full relative z-[50] max-w-[700px] transform overflow-hidden rounded-2xl bg-[--bg-color] p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-xl font-bold leading-6 text-white"
                                    >
                                        Galeria {/*  <span className='text-title-purple'>Selfies</span> */}
                                    </Dialog.Title>
                                    <div className="mt-2 h-[360px] w-full">

                                        <div className="center flex slide w-full">
                                            {
                                                Imgsgallery.map((img, index) => (
                                                    <img key={index} src={img.url} className='w-full max-w-[652px] h-[360px] object-cover' alt='Imagen arcadia' />
                                                ))
                                            }
                                        </div>


                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-[--bg-color-white] px-4 py-2 text-sm font-medium text-white hover:text-[--bg-color-white] hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Cerrar
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            <div className='container mx-auto px-[8px] py-[2rem] pb-[5rem]'>
                <div className="text-center mt-24 mb-8">
                    <h3 className='sections-title font-bold'>
                        Galeria
                    </h3>

                    <p className='small-color-text '>
                        Comunidad
                    </p>


                </div>
                <div className="container mx-auto p-4">
                    <div className="flex flex-wrap -mx-4 card ">
                        <div onClick={() => {
                            setImgsgallery(imgSelfies);
                            openModal();
                        }} className="w-full sm:w-4/12 px-4 flex  justify-center">
                            <div className="max-w-[300px] grid h-[250px] sm:h-[420px] sm:w-[270px] rounded-lg bg-[--bg-cards] "
                                onClick={openModal}>
                                <div className=' overflow-hidden rounded-lg'>
                                    <img className='object-contain rounded-lg w-full' loading='lazy' src={Normativas3Img.src} alt='imagen representativa de la galeria Arcadia RP' />
                                </div>

                                <div className='py-[14px] h-[64px]'>
                                    <span className='pl-[14px] sections-title-alt font-bold'>
                                        Postales
                                    </span>

                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-4/12 px-4 mt-4 sm:mt-0 flex  justify-center">
                            <div className="max-w-[300px] grid h-[250px] sm:h-[420px] sm:w-[270px] rounded-lg bg-[--bg-cards] margin-auto"
                                onClick={() => {
                                    setImgsgallery(imgSelfies2);
                                    openModal();
                                }}>
                                <div className=' overflow-hidden rounded-lg'>
                                    <img className='object-contain rounded-lg w-full' loading='lazy' src={Normativas2Img.src} alt='imagen representativa de la galeria Arcadia RP' />
                                </div>

                                <div className='py-[14px] h-[64px]'>
                                    <span className='pl-[14px] sections-title-alt font-bold'>
                                        City
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full sm:w-4/12 px-4 mt-4 sm:mt-0 flex  justify-center">
                            <div className="max-w-[300px] grid h-[250px] sm:h-[420px] sm:w-[270px] rounded-lg bg-[--bg-cards] margin-auto"
                                onClick={() => {
                                    setImgsgallery(profileSelfies);
                                    openModal();
                                }}>
                                <div className=' overflow-hidden rounded-lg'>
                                    <img className='object-contain rounded-lg w-full' loading='lazy' src={NormativasImg.src} alt='imagen representativa de la galeria Arcadia RP' />
                                </div>

                                <div className='py-[14px] h-[64px]'>
                                    <span className='pl-[14px] sections-title-alt font-bold'>
                                        Selfies
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


            <div className='hidden absolute'>

            </div>
        </div>
    )
}


