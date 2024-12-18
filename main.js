const nav_instorage = localStorage.getItem('actives')?.toString()
let nav_collection = []
if (nav_instorage) {
    nav_collection = JSON.parse(nav_instorage)
}


const observer = new IntersectionObserver((entries) => {
    for (let entry of entries) {
        if (entry.isIntersecting) {
            entry.target.animate([
                {transform: 'translateX(50px)', opacity: 0},
                {transform: 'translateX(0)', opacity: 1},
            ], {
                duration: 700
            })
            entry.target.classList.remove('invisible')
        } else {
            entry.target.animate([
                {transform: 'translateX(0)', opacity: 1},
                {transform: 'translateX(50px)', opacity: 0},
            ], {
                duration: 700
            })
            entry.target.classList.add('invisible')
        }
    }
}, {
    threshold: .3
})

const activate = new IntersectionObserver((entries) => {
    console.log(entries)
    for (let entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.remove('.active')
        } else {
            entry.target.classList.add('.active')
        }
    }
}, {
    threshold: .1
})

nav_collection = document.querySelectorAll('.navigation a')
let tab_nav = Array.from(nav_collection)
for (let e of tab_nav) {
    e.addEventListener('click', () => {
        for (let elm of tab_nav) {
            elm.classList.remove('active')
        }
        e.classList.add('active')
        localStorage.setItem('actives', JSON.stringify(nav_collection))
    })
}

const collection = document.querySelectorAll('aside a')
const tab = Array.from(collection)
for (let e of tab) {
    e.addEventListener('click', () => {
        for (let elm of tab) {
            elm.classList.remove('active')
        }
        e.classList.add('active')
    })
}
//tab[2].classList.add('active')

document.querySelectorAll('#bloc').forEach((e) => {
    observer.observe(e)
})