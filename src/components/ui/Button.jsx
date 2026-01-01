import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({ children, to, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-8 py-3 font-medium transition-all duration-300 rounded-full focus:outline-none";

    const variants = {
        primary: "bg-black text-white hover:bg-gray-800 hover:text-white shadow-lg hover:shadow-xl font-bold",
        outline: "border-2 border-black text-black hover:bg-black hover:text-white font-bold",
        accent: "bg-gray-800 text-white hover:bg-black hover:text-white shadow-lg font-bold",
    };

    const Component = to ? Link : motion.button;

    return (
        <Component
            to={to}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Button;
