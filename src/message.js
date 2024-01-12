

export const modal = {
    wrapper: document.querySelector('.popup-wrapper'),
    message: document.querySelector('.popup .message span'),

    open(){
        modal.wrapper.classList.add('open')
    },
    close(){
        modal.wrapper.classList.remove('open')
    }
}

