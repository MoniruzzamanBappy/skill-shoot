import React from 'react';
import Link from 'next/link';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    path?: string;
    variant?: 'primary' | 'outlined' | "secondary" | 'text';
    fullWidth?: boolean;
    width?: string;
    disabled?: boolean;
}

const Button = (p: Props) =>
    p.path ? (
        <Link href={p.path}>
            <Btn {...p}>{p.children}</Btn>
        </Link>
    ) : (
        <Btn {...p}>{p.children}</Btn>
    );

export default Button;

const Btn = (p: Props) => {

    let style = 'px-6 rounded-md py-3 sm:text-xl text-[14px] font-bold border';
    switch (p.variant || 'primary') {
        case 'primary':
            style += ` bg-primary border-primary text-white`;
            break;
        case 'secondary':
            style += ` bg-secondary border-secondary text-white`;
            break;
        case 'outlined':
            style += ` bg-transparent border-gray-300 text-gray-800`;
            break;
    }

    return (
        <button
            onClick={p.onClick}
            className={`flex items-center justify-center gap-x-2 shadow-xs hover:shadow active:shadow-none transition-colors duration-300 rounded group font-semibold whitespace-nowrap ${style} ${p.className}`}
            disabled={p.disabled}
        >
            {p.children}
        </button>
    );
};
