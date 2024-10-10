import {postData} from '../services/requests'

const forms = () => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('form'),
        uploads = document.querySelectorAll('[name=upload]')

    const message = {
        loading: 'Загрузка...',
        success: 'Выполнено!',
        failure: 'Произошла ошибка при выполнении отправки',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png',
    }

    const send = async (url, formData) => {
        const status = document.querySelector('.status');
        const statusImg = status.childNodes[0],
              statusText = status.childNodes[1];
        
        statusImg.setAttribute('src', message.spinner)
        statusText.textContent = message.loading

        return await postData(url, formData)
    }

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = ''
        })
        uploads.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран'
        })
    }

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php',
    }

    uploads.forEach(item => {
        item.addEventListener('input', () => {
            const filename = item.files[0].name
            const [name, extension] = filename.split('.')
            
            const dots = name.length > 6 ? '...' : '.'
            const finalName = name.substring(0, 6) + dots + extension

            item.previousElementSibling.textContent = finalName
        })
    })

    form.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault()

            const status = document.createElement('div')
            status.classList.add('status')
            item.parentNode.appendChild(status)

            item.classList.add('animated', 'fadeOutUp')
            setTimeout(() => {
                item.style.display = 'none'
            }, 400)

            let statusImg = document.createElement('img')
            statusImg.setAttribute('src', message.spinner)
            statusImg.classList.add('animated', 'fadeInUp')
            status.appendChild(statusImg)


            let statusText = document.createElement('div')
            statusText.textContent = message.loading
            status.appendChild(statusText)

            const api = item.closest('.popup-design') || item.classList.contains('form-calc')
                        ? path.designer : path.question
            console.log(api)

            const formData = new FormData(item)

            send(api, formData)
            .then((res) => {
                console.log(res)
                statusImg.setAttribute('src', message.ok)
                statusText.textContent = message.success
            }).catch(() => {
                statusImg.setAttribute('src', message.fail)
                statusText.textContent = message.failure
            }).finally(() => {
                clearInputs()
                setTimeout(() => {
                    status.remove()

                    item.style.display = 'block'
                    item.classList.remove('fadeOutUp')
                    item.classList.add('fadeInUp')
                }, 5000)
            })
        })
    })
}

export default forms;