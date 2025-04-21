"use client";

//import InitialNameLetters from "@/app/components/template/NameColor";
import type { Session } from "next-auth"
import Image from "next/image"

/* interface UserAvatarProps {
    session?: Session;
    loading?: boolean;
}
 */

export function UserAvatar({ session }: { session: Session | null }) {
//export function UserAvatar({ session, loading = false }: UserAvatarProps) {
  
  /* if (loading) {
        return (
            <div className="flex items-center ml-4 space-x-4 animate-pulse">
                <div className="w-10 h-10 rounded-full bg-zinc-700" />
                <div className="h-4 w-32 bg-zinc-700 rounded" />
            </div>
        );
    } */

  const nome = session?.user?.name ?? "Usuário";
  //const imagem = session?.user?.image ?? "/avatar-placeholder.png"; // ou deixa sem
  const imagem = session?.user?.image ?? `https://ui-avatars.com/api/?name=${nome}&background=random`;
  //const imagem = "/assets/avatar/user-avatar.png" ?? `https://ui-avatars.com/api/?name=${nome}&background=random`;


  console.log(imagem);


  return (
    <div className="flex flex-row items-center gap-4">

    {/* <img
        className="w-10 h-10 rounded-full mb-4"
        src={session?.user?.image ?? "https://i.pravatar.cc/300"}
        alt="User Avatar"
    /> */}


      <Image
        className="w-10 h-10 rounded-full ml-4"
        //src={session?.user?.image ?? "https://i.pravatar.cc/300"}
        src={imagem}
        alt="User Avatar"
        width={40}
        height={40}
      />


      { /* <span className="text-zinc-200 text-md">Bem vindo, <br /> {session?.user?.name} !</span> */ }
      { /* <span><InitialNameLetters cliente={{ nome }} /></span> */ }
      <span className="text-zinc-200 text-md">Bem vindo, <br /> { nome } !</span>
      
    </div>
  )
}

