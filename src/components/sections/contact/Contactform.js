import React from 'react';
import Contacthelper from '../../../helper/Contacthelper';
import ReCAPTCHA from "react-google-recaptcha";
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
                        <form onSubmit={this.handleSubmit} method="GET">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="text" placeholder="Ingrese su nombre completo" name="name" value={this.state.name} onChange={this.onNameChange} required />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="email" placeholder="Correo electrónico" name="email" value={this.state.email} onChange={this.onEmailChange} required />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="number" placeholder="Número de teléfono" name="phone" value={this.state.phone} onChange={this.onPhoneChange} required />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="text" placeholder="Asunto" name="subject" value={this.state.subject} onChange={this.onSubjectChange} required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea rows={10} placeholder="Tu Mensaje" name="message" value={this.state.message} onChange={this.onMessageChange} required />
                                    </div>
                                </div>
                                <ReCAPTCHA
                                    sitekey="6LdxUhMaAAAAAIrQt-_6Gz7F_58S4FlPWaxOh5ib"
                                    onChange={this.reCaptchaLoaded.bind(this)}
                                    size="invisible"
                                />
                                <div className="col-12">
                                    <div className="form-group form-check">
                                        <input type="checkbox" id="acceptPrivacy" name="acceptPrivacy" />
                                        <label htmlFor="acceptPrivacy" style={{ marginLeft: 8 }}>
                                        He leído y acepto el <Link to="/aviso-privacidad">Aviso de Privacidad</Link>.
                                        </label>
                                    </div>
                                </div>

                                <div className="col-12 text-center">
                                    <button type="submit">Enviar Mensaje</button>
                                    {/* Form Messages */}
                                    <Alert variant="success" className="d-none mt-3 mb-0" id="server_response_success">
                                        <strong>Success!</strong> El formulario de contacto ha sido enviado con éxito.
                                    </Alert>
                                    <Alert variant="danger" className="d-none mt-3 mb-0" id="server_response_danger">
                                        <strong>Oops!</strong> Algo salió mal. Por favor, inténtalo de nuevo más tarde.
                                    </Alert>
                                    {/* Form Messages */}
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