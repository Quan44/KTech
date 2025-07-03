type NewFeedProps = {
    image?: string;
    content?: string;
    views?: string;
    discount?: number;
}

export default function NewFeedCard({ image, content, views, discount }: NewFeedProps) {
    return (
        <>
            <div className="flex flex-col gap-2">
                <div className="relative">
                    <img className="w-full rounded-2xl h-[200px]" src={image} alt="Image" />
                    {discount && <span className="absolute w-[50px] h-[30px] flex items-center justify-center text-blue-50 rounded bg-amber-500 top-0 right-0">20%</span>}
                </div>
                {content && <span className="font-medium">{content}</span>}
                {views && <span className="text-red-500">{views}</span>}
            </div>
        </>
    )
}