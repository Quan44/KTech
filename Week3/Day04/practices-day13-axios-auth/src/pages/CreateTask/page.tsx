import { useAuthStore } from "@/useAuthStore";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function CreateTask() {
    const navigate = useNavigate()
    const { loggedInUser } = useAuthStore();

    useEffect(()=>{
        if(!loggedInUser) {
            navigate('/login');
        }
        //Kiem tra tiep xem co role customer hay khong
        if(loggedInUser && !loggedInUser.roles.some(role => role.name === 'Administrators')) {
            navigate('/access-denied'); 
        }

    },[loggedInUser, navigate])

    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <h1 className=" text-lg text-center text-red-500">Create Task</h1>
        </div>
    );
}