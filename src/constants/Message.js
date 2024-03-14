export const MENU = {
  appetizer: [
    { name: "양송이수프", price: 6000 },
    { name: "타파스", price: 5500 },
    { name: "시저샐러드", price: 8000 },
  ],
  main: [
    { name: "티본스테이크", price: 55000 },
    { name: "바비큐립", price: 54000 },
    { name: "해산물파스타", price: 35000 },
    { name: "크리스마스파스타", price: 25000 },
  ],
  desert: [
    { name: "초코케이크", price: 15000 },
    { name: "바비큐립", price: 54000 },
  ],
  drink: [
    { name: "제로콜라", price: 3000 },
    { name: "레드와인", price: 60000 },
    { name: "샴페인", price: 25000 },
  ],
};

export const SPECIAL_DAY = [3, 10, 17, 24, 31];

export const BADGES = {
  STAR: "별",
  TREE: "트리",
  SANTA: "산타",
};

export const EXPLAIN = {
  GREET: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
  PREVIEW: "12월 26일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!",
  MENU: "<주문 메뉴>",
  BEFORE_TOTAL_PRICE: "<할인 전 총주문 금액>",
  PRESENT: "<증정 메뉴>",
  BENEFIT: "<혜택 내역>",
  TOTAL_PRICE: "<총혜택 금액>",
  PAYMENT_PRICE: "<할인 후 예상 결제 금액>",
  EVENT: "<12월 이벤트 배지>",
};

export const ERROR = {
  DATE: "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.",
  ORDER: "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
};

export const INPUT = {
  DATE: "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)",
  ORDER:
    "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)",
};
