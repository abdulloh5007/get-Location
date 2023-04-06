const button1 = document.querySelector(".btn1")
const button2 = document.querySelector(".btn2")
const loc = document.querySelector('.location')
const pick = document.querySelector('.picker')
const span = document.querySelector('span')

button1.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.table(data.address)
            const adres = data.address
            loc.innerHTML = `
            ${adres.amenity} <br/>
            ${adres.road} <br/>
            ${adres.neighbourhood} <br/>
            ${adres.county} <br/>
            ${adres.city} <br/>
            ${adres.postcode} <br/>
            ${adres.country} <br/>
            ${adres.country_code} <br/>
            `
        })
        .catch(() => {
            console.log('error');
        })
    })
})

const pickColor = async() => {
    const eyeDropper = new EyeDropper()
    const { sRGBHex } = await eyeDropper.open()
    console.log(sRGBHex);
    pick.textContent = sRGBHex
    span.style.background = sRGBHex
}

button2.addEventListener('click', pickColor)

const div = document.querySelector('.move')
let offsetX, offsetY

const move = (e) => {
    div.style.left = `${e.clientX - offsetX}px`
    div.style.top = `${e.clientY - offsetY}px`
}

div.addEventListener('mousedown', (q) => {
    offsetX = q.clientX - div.offsetLeft
    offsetY = q.clientY - div.offsetTop
    document.addEventListener('mousemove', move)
})

document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', move)
})

