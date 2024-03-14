import { Console } from "@woowacourse/mission-utils";
class Order {
  #order;

  constructor(order) {
    this.#validateOrderForm(order);
    //this.#order = this.#createOrderArray(order);
    //this.#validate(order);
    this.#order = order;
  }

  #validate(order) {
    this.#validateOrderSum(order);
    this.#validateOrderDuplicate(order);
    this.#validateOrderNoMenu(order);
  }

  #createOrderArray(order) {
    const newOrder = order.split(",").map((item) => {
      let [name, count] = item.split("-");
      return [name, count];
    });
    Console.print(newOrder);
    return newOrder;
  }

  #validateOrderForm(order) {
    Console.print(order);
    /*  const newOrder = order.split(",");
    const result = newOrder.some((o) => !o.match(/^\S+-\d+$/));
    if (result) {
      Console.print(ERROR.Order);
      throw new Error(Error.Order);
    } */
  }

  #validateOrderNoMenu(eventDate) {
    const result = /^[1-9]\d*$/.test(eventDate);
    if (!result) {
      Console.print(ERROR.Order);
    }
  }

  #validateOrderSum(eventDate) {
    const result = /^[1-9]\d*$/.test(eventDate);
    if (!result) {
      Console.print(ERROR.Order);
    }
  }

  #validateOrderDuplicate(eventDate) {
    const result = /^[1-9]\d*$/.test(eventDate);
    if (!result) {
      Console.print(ERROR.Order);
    }
  }

  #getOrder() {
    return this.#order;
  }
}

export default Order;
