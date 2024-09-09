const images = () => {
    const imgPopup = document.createElement('div'),
        container = document.querySelector('.works'),
        image = document.createElement('img');

    imgPopup.classList.add('popup')
    container.appendChild(imgPopup)

    imgPopup.style.justifyContent = 'center'
    imgPopup.style.alignItems = 'center'
    imgPopup.style.display = 'none'

    imgPopup.appendChild(image)

    container.addEventListener('click', (e) => {
        e.preventDefault()

        const target = e.target

        if (target && target.classList.contains('preview')) {
            const href = target.parentNode.getAttribute('href')
            imgPopup.style.display = 'flex'
            image.setAttribute('src', href)
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none'
        }
    })
}

export default images;