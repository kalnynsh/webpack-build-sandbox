function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class App {
  constructor() {
    _defineProperty(this, "run", async (name = 'B Sandbox') => {
      console.log(`This App\`s name is "${name}".`);
      console.log([9, 8, [7, 6, [5, 4, [3, 2]]]].flat(Infinity));
    });
  }

}

const app = new App();
app.run().then(() => console.log('Done')).catch(() => console.error('We have the problem:('));