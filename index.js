let home = document.getElementById("points-home")
let guest = document.getElementById("points-guest")

let homePoints = 0
let guestPoints = 0

function addOneHome() {
    homePoints += 1
    home.textContent = homePoints
}

function addTwoHome() {
    homePoints += 2
    home.textContent = homePoints
}

function addThreeHome() {
    homePoints += 3
    home.textContent = homePoints
}

function addOneGuest() {
    guestPoints += 1
    guest.textContent = guestPoints
}

function addTwoGuest() {
    guestPoints += 2
    guest.textContent = guestPoints
}

function addThreeGuest() {
    guestPoints += 3
    guest.textContent = guestPoints
}

function newGame() {
    homePoints = 0
    home.textContent = homePoints
    guestPoints = 0
    guest.textContent = guestPoints
}