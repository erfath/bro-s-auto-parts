import React from 'react';

const Button = ({children}) => {
    return (
        <button className="btn btn-primary font-bold uppercase text-white bg-primary hover:bg-info border-0">{children}</button>
    );
};

export default Button;