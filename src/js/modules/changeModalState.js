import checkNumInputs from './checkNumInputs'

const changeModalState = (state) => {
    const windowForms = document.querySelectorAll('.balcon_icons_img'),
        windowHeight = document.querySelectorAll('#height'),
        windowWidht = document.querySelectorAll('#width'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#height')
    checkNumInputs('#width')

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN': {
                        state[prop] = i
                        break;
                    }
                    case 'INPUT': {
                        if (item.getAttribute('type') === 'checkbox') {
                            state[prop] = i === 0 ? "cold" : "warm"
                            elem.forEach((box, j) => {
                                box.checked = i === j
                            })
                        } else {
                            state[prop] = item.value
                        }

                        break;
                    }
                    case 'SELECT': {
                        state[prop] = item.value
                        break;
                    }
                }

                console.log(state)
            })
        })
    }

    bindActionToElems('click', windowForms, 'form')
    bindActionToElems('input', windowHeight, 'height')
    bindActionToElems('input', windowWidht, 'width')
    bindActionToElems('change', windowType, 'type')
    bindActionToElems('change', windowProfile, 'profile')
};

export default changeModalState