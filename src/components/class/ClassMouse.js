import React, { Component } from 'react';

class ClassMouse extends Component {
    state = {
        x: 0,
        y: 0,
    }

    handleMouseMove = event => {
        this.setState({ x: event.clientX, y: event.clientY });
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.handleMouseMove);
    }

    render() {
        const { x, y} =this.state
        return (
            <div>
                X - { x } Y - { y }
            </div>
        );
    }
}

export default ClassMouse;