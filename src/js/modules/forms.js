import checkNumInputs from './checkNumInputs'

const forms = (state) => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('form');

    checkNumInputs('input[name="user_phone"]')

    const message = {
        loading: 'Загрузка',
        success: 'Выполнено!',
        fail: 'Произошла ошибка при выполнении отправки'
    }

    const  postData = async (url, formData) => {
        document.querySelector('.status').textContent = message.loading
        const response = await fetch(url, {
            method: 'POST',
            data: formData
        })

        return await response.text()
    }

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = ''
        })
    }

    form.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault()

            const status = document.createElement('div')
            status.classList.add('status')
            item.appendChild(status)


            const formData = new FormData(item)

            if (item.getAttribute('data-calc') === 'end') {
                for(const key in state) {
                    formData.append(key, state[key])
                }
            }
            
            for (const value of formData.values()) {
                console.log(value);
              }

            postData('assets/server.php', formData)
            .then(() => {
                status.textContent = message.success
            }).catch(() => {
                status.textContent = message.fail
            }).finally(() => {
                clearInputs()
                setTimeout(() => {
                    status.remove()
                }, 5000)
            })
        })
    })
}

export default forms;