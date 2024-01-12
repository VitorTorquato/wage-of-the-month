export const alertError = {
    element: document.querySelector('.error-alert '),
    open(){
        alertError.element.classList.add('open')
    },
    close(){
        alertError.element.classList.remove('open')
    }
}