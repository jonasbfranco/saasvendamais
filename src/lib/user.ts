import { compareSync } from "bcrypt-ts";
import db from "./db";

type User = {
    email: string;
    name: string;
    password?: string;
    active?: boolean;
}

export async function findUserByCredentials(email: string, password: string): Promise<User | null> {
    const user = await db.user.findFirst({
        where: {
            email: email,
        },
    });

    if (!user || !user.active) {
        return null;
    }

    // const passwordMatch = compareSync(password, user.password);
    const passwordMatch = user.password ? compareSync(password, user.password) : false;


    if (passwordMatch) {
        return { email: user.email, name: user.name };
    }

    return null;
}
