const date = new Date()

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