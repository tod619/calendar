const date = new Date()

date.setDate(1)

const monthDays = document.querySelector('.days')

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

const firstDayIndex = date.getDay()

console.log(lastDay)

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

// Display Month in H1
document.querySelector('.date h1').innerHTML = months[date.getMonth()]

// Display Date in P
document.querySelector('.date p').innerHTML = date.toDateString()

// create calendar days
let days = ''

for(let x = firstDayIndex; x > 0; x--) {
    days += `<div class = 'prev-date'>${x}</div>`
}

for(let i = 1; i <= lastDay; i++) {
    days += `<div>${i}</div>`
}

monthDays.innerHTML = days 
