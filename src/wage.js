export {isNotANumber, calculateHours}

import { modal } from "./message.js"




function calculateHours(WagePerHour , hoursWorked){
        let calc = hoursWorked*WagePerHour
        
        
        let result = `Your salary this months is : ${calc.toLocaleString('pt-br' ,{style: 'currency' , currency: 'EUR'}).replace(',', '.')}`        

        modal.message.textContent = result
        modal.open()
        
        
}

function isNotANumber(value) {
        return isNaN(value) || (value) == ''
}

