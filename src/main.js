
class App {

    run = async (name = 'B Sandbox') => {
        console.log(`This App\`s name is "${name}".`);
    };

    /**  Classic version */
    // constructor() {
    //     this.run = (name = 'B Sandbox') => {
    //         console.log(`This App\`s name is "${name}".`);
    //     };
    // }
}

const app = new App();

app
    .run()
    .then(() => console.log('Done'))
    .catch(() => console.error('We have the problem:('));
