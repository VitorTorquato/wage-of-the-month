import { isNotANumber , calculateHours } from "./wage.js";
import * as el from './elements.js'
import { alertError } from "./alert.js";
import { modal } from "./message.js"; 

//events and fuctions

el.hoursInput.oninput  = () => alertError.close()
el.salaryPerHour.oninput  = () => alertError.close()

el.addHoursBtn.addEventListener('click' , (event) => {
     event.preventDefault()
     
     let wageNumber = el.salaryPerHour.value
     
     if(isNotANumber(wageNumber)){
         alertError.open()
         return
     }
         
     alertError.close()
  
   
    
})


el.applyBtn.addEventListener('click' , (event) => {
     event.preventDefault()

     
     let hours = el.hoursInput.value
     
     if(isNotANumber(hours)){
         alertError.open()
         return
     }
         
     alertError.close()
     
    })

el.submitBtn.addEventListener('click' , (event) =>{
    event.preventDefault()

    if(el.salaryPerHour.valuue == 0 || el.salaryPerHour.value == ``  && el.hoursInput.value == 0 || el.hoursInput.value == ``){
        alertError.open()
        return
    }
        
    alertError.close()

    calculateHours(el.salaryPerHour.value , el.hoursInput.value)
    
})


el.closeBtn.onclick = () => modal.close()