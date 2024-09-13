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
            })
        })
        
        close.addEventListener('click', () => {
            allModals.forEach(m => {
                m.style.display = 'none'
            })

            modal.style.display = 'none'
            document.body.style.overflow = ''
            document.body.style.marginRight = 0
        })

        modal.addEventListener('click', (e) => {
            if (e.target == modal && closeClickOverlay) {
                allModals.forEach(m => {
                    m.style.display = 'none'
                })

                modal.style.display = 'none'
                document.body.style.overflow = ''
                document.body.style.marginRight = 0
            }
        })

    }

    function addModalByTime(selector, time) {
        setTimeout(() => {
            let display

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block'
                }
            })

            if (!display) {
                document.querySelector(selector).style.display = 'block'
                document.body.style.overflow = 'hidden'
                document.body.style.marginRight = `${scrollWidth}px`
            }
            
        }, time)
    }


    bindModals('.button-design', '.popup-design', '.popup-design .popup-close')
    bindModals('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close')

    
    addModalByTime('.popup-consultation', 5000)
}

export default modals;