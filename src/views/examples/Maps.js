
import React from "react";
// reactstrap components
import { Card, Container, Row } from "reactstrap";

// core components


const MapWrapper = () => {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "35.821430";
    let lng = "10.634422";
    const myLatlng = new google.maps.LatLng(lat, lng);
    let lat1 = "36,4542";
    let lng1 = "10,7347";
    const myLatlng1 = new google.maps.LatLng(lat1, lng1);

    const mapOptions = {
      zoom: 14,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
      styles: [
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [{ color: "#444444" }]
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [{ color: "#f2f2f2" }]
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [{ visibility: "off" }]
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [{ saturation: -100 }, { lightness: 45 }]
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [{ visibility: "simplified" }]
        },
        {
          featureType: "road.arterial",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }]
        },
        {
          featureType: "transit",
          elementType: "all",
          stylers: [{ visibility: "off" }]
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [{ color: "#5e72e4" }, { visibility: "on" }]
        }
      ]
    };
    
    
// Default marker with title text (no PinView).


    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Light Bootstrap Dashboard PRO React!"
    });
    

    const contentString =
      '<div class="info-window-content"><h2>Light Bootstrap Dashboard PRO React</h2>' +
      "<p>A premium Admin for React-Bootstrap, Bootstrap, React, and React Hooks.</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
   

  }, []);
  return (
    <>
      <div
        style={{ height: `600px` }}
        className="map-canvas"
        id="map-canvas"
        ref={mapRef}
      ></div>
    </>
  );
};

const Maps = () => {
  return (
    <>
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
              <MapWrapper />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Maps;
