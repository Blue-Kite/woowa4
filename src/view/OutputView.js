import { Console } from "@woowacourse/mission-utils";
import { ERROR, EXPLAIN } from "../constants/Message";

class OutputView {
  printGreet() {
    Console.print(EXPLAIN.GREET);
  }
  printInputDateError() {
    Console.print(ERROR.DATE);
  }
}

export default OutputView;
