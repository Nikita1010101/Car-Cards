const carList = document.querySelector('.car__list');

carsArr = [
    {
        model: 'BMW M5',
        color: 'Black',
        power: 635,
        price: 11.45,
        body: 'Sedan',
        engineVolume: 4.4,
        cylinders: 8,
        fuel: 'Petrol',
        weight: 1860,
        gearbox: 'Automatic',
        gear: 8,
        doors: 4,
        seats: 5,
        length: 4965,
        width: 1903,
        height: 1473,
        photos: {
            'photo1': 'bmw-1',
            'photo2': 'bmw-2',
            'photo3': 'bmw-3',
            'photo4': 'bmw-4'
        }
    },
    {
        model: 'Audi RS5',
        color: 'Black',
        power: 249,
        price: 9.27,
        body: 'Coupe',
        engineVolume: 2.9,
        cylinders: 6,
        fuel: 'Disel',
        weight: 2056,
        gearbox: 'Automatic',
        gear: 9,
        doors: 4,
        seats: 5,
        length: 4988,
        width: 1896,
        height: 1435,
        photos: {
            'photo1': 'audi-1',
            'photo2': 'audi-2',
            'photo3': 'audi-3',
            'photo4': 'audi-4'
        }
    },
    {
        model: 'Mercedes-Benz CLS',
        color: 'Black',
        power: 450,
        price: 7.36,
        body: 'Сoupe',
        engineVolume: 2.9,
        cylinders: 6,
        fuel: 'Petrol',
        weight: 1795,
        gearbox: 'Automatic',
        gear: 8,
        doors: 2,
        seats: 4,
        length: 4783,
        width: 1866,
        height: 1383,
        photos: {
            'photo1': 'mercedes-benz-1',
            'photo2': 'mercedes-benz-2',
            'photo3': 'mercedes-benz-3',
            'photo4': 'mercedes-benz-4'
        }
    },
    {
        model: 'Porsche 911',
        color: 'Gray',
        power: 385,
        price: 8.79,
        body: 'coupe 2 doors',
        engineVolume: 3.0,
        cylinders: 6,
        fuel: 'Petrol',
        weight: 1635,
        gearbox: 'Robot',
        gear: 8,
        doors: 2,
        seats: 4,
        length: 4519,
        width: 1852,
        height: 1298,
        photos: {
            'photo1': 'porsche-1',
            'photo2': 'porsche-2',
            'photo3': 'porsche-3',
            'photo4': 'porsche-4'
        }
    },
    {
        model: 'Ferrari 488',
        color: 'Red',
        power: 670,
        price: 26.68,
        body: 'berlinetta, 2 seats',
        engineVolume: 3.9,
        cylinders: 8,
        fuel: 'Petrol',
        weight: 1370,
        gearbox: 'Robot',
        gear: 7,
        doors: 2,
        seats: 2,
        length: 4568,
        width: 1952,
        height: 1213,
        photos: {
            'photo1': 'ferrari-1',
            'photo2': 'ferrari-2',
            'photo3': 'ferrari-3',
            'photo4': 'ferrari-4'
        }
    }
];

localStorage.setItem('carList', JSON.stringify(carsArr));

const printItems = () => {
    carList.innerHTML = '';
    for (let i = 0; i < carsArr.length; i++) {
        carList.innerHTML += `
            <a class="car__item move" href="second.html" target="_blank">
                <div class="car__photo move">
                    <img src="img/${carsArr[i].photos['photo1']}.jpg" class="move">
                </div>
                <h2 class="move">${carsArr[i].model}</h2>
                <div class="car__btn move">
                    <span class="move">${carsArr[i].price}<span> млн. ₽</span></span>
                    <img src="img/row-search.svg" class="move">
                </div>
            </a>
        `;
    }
}

printItems();

carList.addEventListener('click', event => {
    if (event.target.classList.contains('move')) {
        let checkedItem = event.target.classList.contains('car__item') ? event.target : event.target.closest('.car__item');
        let itemsList = document.querySelectorAll('.car__item');
        for (let i = 0; i < itemsList.length; i++) {
            if (itemsList[i] == checkedItem) {
                localStorage.setItem('index', JSON.stringify(i));
            }
        }
    }
});