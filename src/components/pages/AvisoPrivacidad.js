import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headertwo';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';

const pagelocation = "Aviso de Privacidad";

class AvisoPrivacidad extends Component {
  render() {
    const texto = `🦷 Aviso de Privacidad Integral – Dental Díaz

Dental Díaz, con domicilio en Lombardo Toledano 760-2, Colonia Juventud 2000, Mexicali, Baja California, C.P. 21353, y cuya titular es Janeth Díaz Sandoval (en lo sucesivo “la Clínica”), es responsable del uso y protección de sus datos personales, y al respecto le informa lo siguiente:

1. Datos personales que recabamos
Los datos personales que podemos solicitar a través de nuestro formulario de contacto son:
- Nombre completo
- Teléfono
- Correo electrónico
- Motivo de la cita o consulta

En caso de ser paciente, podremos solicitar información adicional relacionada con su salud dental para fines de historial clínico.

2. Finalidad del tratamiento de los datos
Sus datos personales serán utilizados para las siguientes finalidades primarias:
- Agendar citas y dar seguimiento a consultas
- Brindar información sobre servicios odontológicos
- Elaborar expedientes clínicos cuando sea necesario

Adicionalmente, y solo si usted lo autoriza, podremos utilizar su información para:
- Envío de promociones, recordatorios y publicidad de servicios de la Clínica

3. Transferencia de datos
Sus datos no serán compartidos con terceros sin su consentimiento, salvo por requerimientos legales o autoridades competentes.

4. Derechos ARCO
Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al uso de sus datos personales (Derechos ARCO).
Para ejercer estos derechos, puede enviar una solicitud al correo: drajanethdiaz@hotmail.com, o comunicarse al teléfono 686 838 0108.

Su solicitud deberá contener:
- Nombre completo
- Descripción clara de los datos sobre los que busca ejercer derechos
- Copia de una identificación oficial

5. Revocación del consentimiento
En cualquier momento puede revocar el consentimiento para el uso de sus datos personales enviando un correo a drajanethdiaz@hotmail.com.
En caso de no querer recibir publicidad, puede solicitarlo en el mismo medio.

6. Uso de cookies
Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar la experiencia de navegación. Usted puede deshabilitarlas desde la configuración de su navegador.

7. Cambios al Aviso de Privacidad
Este Aviso de Privacidad puede modificarse para cumplir con nuevas disposiciones legales. Las actualizaciones estarán disponibles en nuestro sitio web.

Última actualización: 23 de septiembre de 2025`;

    return (
      <Fragment>
        <MetaTags>
          <title>Dental Díaz | {pagelocation}</title>
          <meta name="description" content="Aviso de privacidad de Dental Díaz" />
        </MetaTags>

        <Header />
        <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />

        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3>Aviso de Privacidad Integral – Dental Díaz</h3>
                <div style={{ whiteSpace: 'pre-wrap' }} className="mt-4">
                  {texto}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </Fragment>
    );
  }
}

export default AvisoPrivacidad;
