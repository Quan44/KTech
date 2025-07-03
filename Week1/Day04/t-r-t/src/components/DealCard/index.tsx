type DealCardProps = {
    image?: string;
    shop?: string;
    title?: string;
    price?: number;
    discount?: number;
    status?: string;
    rating?: number;
    sold?: number;
    soldPercent?: number;
};

export default function DealCard({
    image,
    shop,
    title,
    price = 0,
    discount = 0,
    status,
    rating = 0,
    sold = 0,
    soldPercent = 0,
}: DealCardProps) {
    const finalPrice = price * (1 - discount / 100);

    const stars = Array(5)
        .fill(0)
        .map((_, i) => (
            <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
                ★
            </span>
        ));

    return (
        <div className="flex flex-col gap-2 bg-white rounded p-3 w-full max-w-sm shadow">
            <div className="relative">
                <img className="w-full rounded-2xl h-[200px] object-contain" src={image} alt="Image" />
                {discount && <span className="absolute w-[50px] h-[30px] flex items-center justify-center text-blue-50 rounded bg-amber-700 top-0 right-0">-{discount}%</span>}
            </div>

            <div className="text-xs text-gray-500 font-semibold">{shop?.toUpperCase()}</div>

            <div className="text-blue-700 text-sm hover:underline">{title}</div>

            <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold text-lg">
                    {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                    }).format(finalPrice)}
                </span>

                {discount > 0 && (
                    <>
                        <span className="line-through text-gray-400 text-sm">
                            {new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                            }).format(price)}
                        </span>

                        <span className="text-red-500 text-sm">{status}</span>
                    </>
                )}
            </div>

            <div className="flex items-center text-sm">{stars}</div>

            <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
                <div
                    className="bg-yellow-400 h-2"
                    style={{ width: `${soldPercent}%` }}
                />
            </div>

            <div className="text-sm text-gray-500">Sold: {sold}</div>
        </div>
    );
}
