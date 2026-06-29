import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getService } from '../../../helper/serviceHelper';
// import Sidebar from '../../layouts/Servicesidebar';

const serviceInfo = {
    "Odontología": {
        benefits: ["Prevención de caries y enfermedad de encías", "Diagnóstico oportuno de molestias bucales", "Limpieza y orientación personalizada", "Plan de cuidado según tus hábitos"],
        signs: ["Sangrado de encías", "Dolor o sensibilidad dental", "Mal aliento persistente", "Más de 6 meses sin revisión"],
        process: ["Valoración clínica", "Revisión de encías y dientes", "Limpieza o tratamiento indicado", "Recomendaciones para casa"],
        faqs: [
            ["¿Cada cuánto debo acudir?", "Lo ideal es una revisión cada 6 meses, o antes si hay dolor, sangrado o sensibilidad."],
            ["¿La limpieza dental duele?", "Normalmente no. Si hay sensibilidad, adaptamos el procedimiento para que sea cómodo."]
        ]
    },
    "Ortodoncia": {
        benefits: ["Mejora la alineación de los dientes", "Favorece una mordida más funcional", "Facilita la higiene diaria", "Ayuda a sonreír con más confianza"],
        signs: ["Dientes encimados o separados", "Mordida abierta o cruzada", "Dificultad para masticar", "Deseo de mejorar la estética dental"],
        process: ["Evaluación inicial", "Estudios y diagnóstico", "Plan de tratamiento", "Controles periódicos"],
        faqs: [
            ["¿La ortodoncia es solo para niños?", "No. También puede realizarse en adultos después de una valoración profesional."],
            ["¿Cuánto dura el tratamiento?", "Depende de cada caso. En consulta se define un tiempo estimado realista."]
        ]
    },
    "Endodoncia": {
        benefits: ["Ayuda a conservar el diente natural", "Alivia dolor causado por infección", "Evita extracciones innecesarias", "Recupera función y tranquilidad"],
        signs: ["Dolor intenso o constante", "Sensibilidad prolongada al frío o calor", "Inflamación cerca del diente", "Cambio de color dental"],
        process: ["Radiografía y diagnóstico", "Anestesia local", "Limpieza del conducto", "Sellado y restauración"],
        faqs: [
            ["¿La endodoncia duele?", "Se realiza con anestesia local, por lo que el objetivo es que el procedimiento sea cómodo."],
            ["¿Qué pasa después?", "El diente suele necesitar una restauración para recuperar fuerza y función."]
        ]
    },
    "Periodoncia": {
        benefits: ["Controla inflamación y sangrado", "Protege el soporte de los dientes", "Ayuda a prevenir movilidad dental", "Mejora la salud bucal a largo plazo"],
        signs: ["Encías rojas o inflamadas", "Sangrado al cepillarte", "Retracción de encías", "Dientes con movilidad"],
        process: ["Valoración periodontal", "Limpieza profunda si es necesaria", "Control de placa y sarro", "Mantenimiento periódico"],
        faqs: [
            ["¿El sangrado de encías es normal?", "No. Suele indicar inflamación y conviene revisarlo a tiempo."],
            ["¿Se puede detener la enfermedad periodontal?", "Sí, con diagnóstico, tratamiento y mantenimiento adecuados."]
        ]
    },
    "Odontopediatría": {
        benefits: ["Prevención desde edad temprana", "Experiencia amable para niñas y niños", "Detección de caries y hábitos", "Acompañamiento en el desarrollo dental"],
        signs: ["Primera visita dental", "Dolor o caries visibles", "Miedo al dentista", "Dudas sobre higiene infantil"],
        process: ["Recibimiento amigable", "Revisión dental", "Tratamiento preventivo o correctivo", "Guía para mamá, papá o tutor"],
        faqs: [
            ["¿Cuándo debe ser la primera visita?", "Se recomienda acudir desde etapas tempranas para prevenir y crear confianza."],
            ["¿Cómo manejan el miedo?", "Con trato paciente, explicación clara y procedimientos adaptados a cada niño."]
        ]
    },
    "Estética Dental": {
        benefits: ["Mejora color, forma y armonía", "Resultados naturales y personalizados", "Aumenta confianza al sonreír", "Opciones conservadoras según el caso"],
        signs: ["Dientes manchados", "Fracturas pequeñas", "Espacios o formas irregulares", "Deseo de renovar la sonrisa"],
        process: ["Valoración estética", "Diseño de plan personalizado", "Tratamiento seleccionado", "Indicaciones de mantenimiento"],
        faqs: [
            ["¿Qué tratamiento necesito?", "Depende de tu sonrisa y objetivos. En la valoración se recomienda la opción más adecuada."],
            ["¿Los resultados se ven naturales?", "Ese es el objetivo: mejorar la sonrisa respetando tus rasgos y salud dental."]
        ]
    }
};

const defaultInfo = {
    benefits: ["Atención personalizada", "Diagnóstico profesional", "Tratamiento enfocado en tu bienestar", "Seguimiento claro"],
    signs: ["Dolor o molestia", "Cambios visibles en dientes o encías", "Dudas sobre tu salud bucal", "Necesidad de una revisión"],
    process: ["Valoración inicial", "Diagnóstico", "Plan de tratamiento", "Seguimiento"],
    faqs: [
        ["¿Necesito valoración previa?", "Sí. La valoración permite recomendar el tratamiento correcto para tu caso."],
        ["¿Puedo agendar una cita?", "Claro. Puedes solicitar una cita para revisar tu caso con calma."]
    ]
};

class Content extends Component {
    render() {
        const detailId = this.props.detailId;
        const item = getService(detailId);
        if (!item) {
            return null;
        }
        const title = item.title.trim();
        const info = serviceInfo[title] || defaultInfo;
        return (
            <div className="sidebar-style-9 service-details">
                <div className="section sigma_post-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="sigma_post-details-inner service-detail-main mb-md-80">
                                    <div className="entry-content">
                                        <img src={process.env.PUBLIC_URL + "/" + item.image} alt={title} className="service-detail-hero w-100" />
                                        <div className="row service-detail-gallery">
                                            {/* Data */}
                                            {item.gallery.map((image, i) => (
                                                <div className="col-md-4" key={i}>
                                                    <a rel={"external"} href={process.env.PUBLIC_URL + "/" + image} className="gallery-thumb">
                                                        <img src={process.env.PUBLIC_URL + "/" + image} alt={title} />
                                                    </a>
                                                </div>
                                            ))}
                                            {/* Data */}
                                        </div>
                                        <span className="service-detail-kicker">Tratamiento dental</span>
                                        <h2 className="entry-title">{title}</h2>
                                        <p className="service-detail-lead">{item.shorttext}</p>
                                        <div dangerouslySetInnerHTML={{ __html: item.htmltext }} />
                                    </div>

                                    <div className="service-detail-section">
                                        <h3>Beneficios principales</h3>
                                        <div className="row">
                                            {info.benefits.map((benefit, i) => (
                                                <div className="col-md-6" key={i}>
                                                    <div className="service-detail-point">
                                                        <i className="fal fa-check" />
                                                        <span>{benefit}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="service-detail-section">
                                        <h3>¿Cuándo conviene acudir?</h3>
                                        <ul className="service-detail-list">
                                            {info.signs.map((sign, i) => (
                                                <li key={i}>{sign}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="service-detail-section">
                                        <h3>Proceso de atención</h3>
                                        <div className="service-detail-steps">
                                            {info.process.map((step, i) => (
                                                <div className="service-detail-step" key={i}>
                                                    <span>{i + 1}</span>
                                                    <p>{step}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="service-detail-section service-detail-faq">
                                        <h3>Preguntas frecuentes</h3>
                                        {info.faqs.map((faq, i) => (
                                            <div className="service-detail-faq-item" key={i}>
                                                <h4>{faq[0]}</h4>
                                                <p>{faq[1]}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="service-detail-sidebar">
                                    <div className="service-detail-cta">
                                        <i className={item.icon} />
                                        <h3>Agenda tu valoración</h3>
                                        <p>Revisamos tu caso y te orientamos sobre el tratamiento más adecuado para tu sonrisa.</p>
                                        <Link to="/appointment" className="sigma_btn btn-block">Agendar cita</Link>
                                        <Link to="/contact" className="sigma_btn light btn-block">Contáctanos</Link>
                                    </div>
                                    <div className="service-detail-contact">
                                        <h4>Contacto directo</h4>
                                        <p><i className="fal fa-phone" /> 6868 38 01 08</p>
                                        <p><i className="fal fa-map-marker-alt" /> Lombardo Toledano, Juventud 2000</p>
                                        <p><i className="fal fa-envelope" /> contacto@dentaldiaz.com</p>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
