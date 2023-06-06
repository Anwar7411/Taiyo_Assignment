import axios from 'axios';
import {useState,useEffect} from 'react'
import {
  useQuery,
  useQueryClient,
} from "react-query";
import { Bar, Line } from 'react-chartjs-2';

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
    const [dataa,setDataa]=useState<any>([])

    const queryClient = useQueryClient();
    const { status, data, error, isFetching } = useCharts();

    useEffect(()=>{
      if(data){
       let arr:any=[];
      Object.keys(data).forEach((el)=>{
        let obj:any={};
        let arrdates:any= Object.keys(data[el]);
        let arrcases:any= Object.values(data[el])
        obj.labels=arrdates;
        obj.datasets=[{data:arrcases, label: el}]
          arr.push(obj)
      })

      setDataa(arr)
      }

    },[data])

  return (
    <div style={{marginTop:'50px'}}>
      {dataa[0] && <Line
        data={dataa[0]}
        height={550}
        options={{
          maintainAspectRatio: false,
          scales: {
            xAxes:
            {
              ticks: {
                autoSkip: true,
                maxTicksLimit: 40,
              },
            },
            yAxes:
            {
              ticks: {
                callback: function (value:any) {
                  return value;
                },
              },
            },
          },
        }}
      />}
    </div>
  )
}

export default Charts