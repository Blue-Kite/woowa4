import { Console } from "@woowacourse/mission-utils";
import { ERROR, EXPLAIN } from "../constants/Message";

class OutputView {
  printGreet() {
    Console.print(EXPLAIN.GREET);
  }
}

export default OutputView;
