"use client";

import { InputHTMLAttributes } from "react";

export interface InputTextoProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export default function InputTexto(props: InputTextoProps) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-zinc-400">{props.label}</label>
            <input
                {...props}
                className="bg-zinc-800 rounded-md p-2 focus:outline-none focus:border-2 border-zinc-200"
            />
        </div>
    );
}
