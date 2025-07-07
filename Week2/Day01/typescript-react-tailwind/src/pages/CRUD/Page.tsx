import List from "@/components/List";
import Create from "@/components/Create";
import { FC, useEffect, useState } from "react";

const CRUDPage: FC = () => {

    const [reload, setReload] = useState(0);

    useEffect(() => {
        document.title = 'CRUD';
    }, [])

    const handleOnCreated = (customer: any) => {
        console.log('Customer created:', customer);
        // You can add logic here to refresh the list or show a success message
        setReload((prev) => prev + 1);
    };

    return (
        <>
            <section>
                <div className="flex min-h-[calc(100vh-64px)] bg-base-200 w-full justify-center">
                    <div className="hero-content flex-col lg:flex-row">
                        <div>
                            <h1 className="text-3xl font-bold mb-5">Welcome CRUD</h1>
                            <Create onCreated={handleOnCreated} />
                            <List reload={reload} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CRUDPage;
