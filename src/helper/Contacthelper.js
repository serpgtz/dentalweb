import React, { Component, Fragment } from 'react';

class Contacthelper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            subject: '',
            message: '',
            isVerified: false,
            recaptchaToken: ''
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onSubjectChange = this.onSubjectChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.reCaptchaLoaded = this.reCaptchaLoaded.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onNameChange(event) { 
        this.setState({ name: event.target.value })
    }
    onPhoneChange(event) {
        this.setState({ phone: event.target.value })
    }
    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }
    onSubjectChange(event) {
        this.setState({ subject: event.target.value })
    }
    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }
    // REcaptcha
    reCaptchaLoaded(value) {
        this.setState({
            isVerified: Boolean(value),
            recaptchaToken: value || ''
        });
    }
    showServerMessage(type) {
        const successMessage = document.getElementById("server_response_success");
        const dangerMessage = document.getElementById("server_response_danger");

        if (successMessage) {
            successMessage.classList.remove("d-block");
            successMessage.classList.add("d-none");
        }

        if (dangerMessage) {
            dangerMessage.classList.remove("d-block");
            dangerMessage.classList.add("d-none");
        }

        const message = type === 'success' ? successMessage : dangerMessage;
        if (message) {
            message.classList.remove("d-none");
            message.classList.add("d-block");
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        // Validar checkbox de Aviso de Privacidad
        const acceptCheckbox = document.getElementById('acceptPrivacy');
        if (!acceptCheckbox || !acceptCheckbox.checked) {
            alert('Debes aceptar el Aviso de Privacidad para enviar el formulario.');
            return;
        }

        fetch('https://dentaldiazmxli.com/api/contacto', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`Error del servidor: ${response.status}`);
            }

            return response.text();
        }).then((responseText) => {
            let response = {};

            if (responseText) {
                try {
                    response = JSON.parse(responseText);
                } catch (error) {
                    response = { message: responseText };
                }
            }

            if (response.success === false || response.error) {
                this.showServerMessage('danger');
            } else {
                this.showServerMessage('success');
                this.resetForm();
                this.setState({
                    isVerified:true
                })
            }
        }).catch((error) => {
            console.error('Error al enviar el formulario:', error);
            this.showServerMessage('danger');
        })
    }
    resetForm() {
        this.setState({ name: "", phone: "", email: "", subject: "", message: "", isVerified: false, recaptchaToken: "" })
    }
    render() {
        return (
            <Fragment />
        );
    }
}

export default Contacthelper;
