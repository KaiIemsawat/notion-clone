import Image from "next/image";

export const Heroes = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div
                    className="
                        relative
                        w-[300px]
                        h-[300px]
                        sm:w-[350px]
                        sm:h-[350px]
                        md:w-[400px]
                        md:h-[400px]
                    "
                >
                    <Image
                        className="object-contain dark:hidden"
                        src="/documents.png"
                        fill
                        alt="Document"
                    />
                    <Image
                        className="hidden object-contain dark:block"
                        src="/documents-dark.png"
                        fill
                        alt="Document"
                    />
                </div>
                <div className="relative w-[400px] h-[400px] hidden md:block">
                    <Image
                        className="object-contain dark:hidden"
                        src="/reading.png"
                        fill
                        alt="Reading"
                    />
                    <Image
                        className="hidden object-contain dark:block"
                        src="/reading-dark.png"
                        fill
                        alt="Reading"
                    />
                </div>
            </div>
        </div>
    );
};
