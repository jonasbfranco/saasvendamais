import Link from "next/link";
import RegisterForm from "./register-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Login() {

    const session = await auth();
    
    if (session) {
        return redirect("/dashboard");
    };

    return (
            <div className="flex flex-col justify-center items-center h-screen w-screen p-4">
               
                <div className="bg-white w-full md:w-96 rounded-2xl">

                    <RegisterForm />                    

                </div>

                <p className="text-sm text-muted-foreground mt-6">
                        Já possui cadastro?{' '}
                        <Link className="text-violet-400 hover:underline" href="/login">
                        Faça o login
                        </Link>
                        .
                    </p>

            </div>
    );
};