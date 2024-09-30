import BannerImg from '@assets/bg/BANNER-WEB-FINAL-ARCADIA-COMMUNITY-javodesigns.webp';

export const SecondHero = () => {
    return (
        <div className="h-[320px] lg:h-[450px]">
            <div className='w-full h-full overflow-hidden relative'>
                <div className='relative h-full'>
                    <img className='w-full object-cover h-full' src={BannerImg.src} alt='Banner prinicpal Arcadia Community' title='Banner Arcadia' />

                    <div className='absolute inset-0 bg-black bg-opacity-50'></div>

                    <div className='absolute inset-0 w-full grid place-content-center'>
                        <h2 className='big-title text-center px-4'>
                            Normativa Generales
                        </h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

