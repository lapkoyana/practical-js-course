const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        menuItems = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        allCards = wrapper.querySelectorAll('.all'),
        no = document.querySelector('.portfolio-no');

    const typeFilter = (cards) => {
        allCards.forEach(card => {
            card.style.display = 'none'
            card.classList.remove('animated', 'fadeIn')
        })

        no.style.display = 'none'
        no.classList.remove('animated', 'fadeIn')

        if (cards && cards.length > 0) {
            cards.forEach(card => {
                card.style.display = 'block'
                card.classList.add('animated', 'fadeIn')
            })
        } else {
            no.style.display = 'block'
            no.classList.add('animated', 'fadeIn')
        }
    }

    menu.addEventListener('click', (e) => {
        const target = e.target

        if (target && target.tagName === 'LI') {

            menuItems.forEach(item => {
                item.classList.remove('active')
            })

            const menuItemClass = target.classList[0];

            target.classList.add('active')

            const cards = wrapper.querySelectorAll(`.${menuItemClass}`);
            typeFilter(cards)
        }
    })
}

export default filter;