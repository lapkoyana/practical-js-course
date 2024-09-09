const tabs = (headerSelector, tabsSelector, contentsSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
        tabs = document.querySelectorAll(tabsSelector),
        contents = document.querySelectorAll(contentsSelector);

    function hideAll() {
        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        })
        contents.forEach(content => {
            content.style.display = 'none'
        })
    }

    function showContent(i = 0) {
        tabs[i].classList.add(activeClass)
        contents[i].style.display = display
    }

    hideAll()
    showContent()

    header.addEventListener('click', (e) => {
        const target = e.target
        if (target && (target.classList.contains(tabsSelector.replace(".", "")) ||
            target.parentElement.classList.contains(tabsSelector.replace(".", "")))) {
                tabs.forEach((item, i) => {
                    if (target == item || target.parentElement == item) {
                        hideAll()
                        showContent(i)
                    }
                })
            }
    })
}

export default tabs;