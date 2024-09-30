
export const Normas = ({ pdfUrl }: { pdfUrl: string }) => {
    return (
        <div className="mt-[1rem] p-[1rem]">
            <div className="flex justify-center mx-auto w-full max-w-[1000px] h-[710px] container p-8">
                <embed src={pdfUrl} type="application/pdf" width="100%" height="100%" />
            </div>
        </div>
    )
}
