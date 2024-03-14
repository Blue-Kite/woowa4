import InputView from "./view/InputView";
import OutputView from "./view/OutputView";
import Event from "./store/Event";
import EventDate from "./store/EventDate";
import Order from "./store/Order";

class App {
  async run() {
    const outputView = new OutputView();
    const inputView = new InputView();

    outputView.printGreet();

    const inputDate = inputView.getDate();
    const eventDate = new EventDate(inputDate);
    const inputOrder = inputView.getOrder();
    const order = new Order(inputOrder);

    outputView.printPreview();
  }
}

export default App;
