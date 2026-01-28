import React from 'react';
import Contacthelper from '../../../helper/Contacthelper';
// import ReCAPTCHA from "react-google-recaptcha";
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Contactform extends Contacthelper {
    render() {
        return (
            <div className="section pt-0">
                <div className="container">
                    <div className="section-title centered">
                        <span className="subtitle">Contáctanos ahora</span>
                        <h3 className="title">Solicitar información</h3>
                    </div>

                    <div className="sigma_form style-2">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder="Ingrese su nombre completo"
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.onNameChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            placeholder="Correo electrónico"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.onEmailChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input
                                            type="number"
                                            placeholder="Número de teléfono"
                                            name="phone"
                                            value={this.state.phone}
                                            onChange={this.onPhoneChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder="Asunto"
                                            name="subject"
                                            value={this.state.subject}
                                            onChange={this.onSubjectChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea
                                            rows={10}
                                            placeholder="Tu Mensaje"
                                            name="message"
                                            value={this.state.message}
                                            onChange={this.onMessageChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* RECAPTCHA DESHABILITADO TEMPORALMENTE */}
                                {/*
                                <ReCAPTCHA
                                    sitekey="TU_SITE_KEY_AQUI"
                                    onChange={this.reCaptchaLoaded.bind(this)}
                                    size="invisible"
                                />
                                */}

                                <div className="col-12">
                                    <div className="form-group form-check">
                                        <input
                                            type="checkbox"
                                            id="acceptPrivacy"
                                            name="acceptPrivacy"
                                            required
                                        />
                                        <label htmlFor="acceptPrivacy" style={{ marginLeft: 8 }}>
                                            He leído y acepto el{' '}
                                            <Link to="/aviso-privacidad">Aviso de Privacidad</Link>.
                                        </label>
                                    </div>
                                </div>

                                <div className="col-12 text-center">
                                    <button type="submit">Enviar Mensaje</button>

                                    <Alert
                                        variant="success"
                                        className="d-none mt-3 mb-0"
                                        id="server_response_success"
                                    >
                                        <strong>¡Listo!</strong> El formulario fue enviado correctamente.
                                    </Alert>

                                    <Alert
                                        variant="danger"
                                        className="d-none mt-3 mb-0"
                                        id="server_response_danger"
                                    >
                                        <strong>Error:</strong> Algo salió mal. Intenta más tarde.
                                    </Alert>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contactform;
