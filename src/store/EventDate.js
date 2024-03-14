import { ERROR } from "../constants/Message";
import { Console } from "@woowacourse/mission-utils";

class EventDate {
  #eventDate;

  constructor(eventDate) {
    this.#validate(eventDate);
    this.#eventDate = Number(eventDate);
  }

  #validate(eventDate) {
    this.#validateNumber(eventDate);
    this.#validateRange(eventDate);
  }

  #validateNumber(eventDate) {
    const result = /^[1-9]\d*$/.test(eventDate);
    if (!result) {
      Console.print(ERROR.DATE);
    }
  }

  #validateRange(eventDate) {
    if (1 <= Number(eventDate) && Number(eventDate) <= 31) {
      Console.print(ERROR.DATE);
    }
  }

  getEventDate() {
    return this.#eventDate;
  }
}

export default EventDate;
