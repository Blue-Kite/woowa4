import InputView from "./view/InputView";
import OutputView from "./view/OutputView";
import Event from "./store/Event";
import EventDate from "./store/EventDate";
import Menu from "./store/Menu";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const outputView = new OutputView();
    const inputView = new InputView();

    outputView.printGreet();

    const inputDate = inputView.getDate();
    const eventDate = new EventDate(inputDate);
    const inputMenu = inputView.getOrder();
  }
}

export default App;
