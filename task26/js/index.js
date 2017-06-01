const triggers = document.querySelectorAll('.cool>li');
const triggerDefault = document.querySelector('.cool .first');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');
const dropdownDefault = document.querySelector('.dropdown1')

function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();

    setStyle(dropdownCoords);
}

function setStyle(dropdownCoords) {
    const navCoords = nav.getBoundingClientRect();
    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    }

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px,${coords.top}px)`);
}

function ini() {
    triggerDefault.classList.add('trigger-enter');
    const dropdownCoords = dropdownDefault.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    setStyle(dropdownCoords);
}


function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))
window.addEventListener('load', ini);