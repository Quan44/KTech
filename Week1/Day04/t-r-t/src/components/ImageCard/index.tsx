type ImageCardProps = {
    image?: string;
    title?: string;
    price?: number;
    discount?: number;
}

export default function ImageCard({ image, title, price = 0, discount }: ImageCardProps) {
    return (
        <>
            <div className="flex flex-col gap-2 bg-white rounded">
                <div className="relative">
                    <img className="w-full rounded-2xl h-[200px] object-contain" src={image} alt="Image" />
                    {discount && <span className="absolute w-[50px] h-[30px] flex items-center justify-center text-blue-50 rounded bg-amber-500 top-0 right-0">-{discount}%</span>}
                </div>
                {title && <span className="font-medium px-5">{title}</span>}
                <div className="flex flex-row-reverse justify-end items-center px-5 gap-2">
                    {discount ? (
                        <>
                            <span className="line-through text-gray-500">{
                                new Intl.NumberFormat('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND',
                                }).format(price)
                            }</span>
                            <span className="text-red-500">{
                                new Intl.NumberFormat('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND',
                                }).format(price * (1 - (discount) / 100))
                            }</span>
                        </>
                    ) : (
                        <>
                            {price && <span className="text-red-500">{
                                new Intl.NumberFormat('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND',
                                }).format(price)
                            }</span>}
                        </>
                    )}
                </div>
            </div>
        </>
    )
}