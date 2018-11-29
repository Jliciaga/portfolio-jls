import React from 'react';
import Particles from 'react-particles-js';
import './style.scss';

const Parallax = () => (
        <Particles  params={{
            "particles": {
                "number": {
                    "value": 50
                },
                "size": {
                    "value": 3
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
            }
        }}
        style={{
            position: 'fixed',
            zIndex: -1
        }} />
)

export default Parallax;