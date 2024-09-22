import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Redes extends Component {
    render() {
        return (
            <div className="sigma_header-top-contacts">
                <div className='container redes'> {/* Asegúrate de que este div tenga la clase 'redes' */}
                    <ul className="sigma_header-top-nav">
                        <li>
                            <Link to="#"><i className="fab fa-facebook-f" /></Link>
                        </li>
                        <li>
                            <Link to="#"><i className="fab fa-twitter" /></Link>
                        </li>
                        <li>
                            <Link to="#"><i className="fab fa-linkedin-in" /></Link>
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
