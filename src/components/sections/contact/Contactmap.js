import React, { Component } from "react";

class Contactmap extends Component {
  componentDidMount() {
    if (window.google && window.google.maps) {
      this.initMap();
    } else {
      console.error("Google Maps no está cargado aún");
    }
  }

  initMap() {
    const location = {
      lat: 32.6015864342898,
      lng: -115.47291500326071,
    };

    const map = new window.google.maps.Map(
      document.getElementById("map"),
      {
        zoom: 15,
        center: location,
      }
    );

    new window.google.maps.Marker({
      position: location,
      map,
    });
  }

  render() {
    return (
      <div className="sigma_contact-map">
        <div id="map" style={{ height: "600px", width: "100%" }} />
      </div>
    );
  }
}

export default Contactmap;

// import React, { Component } from "react";
// import Loader from "@googlemaps/js-api-loader";

// class Contactmap extends Component {
//   componentDidMount() {
//     const loader = new Loader({
//       apiKey: "AIzaSyDHOdxOiCN5I6Fzk5gVNJiGfc9awkRt0HA",
//       version: "weekly",
//     });

//     loader.load().then(() => {
//       const location = {
//         lat: 32.6015864342898,
//         lng: -115.47291500326071,
//       };

//       const map = new window.google.maps.Map(
//         document.getElementById("map"),
//         {
//           zoom: 15,
//           center: location,
//         }
//       );

//       new window.google.maps.Marker({
//         position: location,
//         map,
//       });
//     });
//   }

//   render() {
//     return (
//       <div className="sigma_contact-map">
//         <div id="map" style={{ height: "600px", width: "100%" }} />
//       </div>
//     );
//   }
// }

// export default Contactmap;