// menu-nav
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');

// portfolio
const portfolioBtns = document.querySelector('.portfolio-btns');
const portfolioBtn = document.querySelector('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-image');

// video
const player = document.querySelector('.video-player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const playPause = player.querySelector('.play-pause');
const volumeMute = player.querySelector('.volume-mute');
const volumeRange = player.querySelector('.volume');
const playBtn = player.querySelector('.play-btn');
const poster = player.querySelector('.poster');
const playImg = player.querySelector('.play');
const volumeImg = player.querySelector('.volumeImg');

function openMenu() {
    nav.classList.toggle('active');
    navList.classList.toggle('active');
    hamburger.classList.toggle('active');
}

hamburger.addEventListener('click', openMenu);

function closeMenu(event) {
  if (event.target.classList.contains('nav-link')) {
  nav.classList.remove('active');
  navList.classList.remove('active');
  hamburger.classList.remove('active');
  }
}

nav.addEventListener('click', closeMenu);

function changePortfolio(event) {
    if(event.target.classList.contains('portfolio-btn')) {
      let season = event.target.getAttribute('data-season');
        portfolioImages.forEach((img, index) => img.src = `assets/img/${season}/${index + 1}.jpg`);
    }
}

portfolioBtns.addEventListener('click', changePortfolio);

function changeClassActive(event) {
  if(event.target.classList.contains('portfolio-btn')) {
    const btns = document.querySelectorAll('.portfolio-btn');
    btns.forEach((el) => el.classList.remove('active'));
    event.target.classList.add('active');
  }
}

portfolioBtns.addEventListener('click', changeClassActive);


// video function
function togglePlay() {
    if (video.paused) {
        video.play();
        playBtn.style.zIndex = '-3';
        poster.style.zIndex = '-2';
        playImg.src = 'assets/svg/pause.svg'
    } else {
        video.pause();
        playBtn.style.zIndex = '3';
        playImg.src = 'assets/svg/play.svg'

    }
}

video.addEventListener('click', togglePlay);
playPause.addEventListener('click', togglePlay);
playBtn.addEventListener('click', togglePlay);


function updateVolumeRange() {
    var x = volumeRange.value;
    var color = 'linear-gradient(to right,rgb(189, 174, 130)' + x +'%, rgb(200, 200, 200)' + x + '%)';
    volumeRange.style.background = color;
}

volumeRange.addEventListener('mousemove', updateVolumeRange);
volumeRange.addEventListener('click', updateVolumeRange);

function updateVolume() {
    video.volume = volumeRange.value / 100;
    if (volumeRange.value == 0){
        volumeImg.src = 'assets/svg/mute.svg';
    } else {
        volumeImg.src = 'assets/svg/volume.svg';
    }
}

volumeRange.addEventListener('change', updateVolume);


volumeMute.addEventListener('click', function(e) {
    if (video.muted == false) {
        video.muted = true;
        volumeImg.src = 'assets/svg/mute.svg';
    } else {
        video.muted = false;
        volumeImg.src = 'assets/svg/volume.svg';
    }
});

function updateProgress() {
    progress.value = (video.currentTime) / (video.duration) * 100;
    const x = progress.value;
    const color = 'linear-gradient(to right,rgb(189, 174, 130)' + x + '%, rgb(200, 200, 200)' + x + '%)';
    progress.style.background = color;
}
progress.addEventListener('mousemove', updateProgress);
progress.addEventListener('click', updateProgress);
video.addEventListener('timeupdate', updateProgress);

progress.addEventListener('click', function(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = video.duration;
    video.currentTime = (clickX / width) * duration;
});

   
