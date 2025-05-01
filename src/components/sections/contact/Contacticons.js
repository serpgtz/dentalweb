import React, { Component } from 'react';

class Contacticons extends Component {
    render() {
        return (
            <div className="section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="sigma_info style-24">
                                <div className="sigma_info-title">
                                    <span className="sigma_info-icon bg-primary-1 text-white">
                                        <i className="flaticon-hospital" />
                                    </span>
                                </div>
                                <div className="sigma_info-description">
                                    <h5>Ubicaciones</h5>
                                    <p>Lombardo Toledano 760 Juventud 2000 Y Teresa de Mier 800 Independencia</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="sigma_info style-24">
                                <div className="sigma_info-title">
                                    <span className="sigma_info-icon bg-primary-1 text-white">
                                        <i className="flaticon-call" />
                                    </span>
                                </div>
                                <div className="sigma_info-description">
                                    <h5>Teléfonos de contacto</h5>
                                    <p>Tel 6868 38 01 08</p>
                                    <p>Tel 6865 17 16 83</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="sigma_info style-24">
                                <div className="sigma_info-title">
                                    <span className="sigma_info-icon bg-primary-1 text-white">
                                        <i className="flaticon-envelope" />
                                    </span>
                                </div>
                                <div className="sigma_info-description">
                                    <h5>Correo electronico</h5>
                                    <p>Contacto@dentaldiaz.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contacticons;