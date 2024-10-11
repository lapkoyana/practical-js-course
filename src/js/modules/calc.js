const calc = (sizeSelector, materialSelector, optionsSelector, promocodeSelector, resultSelector) => {
    const sizeBlock = document.querySelector(sizeSelector),
        materialBlock = document.querySelector(materialSelector),
        optionsBlock = document.querySelector(optionsSelector),
        promocodeBlock = document.querySelector(promocodeSelector),
        resultBlock = document.querySelector(resultSelector);

    const calcSum = () => {
        if (!sizeBlock.value || !materialBlock.value) {
            resultBlock.textContent = "Пожалуйста введите размер и материал"
            return;
        }

        let sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (promocodeBlock.value && promocodeBlock.value == 'IWANTPOPART') {
            sum = Math.round(sum * 0.7)
        }

        resultBlock.textContent = sum
    }

    sizeBlock.addEventListener('change', calcSum)
    materialBlock.addEventListener('change', calcSum)
    optionsBlock.addEventListener('change', calcSum)
    promocodeBlock.addEventListener('input', calcSum)
}

export default calc;