
class App {

    run = (name = 'B Sandbox') => {
        console.log(`This App\`s name is "${name}".`);
    };
}

const app = new App();

app.run();
