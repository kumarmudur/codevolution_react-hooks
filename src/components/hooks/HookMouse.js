import React, { useEffect, useState } from 'react';

const HookMouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            console.log('component unmounting code');
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    const handleMouseMove = (event) => {
        console.log('mouse event');
        setX(event.clientX);
        setY(event.clientY);
    }

    return (
        <div>
            Hooks X - { x } Y - { y }
        </div>
    );
};

export default HookMouse;