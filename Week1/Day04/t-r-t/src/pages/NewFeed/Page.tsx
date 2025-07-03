import NewFeedCard from "@/components/NewFeedCard";
import { FC } from "react";

const dataNewFeed = [
    {
        image: "/assets/images/newFeed/newfeed1.jpg",
        content: "Hà Nội: Cận cảnh đường phố vắng vẻ trong ngày đầu thực hiện giãn cách xã hội",
        views: "1.2K lượt xem"
    },
    {
        image: "/assets/images/newFeed/newfeed2.jpg",
        content: "TP.HCM: Người dân đổ xô đi mua hàng hóa tích trữ trước giờ giãn cách",
        views: "800 lượt xem"
    },
    {
        image: "/assets/images/newFeed/newfeed3.jpg",
        content: "Đà Nẵng: Cảnh sát giao thông kiểm tra y tế người dân trên đường phố",
        views: "500 lượt xem"
    },
    {
        image: "/assets/images/newFeed/newfeed4.jpg",
        content: "Hải Phòng: Người dân xếp hàng dài chờ xét nghiệm COVID-19",
        views: "1K lượt xem"
    }
]

const NewFeed: FC = () => {
    return (
        <>
            <section className="h-screen w-full flex items-center justify-center">
                <div className="flex bg-base-200 w-full h-full justify-center">
                    <div className="flex flex-col p-5 mb-4">
                        <div className="flex items-center justify-between">
                            <h1 className="font-bold uppercase pb-5">Tin mới</h1>
                            <span className="font-medium pb-5">Xem thêm</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                            {dataNewFeed.map((item, index) => (
                                <NewFeedCard
                                    key={index}
                                    image={item.image}
                                    content={item.content}
                                    views={item.views}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewFeed;