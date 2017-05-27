(function () {
    const dogs = [{
        name: 'Snickers',
        age: 2
    }, {
        name: 'hugo',
        age: 8
    }];

    const p = document.querySelector('div p');

    function makeGreen() {
        p.style.color = '#BADA55';
        p.style.fontSize = '50px';
    }
    p.addEventListener('click', makeGreen);
    // Regular
    console.log('hello');
    // Interpolated
    console.log('hello %s', 'wowo');
    // Styled
    console.log('%c hello pop', 'font-size:30px;color:blue')
    // warning!
    console.warn('oh no');
    // Error :|
    console.error('oh nonono');
    // Info
    console.info('1980');

    // Testing
    console.assert(1 === 2, 'that is wrong');
    // clearing

    // console.clear();

    // Viewing DOM Elements
    console.log(p)
    console.dir(p);
    // Grouping together
    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.log(`this is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age*7} dog years old`);
        console.groupEnd();
    })
    // counting
    console.count('123');
    console.count('aa');
    console.count('123');
    console.count('aa');
    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/mayfulq')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data');
            console.log(data);
        })
    //table
    console.table(dogs);
})()