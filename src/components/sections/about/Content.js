import React, { Component, Fragment } from 'react';
import Counter from './Counter';
import Whyus from './Whyus';
import Workprocess from './Workprocess';
import Galleryslider from '../../layouts/Galleryslider';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <div className="section about-story-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="about-story-content">
                                    <span className="subtitle">Quiénes somos</span>
                                    <h2>16 años cuidando sonrisas en Mexicali</h2>
                                    <p>
                                        En Dental Díaz somos una clínica dental familiar comprometida con cuidar la salud bucal de cada paciente con atención cercana, honesta y profesional.
                                    </p>
                                    <p>
                                        Nuestra atención está guiada por la Dra. Janeth Díaz, acompañada por colaboradores especialistas en cada área para ofrecer tratamientos integrales, personalizados y enfocados en tu bienestar.
                                    </p>
                                    <blockquote>Sonríe todos los Díaz con Dental Díaz</blockquote>
                                    <div className="about-values">
                                        <span>Confianza</span>
                                        <span>Honestidad</span>
                                        <span>Calidad</span>
                                        <span>Profesionalismo</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="about-story-panel">
                                    <h3>Nuestras clínicas</h3>
                                    <div className="about-location">
                                        <i className="fal fa-map-marker-alt" />
                                        <div>
                                            <h5>Juventud 2000</h5>
                                            <p>Lombardo Toledano 760-3, Juventud 2000.</p>
                                        </div>
                                    </div>
                                    <div className="about-location">
                                        <i className="fal fa-map-marker-alt" />
                                        <div>
                                            <h5>Colonia Independencia</h5>
                                            <p>Fray Servando Teresa de Mier #800, esquina con Mocorito, Col. Independencia.</p>
                                        </div>
                                    </div>
                                    <div className="about-doctor">
                                        <i className="fal fa-user-md" />
                                        <p>Dra. Janeth Díaz y colaboradores especialistas en cada área.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Workprocess />
                <div className="section bg-secondary-1" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/pattern.png)" }}>
                    <div className="container">
                        <Whyus />
                        <Counter />
                    </div>
                </div>
                <div className="section pb-0 bg-gray" />
                <div className="section section-padding p-0">
                    <div className="container-fluid p-0">
                        <Galleryslider />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Content;
