import axios from 'axios';
import {useState, useEffect} from 'react'
import {
    useQuery,
    useQueryClient,
  } from "react-query";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import '../App.css';  

  function useMaps() {
    return useQuery({
      queryKey: ["Maps"],
      queryFn: async () => {
        const { data } = await axios.get(
           "https://disease.sh/v3/covid-19/countries"
        );
        return data;
      },
    });
  }

const Maps = () => {

    const queryClient = useQueryClient();
    const { status, data, error, isFetching } = useMaps();

  return (
    <div style={{margin:'55px'}}>
      <MapContainer center={[51.505, -0.09]} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data?.map((ele:any, i:any) => (
          <Marker 
            key={i}
            position={[ele.countryInfo.lat, ele.countryInfo.long]}
          >
            <Popup position={[ele.countryInfo.lat, ele.countryInfo.long]}>
            <div>
                <h2>{"Country : " + ele.country}</h2>
                <p>{"Total Caeses : " + ele.cases}</p>
                <p>{"Total Recovered : " + ele.recovered}</p>
                <p>{"Total Deaths : " + ele.deaths}</p>
               </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default Maps