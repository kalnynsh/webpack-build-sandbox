
class App {

    run = async (name = 'B Sandbox') => {
        console.log(`This App\`s name is "${name}".`);
        console.log([9, 8, [7, 6, [5, 4, [3, 2]]]].flat(Infinity))
    };
}

const app = new App();

app
    .run()
    .then(() => console.log('Done'))
    .catch(() => console.error('We have the problem:('));
