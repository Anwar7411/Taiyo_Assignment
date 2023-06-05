import axios from 'axios';
import {useState,useEffect} from 'react'
import {
    useQuery,
    useQueryClient,
  } from "react-query";
  

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
    const [dataa,setDataa] = useState([]);

    const queryClient = useQueryClient();
    const { status, data, error, isFetching } = useMaps();

    useEffect(()=>{
        if(data){
            console.log("dataa",data)
          setDataa(data)
        }
      },[data])

  return (
    <div>Maps</div>
  )
}

export default Maps