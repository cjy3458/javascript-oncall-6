import Controller from './controllers/Controller.js';
import OutputView from './views/OutputView.js';

class App {
  async run() {
    const controller = new Controller();
    await controller.start();
  }
}

export default App;
