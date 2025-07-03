import DealCard from "@/components/DealCard";
import { FC } from "react";

const dealData = [
    {
        id: 1,
        image: "/assets/images/deal/1.jpg",
        shop: "YOUNG SHOP",
        title: "LG White Front Load Steam Washer",
        price: 1422.7,
        discount: 20,
        status: "Bán chạy",
        rating: 4,
        sold: 10,
        soldPercent: 80,
    },
    {
        id: 2,
        image: "/assets/images/deal/2.jpg",
        shop: "Shop 2",
        title: "Samsung Galaxy S21 Ultra",
        price: 1199.99,
        discount: 15,
        status: "Mới",
        rating: 5,
        sold: 25,
        soldPercent: 90,
    },
    {
        id: 3,
        image: "/assets/images/deal/3.jpg",
        shop: "Shop 3",
        title: "Apple MacBook Pro M1",
        price: 1299.99,
        discount: 10,
        rating: 4.5,
        sold: 30,
        soldPercent: 70,
    },
    {
        id: 4,
        image: "/assets/images/deal/4.jpg",
        shop: "Shop 4",
        title: "Sony WH-1000XM4 Headphones",
        price: 349.99,
        discount: 25,
        status: "Giảm giá",
        rating: 5,
        sold: 50,
        soldPercent: 95,
    },
    {
        id: 5,
        image: "/assets/images/deal/5.jpg",
        shop: "Shop 5",
        title: "Dell XPS 13 Laptop",
        price: 999.99,
        discount: 30,
        rating: 4.8,
        sold: 15,
        soldPercent: 85,
    },
    {
        id: 6,
        image: "/assets/images/deal/6.jpg",
        shop: "Shop 6",
        title: "Bose SoundLink Revolve+ Speaker",
        price: 299.99,
        discount: 20,
        status: "Bán chạy",
        rating: 3,
        sold: 20,
        soldPercent: 75,
    },
]

const Deal: FC = () => {
    return (
        <>
            <section className="h-screen w-full flex items-center justify-center">
                <div className="flex flex-col bg-green-100 w-full h-full">
                    <span className="font-bold text-2xl p-5">Phụ kiện tương thích</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
                        {dealData.map((item, index) => (
                            <DealCard
                                key={index}
                                image={item.image}
                                shop={item.shop}
                                title={item.title}
                                price={item.price}
                                discount={item.discount}
                                status={item.status}
                                rating={item.rating}
                                sold={item.sold}
                                soldPercent={item.soldPercent}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Deal;
