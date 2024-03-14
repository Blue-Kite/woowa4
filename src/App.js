import InputView from "./view/InputView";
import OutputView from "./view/OutputView";

class App {
  async run() {
    const outputView = new OutputView();
    const inputView = new InputView();

    outputView.printGreet();
  }
}

export default App;
