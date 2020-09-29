//imports
import { Form } from '../Select.js';
import {dataRead} from'../Functions.js';



//Classe que reune los eventos necesarios para que se inicie la aplicacion
class App{
    constructor(){
        this.initApp();
    }
    initApp(){
        Form.addEventListener('submit', dataRead)
    }
}

export default App;