class Order {
  #order;

  constructor(order) {
    this.#validate(order);
    this.#order = order;
  }

  #validate(numbers) {}

  #validateOrderSum(eventDate) {
    const result = /^[1-9]\d*$/.test(eventDate);
    if (!result) {
      Console.print(ERROR.DATE);
    }
  }
}

export default Order;
