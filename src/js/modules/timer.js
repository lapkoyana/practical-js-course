const timer = (deadline) => {

    const withZero = (num) => {
        return (num <= 9) ? '0' + num : num
    }

    const getTimeRemaining = (endtime) => {
        const diff = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((diff / 1000) % 60),
            minutes = Math.floor((diff / (1000 * 60)) % 60),
            hours = Math.floor((diff / (1000 * 60 * 60)) % 24),
            days = Math.floor((diff / (1000 * 60 * 60 * 24)))

            return {
                total: diff,
                seconds,
                minutes,
                hours,
                days
            }
    }

    const timer = document.querySelector('.timer1'),
        seconds = timer.querySelector("#seconds"),
        minutes = timer.querySelector("#minutes"),
        hours = timer.querySelector("#hours"),
        days = timer.querySelector("#days");

    const interval = setInterval(updateTimer, 1000)


    function updateTimer() {
        const timeRemaining = getTimeRemaining(deadline)

        if (timeRemaining.total <= 0) {
            seconds.textContent = '00'
            minutes.textContent = '00'
            hours.textContent = '00'
            days.textContent = '00'

            clearInterval(interval)
        } else {
            seconds.textContent = withZero(timeRemaining.seconds)
            minutes.textContent = withZero(timeRemaining.minutes)
            hours.textContent = withZero(timeRemaining.hours)
            days.textContent = withZero(timeRemaining.days)
        }

    }

}

export default timer;