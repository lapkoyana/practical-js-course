const modals = () => {

    let btnPressed = false;

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

    function bindModals(triggerSelector, modalSelector, closeSelector, destroyTrigger = false) {

        const triggers = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            allModals = document.querySelectorAll('[data-modal]');

        allModals.forEach(m => {
            m.classList.add('animated', 'fadeIn')
        })

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault()
                }

                btnPressed = true

                if (destroyTrigger) {
                    trigger.remove()
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
            if (e.target == modal) {
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

    function openByScroll(triggerSelector) {
        window.addEventListener('scroll', () => {
            if (!btnPressed && window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                document.querySelector(triggerSelector).click()
            }
        })

    }


    bindModals('.button-design', '.popup-design', '.popup-design .popup-close')
    bindModals('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close')
    bindModals('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true)

    
    addModalByTime('.popup-consultation', 60000)
    openByScroll('.fixed-gift')
}

export default modals;