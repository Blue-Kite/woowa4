import { Console } from "@woowacourse/mission-utils";
import { INPUT } from "../constants/Message";

class InputView {
  async getDate() {
    return await Console.readLineAsync(INPUT.DATE);
  }
  async getOrder() {
    return await Console.readLineAsync(INPUT.ORDER);
  }
}

export default InputView;
