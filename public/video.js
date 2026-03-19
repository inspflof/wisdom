
const btn = document.querySelector(".playBtn")

btn.addEventListener("click", () => {
    if(player.paused()){
        player.play()
    } else {
        player.pause()
    }
})

player.on("play", () => {
    btn.setAttribute("src", "/assets/icons/pauseBtn.svg")
})

player.on("pause", () => {
    btn.setAttribute("src", "/assets/icons/playBtn.svg")
})

const currentProgressBar = document.querySelector(".currentTime")

player.on("timeupdate", () => {
    currentProgress = player.currentTime() / player.duration()
    currentProgressBar.style.width = `${currentProgress * 100}%`
})

const progressBar = document.querySelector(".progressBar")

progressBar.addEventListener("click", () => {
    const ratio = Math.max(0, Math.min(1 ,(event.clientX - progressBar.getBoundingClientRect().left) / progressBar.getBoundingClientRect().width))
    const time = player.duration() * ratio
    player.currentTime(time)
})