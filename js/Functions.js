//imports
import {City , Country, Form, Result } from './Select.js';
import { UI } from './Classes/UI.js'
import { Calls } from './Classes/Calls.js'

let ui = new UI()
let call = new Calls();

//Functions
//Funcion que lee los datos, valida y llama a la clase que consula en la api
export function dataRead(e){
    e.preventDefault()
    //Validar que los campos no lleguen vacios
    if(City.value === '' || Country.value ===''){
        //Alerta
        alert('bg-red-500', 'Error! Faltan completar campos.')
        return;
    }
    //Llamado a la API
    call.newCall(City.value , Country.value)
    Form.reset();
};
//Funcion que administra la classe de alertas
export function alert(cssClass, msj){
    //Classe alerta
    ui.showAlert(cssClass, msj)
};
//funcion que administrala info del dom
export function showClima(data){
    //Descompongo el objeto entero y uso el metodo para mostrar los datos en el dom

    //Convertir de Kelvin a Celcius
    const kelvin = 273.15;
    const temp = data.main.temp - kelvin;
    const tMin = data.main.temp_min - kelvin
    const tMax = data.main.temp_max - kelvin
    const Temperatura = Math.round(temp)+' Cº'
    const Minima =  Math.round(tMin)+' Cº'
    const Maxima =  Math.round(tMax)+' Cº'
    //Ubicar el lugar
    const Ubicacion = `${data.name}, ${data.sys.country} `
    //Ejecutar classe que se encarga de mostrar en el dom
    ui.showInfo(Temperatura , Minima , Maxima , Ubicacion)
};
//Funcion que limpia el html de una consulta previa
export function clearHTML(){
    //Mientras haya un elemento, se borra
    while(Result.lastElementChild){
        Result.removeChild(Result.lastElementChild)
    }
};





