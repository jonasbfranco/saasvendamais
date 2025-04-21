
import Link from "next/link";
import LoginForm from "./login-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";


export default async function Login() {

    //const data = useActionState();
    const session = await auth();
    
    if (session) {
        return redirect("/dashboard");
    }

    

    return (
            <div className="flex flex-col justify-center items-center h-screen w-screen p-4">
            
                <div className="bg-white w-full md:w-96 rounded-2xl">
                    
                    <LoginForm />

                </div>

                <p className="text-sm text-muted-foreground mt-6">
                        Não possui cadastro?{' '}
                        <Link className="text-violet-400 hover:underline" href="/cadastro">
                        Faça seu cadastro
                        </Link>
                        .
                    </p>

            </div>
    );
};