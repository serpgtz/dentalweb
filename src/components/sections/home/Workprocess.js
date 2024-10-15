import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import workprocess from "../../../data/workprocess.json";

class Workprocess extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-5">
                            <div className="section-title">
                                <span className="subtitle">Contáctanos</span>
                                <h3 className="title mb-0">¿Cómo te atendemos?</h3>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <p className="mb-0">Llámanos o visítanos en cualquiera de nuestras dos clínicas, o a los teléfonos 686 838 01 08 y 686 517 16 83, o desde EE.UU. al 011+52 (686) 517 16 83.</p>
                        </div>
                        <div className="col-lg-3 text-lg-right">
                            <Link to="/appointment" className="sigma_btn mt-4 mt-lg-0">Make Appointment</Link>
                        </div>
                    </div>
                    <div className="row sigma_info-wrapper style-25">
                        {/* Data */}
                        {workprocess.map((item, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <div className="sigma_info style-25 d-block d-xl-flex">
                                    <div className="sigma_info-title">
                                        <span className="sigma_info-icon">
                                            <i className={item.icon} />
                                        </span>
                                    </div>
                                    <div className="sigma_info-description mt-4 mt-xl-0">
                                        <h5 dangerouslySetInnerHTML={{ __html: item.title }} />
                                        <p>{item.text}</p>
                                        <span className="steps">Step {1 + i}</span>
                                        <span className="pulsive-dot" />
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Data */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Workprocess;