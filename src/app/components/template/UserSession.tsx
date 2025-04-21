"use client";

import { useSession } from "next-auth/react";
import { UserAvatar } from "./UserAvatar";


export function UserSession() {
    const { data: session, status } = useSession();
    //const { data: session } = useSession();

    return (
        <div className="mb-6">
            {status === "loading" || !session ? (
                <div className="flex items-center ml-4 space-x-4 animate-pulse">
                    <div className="w-10 h-10 rounded-full bg-zinc-700" />
                    <div className="h-4 w-32 bg-zinc-700 rounded" />
                </div>
            ) : (
                <div className="flex items-center ml-4">
                    <UserAvatar session={session} />
                </div>
            )}
        </div>
    );
}



    

