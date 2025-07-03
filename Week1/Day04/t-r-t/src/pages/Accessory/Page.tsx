import ImageCard from "@/components/ImageCard";
import { FC } from "react";

const dataAccsessory = [
    {
        id: 1,
        image: "/assets/images/accessory/airpod-3.png",
        title: "Cáp chuyển đổi USB-C sang SD Card",
        price: 1000000,
        discount: 25,
    },
    {
        id: 2,
        image: "/assets/images/accessory/Apple-USBC-To-SDCard-A.jpg",
        title: "Adapter sạc Apple 20W USB-C",
        price: 840000,
    },
    {
        id: 3,
        image: "/assets/images/accessory/cap-lightning-to-usb-cable-md818zma-1.jpg",
        title: "Cáp sạc lightning 2m",
        price: 520000,
    },
    {
        id: 4,
        image: "/assets/images/accessory/type-c-20-w.png",
        title: "AirPods Pro 3",
        price: 1450000,
        discount: 20,
    },
];

const Accessory: FC = () => {
    return (
        <>
            <section className="h-full w-full flex items-center justify-center">
                <div className="flex flex-col bg-green-100 w-full h-full">
                    <span className="font-bold text-2xl p-5">Phụ kiện tương thích</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
                        {dataAccsessory.map((item, index) => (
                            <ImageCard
                                key={index}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                discount={item.discount}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Accessory;
