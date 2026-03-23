const progressBarActions = {
    getRatio(event, progressBar){
        return Math.max(0, Math.min(1 ,(event.clientX - progressBar.getBoundingClientRect().left) / progressBar.getBoundingClientRect().width))
    },

    changeCurrentTime(videoPlayer, ratio) {
        const duration = videoPlayer.duration()
        if(duration){
            const time = videoPlayer.duration() * ratio
            videoPlayer.currentTime(time)
        }
    },

    refresh(currentTimeBar, ratio) {
        currentTimeBar.style.width = `${ratio * 100}%`
    }
}

const progressBar = document.querySelector(".progressBar")
const currentTimeBar = document.querySelector(".currentTime")
let isDragging = false

player.on("timeupdate", () => {
    if(!isDragging) {
        progressBarActions.refresh(currentTimeBar, player.currentTime() / player.duration())
    }
})

progressBar.addEventListener("pointerdown", (event) => {
    isDragging = true
    progressBar.setPointerCapture(event.pointerId)

    progressBarActions.refresh(currentTimeBar, progressBarActions.getRatio(event, progressBar))
})

progressBar.addEventListener("pointermove", (event) => {
    if(isDragging){
        progressBarActions.refresh(currentTimeBar, progressBarActions.getRatio(event, progressBar))
    }
})

progressBar.addEventListener("pointerup", (event) => {
    if(isDragging){
        isDragging = false
        progressBarActions.changeCurrentTime(player, progressBarActions.getRatio(event, progressBar))
        progressBar.releasePointerCapture(event.pointerId)
    }
})

const btnsActions = {
    togglePlayPause(videoPlayer) {
        if(videoPlayer.paused()){
            videoPlayer.play()
        } else {
            videoPlayer.pause()
        }
    }
}

const video = document.querySelector(".video-js")
const playPauseBtn = document.querySelector(".playBtn")

video.addEventListener("click", () => {
    btnsActions.togglePlayPause(player)
})

playPauseBtn.addEventListener("click", () => {
    btnsActions.togglePlayPause(player)
})

player.on("play", () => {
    playPauseBtn.setAttribute("src", "/assets/icons/pauseBtn.svg")
})

player.on("pause", () => {
    playPauseBtn.setAttribute("src", "/assets/icons/playBtn.svg")
})