import axios from 'axios';
import {useState,useEffect} from 'react'
import {
    useQuery,
    useQueryClient,
  } from "react-query";


function useCharts() {
    return useQuery({
      queryKey: ["Cases"],
      queryFn: async () => {
        const { data } = await axios.get(
           "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
        );
        return data;
      },
    });
  }
  

const Charts = () => {
    const [dataa,setDataa]=useState([])

    const queryClient = useQueryClient();
    const { status, data, error, isFetching } = useCharts();

    useEffect(()=>{
     
      if(data){
        setDataa(data)
      }

    },[data])
  return (
    <div>Charts</div>
  )
}

export default Charts