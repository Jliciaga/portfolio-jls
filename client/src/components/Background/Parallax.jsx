import React from 'react';
import Particles from 'react-particles-js';

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
            zIndex: -5
        }} />
)

export default Parallax;
