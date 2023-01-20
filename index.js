let isPaused = true

function getRandomColor() {
	const digits = ["a", "B", "C", "D", "E", "F", "1", "2", 		"3", "4", "5", "6", "7", "8", "9"]
	const colorArray = new Array(6).fill("").map(() => digits[Math.floor(Math.random() * digits.length)]).join("")
	return `#${colorArray}`
}



const box = document.getElementById("box")
const colorText = document.getElementById("colorText")
const body = document.getElementById("body")
const borderColor = document.getElementById("borderColor")
const playBtn = document.getElementById("playBtn")
playBtn.innerHTML = isPaused ? "▶" : "||"
box.addEventListener("click", () => {
	box.style.backgroundColor = getRandomColor()
})



intervalTimer = setInterval(() => {
    if (!isPaused) {
        const newColor = getRandomColor()
        const bodyColor = getRandomColor()
        const boxBorderColor = getRandomColor()
        const newColorText = newColor
        colorText.innerHTML = newColor
        borderColor.innerHTML = boxBorderColor
        //body.style.backgroundColor = bodyColor
        box.style.backgroundColor = newColor
        box.style.borderColor = boxBorderColor
    }
    
}, 1000)

playBtn.addEventListener("click", (e) => {
    e.preventDefault()
    isPaused = !isPaused
    playBtn.innerHTML = isPaused ? "▶" : "||"

})

function stop_timer() {
    clearInterval(invervalTimer); 
}

