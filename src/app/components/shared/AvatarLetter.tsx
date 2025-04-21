import { useMemo } from "react";

function getInitials(nome: string): string {
    if (!nome) return "??"; // Caso o nome seja inválido
    const words = nome.split(" ");
    return words.length > 1
        ? words[0][0] + words[0][1] // Primeira letra do primeiro nome e segunda letra do primeiro nome
        : // ? words[0][0] + words[1][0] // Primeira letra do primeiro nome e primeira letra do segundo nome
          words[0][0]; // Apenas a primeira letra se for um único nome
}

function getRandomColor(): string {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export default function AvatarLetter({ cliente }: { cliente: { nome: string } }) {
    const initials = getInitials(cliente.nome).toUpperCase();
    const bgColor = useMemo(() => getRandomColor(), []); // Gera apenas uma vez

    return (
        <div
            className="flex items-center justify-center w-12 h-12 rounded-full text-white text-lg font-bold bg-slate-600"
            style={{ backgroundColor: bgColor }}
        >
            {initials}
        </div>
    );
}
