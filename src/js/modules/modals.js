const modals = () => {
    function bindModals(triggerSelector, modalSelector, closeSelector) {

        const triggers = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector)

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault()
                }
    
                modal.style.display = 'block'
                document.body.style.overflow = 'hidden'
                // document.body.classList.add('modal-open')
            })
        })
        
        close.addEventListener('click', () => {
            modal.style.display = 'none'
            document.body.style.overflow = ''
            // document.body.classList.remove('modal-open')
        })

        modal.addEventListener('click', (e) => {
            if (e.target == modal) {
                modal.style.display = 'none'
                document.body.style.overflow = ''
                // document.body.classList.remove('modal-open')
            }
        })

    }

    bindModals('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')
    bindModals('.phone_link', '.popup', '.popup .popup_close')

    function addModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block'
            document.body.style.overflow = 'hidden'
        }, time)
    }

    addModalByTime('.popup', 60000)
}

export default modals;