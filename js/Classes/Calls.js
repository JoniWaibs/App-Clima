import { apiKey } from '../Select.js'
import { alert , showClima } from '../Functions.js'
//Classe encargada de generar una nueva consulta
export class Calls{
    newCall(City , Country){
        //url de la api + datos solicitados por ella
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&appid=${apiKey}`
        //Consulta con fetch
        fetch(url)
            .then(resp =>{
                //Resultado en json
                return resp.json()
            })
            .then(data =>{//Comprobar si la ciudad existe y luego de esa validacion mostrar los datos del clima
                if(data.cod === "404"){
                    alert('bg-red-500','Error! Ciudad no encontrada.')
                    return ;
                }
                showClima(data)
            });  
    }
};