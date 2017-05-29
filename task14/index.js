(function () {
    // start with strings, numbers and booleans,is copy
    let age = 100;
    let age2 = age;
    console.log(age, age2);
    age = 200;
    console.log(age, age2);

    let name = 'may';
    let name2 = name;
    console.log(name, name2);
    name = 'cool';
    console.log(name, name2);

    // Let's say we have an array ,is references
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    const team = players;
    console.log(players, team);
    // You might think we can just do something like this:
    team[3] = 'lux';
    console.log(players, team);
    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
    const team2 = players.slice();
    console.log(team2)
    // one way

    // or create a new array and concat the old one in
    const team3 = [].concat(players);
    console.log(team3)

    // or use the new ES6 Spread
    const team4 = [...players]
    console.log(team4)
    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
        name: 'may',
        age: 90
    }
    // and think we make a copy:
    const captain = person;
    captain.number = 18;
    console.log(person, captain)
    // how do we take a copy instead?
    const cap2 = Object.assign({}, person, {
        hobby: 99,
        age: 12
    });
    console.log(person, cap2);
    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
    const person2 = {
        name: 'pop',
        age: 100,
        social: {
            team: 'nk'
        }
    }

    console.log(person2);

    const person3 = Object.assign({}, person2);
    person3.name = 'jack';
    console.log(person2, person3);

    person3.social.team = 'kk';

    const person4 = JSON.parse(JSON.stringify(person2));
    person4.social.team = 'wd';
    console.log(person2, person4);
})()