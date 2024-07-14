import React from 'react';

export const Empty: React.FC = () => {
    return (
        <div className="w-full bg-gray-500 h-[100vh] flex items-center justify-center">
            <div className="text-2xl text-white">Nothing was found</div>
        </div>
    );
};