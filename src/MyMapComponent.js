import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
function MyRGM(props) {
  const position = { lat: -34.397, lng: 150.644 };
  return (
    <GoogleMap defaultZoom={8} defaultCenter={position}>
      {props.isMarkerShow & <Marker position={position}></Marker>}
    </GoogleMap>
  );
}
const MyRGMWrapped = withScriptjs(withGoogleMap(MyRGM));
export default function MyMapComponent() {
  return (
    <MyRGMWrapped
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAv-gQfsVWULK4vu2THDXFXUmg9cc-MVz4&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}
