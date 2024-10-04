const mask = (selector) => {

    const setCursorPosition = (pos, elem) => {
        elem.setSelectionRange(pos, pos)
    }

    function createMask(event) {
        let matrix = '+7 (___) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

        if (def.length >= val.length) {
            val = def
        }

        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        })

        if (event.type == 'blur') {
            if (this.value.length === 2) {
                val = ''
            }
        } else {
            setCursorPosition(this.value.length, this)
        }
    }

    const inputs = document.querySelectorAll(selector)

    inputs.forEach(input => {
        input.addEventListener('input', createMask)
        input.addEventListener('focus', createMask)
        input.addEventListener('blur', createMask)
    })
}

export default mask;