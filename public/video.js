function formatDuree(secondes) {
    const totalS = Math.floor(secondes)

    const h = Math.floor(totalS / 3600)
    const m = Math.floor((totalS % 3600) / 60)
    const s = totalS % 60

    const format = (n) => String(n).padStart(2, '0')

    if (h > 0){
        return `${h}:${format(m)}:${format(s)}`
    } else if (m > 0) {
        return `${m}:${format(s)}`
    } else {
        return `0:${format(s)}`
    }
} 

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

const controlActions = {
    refresh(videoPlayer, currentTime, videoDuration) {
        currentTime.innerText = formatDuree(videoPlayer.currentTime())
        videoDuration.innerText = formatDuree(videoPlayer.duration())
    }
}

const progressBar = document.querySelector(".progressBar")
const currentTimeBar = document.querySelector(".currentTime")
const buffer = document.querySelector(".buffer")
const seekBar = document.querySelector(".seek-bar")

let isDragging = false

const currentTime = document.querySelector(".video-current-time")
const videoDuration = document.querySelector(".video-duration")

player.on("timeupdate", () => {
    if(!isDragging) {
        progressBarActions.refresh(currentTimeBar, player.currentTime() / player.duration())
        controlActions.refresh(player, currentTime, videoDuration)
    }
})

player.on("progress", () => {
    progressBarActions.refresh(buffer, player.bufferedEnd() / player.duration())
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
    progressBarActions.refresh(seekBar, progressBarActions.getRatio(event, progressBar))
})

progressBar.addEventListener("pointerup", (event) => {
    if(isDragging){
        isDragging = false
        progressBarActions.changeCurrentTime(player, progressBarActions.getRatio(event, progressBar))
        progressBar.releasePointerCapture(event.pointerId)
    }
})

progressBar.addEventListener("pointerover", () => {
    isOnProgressBar = true
})

progressBar.addEventListener("pointerleave", () => {
    progressBarActions.refresh(seekBar, 0)
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