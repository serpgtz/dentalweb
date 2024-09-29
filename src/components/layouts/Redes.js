import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Redes extends Component {
    render() {
        return (
            <div className="sigma_header-top-contacts">
                <div className='container redes'> {/* Asegúrate de que este div tenga la clase 'redes' */}
                    <ul className="sigma_header-top-nav">
                        <li>
                            <a href="https://www.facebook.com/DentalDiazmxl" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f" />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/dental_diazmxli/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram" />
                            </a>
                        </li>

                        
                        <li>
                            <Link to="#"><i className="fab fa-google" /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Redes;
