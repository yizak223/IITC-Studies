// const btn = document.querySelector(`#btnAlert`)
// btn.addEventListener('click', (e) => {
//     console.log(e);
//     alert(`Hello World`)
// })

const images = ['https://cdn.pixabay.com/photo/2023/12/10/03/00/peacock-8440548_1280.jpg',
    'https://media.istockphoto.com/id/1452679981/photo/peacock-feather.jpg?s=2048x2048&w=is&k=20&c=mWQQUPoyshJCjxq2ZpTHIlyR9CX0GVPDOEsLq_4MipU=',
    'https://media.istockphoto.com/id/1442669971/photo/beautiful-colorful-peacock-bird-feathers-seamless-abstract-pattern-texture-design-natural.jpg?s=2048x2048&w=is&k=20&c=dDgGpfMZKSBBLL7nZ7M0uFx8KmIC2DWcgiIFGvVaOuc=',
    'https://media.istockphoto.com/id/1496349881/vector/2024-new-year-greeting-cards-flyers-posters.jpg?s=2048x2048&w=is&k=20&c=1t168qcHmGGqG8yUu8uDzhiX9MUtFqYLX2Sto7X11CM=',
    'https://media.istockphoto.com/id/1673511094/vector/achievement-3d-rocket-takes-off-from-giant-smartphone.jpg?s=2048x2048&w=is&k=20&c=-T0ra1C_G6SwbKMJL0lL9vgn_wGkX8z9jnpSGz-9_bY=',
]

const mainImg = document.querySelector('#mainImg');
const next = document.querySelector('#next');
const previous = document.querySelector('#previous');

let index = 0;
mainImg.src = images[index]

next.addEventListener('click', () => {
    if (index == images.length - 1) {
        index = 0
        updateImage()
        return
    }
    index++
    updateImage()
})

previous.addEventListener('click', () => {
    if (index == 0) {
        index = images.length - 1
        updateImage()
        return
    }
    index--
    updateImage()
})

const updateImage = () => {
    mainImg.style.opacity = 0;
    setTimeout(() => {
        mainImg.src = images[index];
        mainImg.style.opacity = 1;
    }, 500); // 500ms delay, should match the transition duration
}