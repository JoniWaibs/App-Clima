import { Alert , Result } from '../Select.js'
import { clearHTML } from '../Functions.js'
//Classe encargada de todo la ui
export class UI{
    showAlert(cssClass, msj){
        const pAlert = document.createElement('p')
        pAlert.innerHTML = `${msj}`
        pAlert.classList.add(cssClass)
        Alert.appendChild(pAlert)
        setTimeout(()=>{
            Alert.removeChild(pAlert)
        },2000)
    }
    showInfo(Temperatura , Minima , Maxima , Ubicacion){
        //Primero limpio si hay info previa
        clearHTML()
        //Crear y mostrar elementos
        let div = document.createElement('div')
        div.innerHTML = `
        <p class="block w-full text-center text-white mt-6 font-bold text-2xl">${Ubicacion}</p>   
        <p class="block w-full text-center text-white mt-2 font-bold text-4xl">${Temperatura}</p>
        <p class="block w-full text-center text-white mt-3">Minima: ${Minima}</p>
        <p class="block w-full text-center text-white mt-3">Maxima: ${Maxima}</p>          
        `
        Result.appendChild(div)
    }
}

