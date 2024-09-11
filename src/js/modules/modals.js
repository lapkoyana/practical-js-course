const modals = () => {
    const calcScroll = () => {
        const div = document.createElement('div')

        div.style.height = '50px'
        div.style.width = '50px'
        div.style.overflowY = 'scroll'
        div.style.visibility = 'hidden'

        document.body.appendChild(div)

        const scrollWidth = div.offsetWidth - div.clientWidth

        div.remove()

        return scrollWidth;
    }

    const scrollWidth = calcScroll();

    function bindModals(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {

        const triggers = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            allModals = document.querySelectorAll('[data-modal]');

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault()
                }

                allModals.forEach(m => {
                    m.style.display = 'none'
                })
    
                modal.style.display = 'block'
                document.body.style.overflow = 'hidden'
                document.body.style.marginRight = `${scrollWidth}px`
                // document.body.classList.add('modal-open')
            })
        })
        
        close.addEventListener('click', () => {
            allModals.forEach(m => {
                m.style.display = 'none'
            })

            modal.style.display = 'none'
            document.body.style.overflow = ''
            document.body.style.marginRight = 0
            // document.body.classList.remove('modal-open')
        })

        modal.addEventListener('click', (e) => {
            if (e.target == modal && closeClickOverlay) {
                allModals.forEach(m => {
                    m.style.display = 'none'
                })

                modal.style.display = 'none'
                document.body.style.overflow = ''
                document.body.style.marginRight = 0
                // document.body.classList.remove('modal-open')
            }
        })

    }

    bindModals('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')
    bindModals('.phone_link', '.popup', '.popup .popup_close')
    bindModals('.popup_calc_btn', '.popup_calc', '.popup_calc_close')
    bindModals('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false)
    bindModals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false)

    function addModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block'
            document.body.style.overflow = 'hidden'
            document.body.style.marginRight = `${scrollWidth}px`
            
        }, time)
    }

    addModalByTime('.popup', 60000)
}

export default modals;