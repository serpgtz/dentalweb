import React from 'react';
import Contacthelper from '../../../helper/Contacthelper';
import ReCAPTCHA from "react-google-recaptcha";
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Quote extends Contacthelper {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row justify-content-end position-relative">
                        <div className="sigma_contact-image style-6 d-none d-lg-block">
                            <img src={process.env.PUBLIC_URL + "/assets/img/home-2/480x590.jpg"} alt="img" />
                        </div>
                        <div className="col-lg-8">
                            <div className="sigma_form style-6">
                                <div className="section-title">
                                    <h3 className="title mb-1 text-white">Contactenos</h3>
                                    <p className="text-white">Estaremos Encantados de Atenderlo!</p>
                                </div>
                                <form onSubmit={this.handleSubmit} method="Get">
                                    <div className="form-group">
                                        <i className="fal fa-user" />
                                        <input type="text" placeholder="Nombre" name="name" value={this.state.name} onChange={this.onNameChange} required />
                                    </div>
                                    <div className="form-group">
                                        <i className="fal fa-envelope" />
                                        <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.onEmailChange} required />
                                    </div>
                                    <div className="form-group">
                                        <textarea rows={5} placeholder="Mensaje" name="message" value={this.state.message} onChange={this.onMessageChange} required />
                                    </div>
                                    <ReCAPTCHA
                                        sitekey="6LedxVksAAAAAPgKc-OPGpP-6ojXN0_Fx4Snbk9N"
                                        onChange={this.reCaptchaLoaded.bind(this)}
                                    />
                                    <div className="form-group form-check">
                                        <input
                                            type="checkbox"
                                            id="acceptPrivacy"
                                            name="acceptPrivacy"
                                            required
                                        />
                                        <label htmlFor="acceptPrivacy" className="text-white" style={{ marginLeft: 8 }}>
                                            He leído y acepto el{' '}
                                            <Link to="/aviso-privacidad" className="text-white">
                                                Aviso de Privacidad
                                            </Link>.
                                        </label>
                                    </div>
                                    <button type="submit" className="btn-block secondary">Enviar</button>
                                    {/* Form Messages */}
                                    <Alert variant="success" className="d-none mt-3 mb-0" id="server_response_success">
                                        <strong>Success!</strong> Contact form has been successfully submitted.
                                    </Alert>
                                    <Alert variant="danger" className="d-none mt-3 mb-0" id="server_response_danger">
                                        <strong>Oops!</strong> Something bad happened. Please try again later.
                                    </Alert>
                                    {/* Form Messages */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Quote;
