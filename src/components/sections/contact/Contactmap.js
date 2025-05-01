// import React, { Component } from 'react';

// class Contactmap extends Component {
//     render() {
//         return (
//             <div className="sigma_contact-map">
//                 <iframe title="contactmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5234.235665104514!2d-115.4671!3d32.6606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d8ad49740f3fa7%3A0x8a5d3b1a54deab93!2sMexicali%2C%20B.C.%2C%20México!5e0!3m2!1ses!2smx!4v1676346798765!5m2!1ses!2smx" height={600} allowFullScreen>
//                 </iframe>
//             </div>
//         );
//     }
// }

// export default Contactmap;

import React, { Component } from 'react';

class Contactmap extends Component {
  componentDidMount() {
    this.initMap();
  }

  initMap() {
    const location = { lat: 32.6015864342898, lng: -115.47291500326071 };
    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: location,
    });

    const marker = new window.google.maps.Marker({
      position: location,
      map: map,
      icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png', // Ícono personalizado
    });
  }

  render() {
    return (
      <div className="sigma_contact-map">
        <div id="map" style={{ height: '600px', width: '100%' }}></div>
      </div>
    );
  }
}

export default Contactmap;
