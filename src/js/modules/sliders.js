const sliders = (itemsSelector, direction, prevBtnSelector, nextBtnSelector) => {
    const items = document.querySelectorAll(itemsSelector);

    let startIndex = 1

    items.forEach(item => {
        item.classList.add('animated')
    })

    function showSlides(n) {
        if (n > items.length) {
            startIndex = 1;
        }
    
        if (n < 1) {
            startIndex = items.length;
        }
    
        items.forEach(item => {
            item.style.display = 'none'
        })
    
        items[startIndex - 1].style.display = 'block'
    }

    showSlides(startIndex)


    function plusSlides(n) {
        showSlides(startIndex += n)
    }

    try {
        const prevBtn = document.querySelector(prevBtnSelector),
              nextBtn = document.querySelector(nextBtnSelector);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1)
            items[startIndex - 1].classList.remove('slideInLeft')
            items[startIndex - 1].classList.add('slideInRight')
        })

        nextBtn.addEventListener('click', () => {
            plusSlides(1)
            items[startIndex - 1].classList.remove('slideInRight')
            items[startIndex - 1].classList.add('slideInLeft')
        })

    } catch (e) {}

    let interval

    function startAnimation() {
        if (direction === 'vertical') {
            interval = setInterval(() => {
                plusSlides(1)
                items[startIndex - 1].classList.add('slideInDown')
            }, 3000)
        } else {
            interval = setInterval(() => {
                plusSlides(1)
                items[startIndex - 1].classList.remove('slideInLeft')
                items[startIndex - 1].classList.add('slideInRight')
            }, 3000)
        }
    }

    startAnimation()

    const parent = items[0].parentNode

    parent.addEventListener('mouseenter', () => {
        clearInterval(interval)
    })

    parent.addEventListener('mouseleave', () => {
        startAnimation()
    })
}

export default sliders;