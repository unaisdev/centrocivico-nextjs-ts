import React, { useState, useEffect } from 'react';
import { cookies } from 'next/headers';

interface CookiesProps {
    onAccept: () => void;
    onReject: () => void;
}

interface Cookies {
    name: string;
    value: boolean;
}

const Cookies: React.FC<CookiesProps> = ({ onAccept, onReject }) => {
    const cookieStore = cookies();
    const cookie = cookieStore.get('aceptadas');

    useEffect(() => {
        cookie?.value === "true" ? onAccept() : onReject();
    }, []);

    const handleAccept = () => {
        cookieStore.set({name: 'acceptedCookies', value: "true"});
    };

    const handleReject = () => {
        cookieStore.set({name: 'acceptedCookies', value: "false"});
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800 text-white">
            <div className="max-w-screen-lg mx-auto">
                <div className="flex items-center justify-between">
                    <p className="text-sm">Este sitio web utiliza cookies para mejorar la experiencia del usuario. Por favor, acepta las cookies para continuar.</p>
                    <div className="flex gap-4">
                        <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition duration-300" onClick={handleAccept}>Aceptar</button>
                        <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition duration-300" onClick={handleReject}>Rechazar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cookies;