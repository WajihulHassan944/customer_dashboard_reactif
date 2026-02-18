import React from "react";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
    return (
        <div className={`p-3  w-full ${className}`}>
            {children}
        </div>
    );
};

export default Container;
