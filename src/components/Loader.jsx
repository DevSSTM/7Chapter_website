import React, { useState, useEffect } from 'react';

const Loader = ({ onComplete }) => {
    const [stage, setStage] = useState(0); // 0: Black, 1: Ash, 2: Dark Green

    useEffect(() => {
        const timer1 = setTimeout(() => setStage(1), 1000); // Black -> Ash
        const timer2 = setTimeout(() => setStage(2), 2000); // Ash -> Dark Green
        const timer3 = setTimeout(() => {
            if (onComplete) onComplete();
        }, 3000); // End

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [onComplete]);

    const getBackground = () => {
        switch (stage) {
            case 0: return 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)'; // Black Gradient
            case 1: return 'linear-gradient(135deg, #B2B2B2 0%, #737373 100%)'; // Ash Gradient
            case 2: return 'linear-gradient(135deg, #006400 0%, #003300 100%)'; // Dark Green Gradient
            default: return 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)';
        }
    };

    const getTextColor = () => {
        switch (stage) {
            case 0: return 'text-white'; // White text on Black
            case 1: return 'text-black'; // Black text on Ash
            case 2: return 'text-white'; // White text on Dark Green
            default: return 'text-white';
        }
    };

    const getTextContent = () => {
        switch (stage) {
            case 0: return 'EVENT MANAGEMENT';
            case 1: return 'MARKETING AND BRANDING';
            case 2: return 'IT SOLUTION';
            default: return '';
        }
    };

    return (
        <div
            style={{ background: getBackground(), transition: 'background 1s ease-in-out' }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
        >
            <div className="relative text-center">
                <h1 className={`text-5xl md:text-7xl font-extrabold tracking-widest uppercase transition-colors duration-500 ${getTextColor()}`}>
                    {getTextContent()}
                </h1>
            </div>
        </div>
    );
};

export default Loader;
