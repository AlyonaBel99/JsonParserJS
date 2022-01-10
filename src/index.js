let fs = require("fs");
let file = fs.readFileSync("package.json", "utf8");
let jsData = JSON.parse(file);
var d = new Date(2020, 1, 12);
console.log(jsData);

function getCardsArrayExpData(json, date) {
  try {
    let jsonFilter = json.CardInfo.filter((card) => {
      const dateStr = card.ExpDate;
      const [d, m, y] = dateStr.split("-");
      const cardDate = new Date(y, m - 1, d);
      return cardDate.getTime() - date.getTime() < 0;
    });
    if (jsonFilter.length) {
      return jsonFilter.map((obj) => {
        return obj.CardNumber.substr(obj.CardNumber.length - 4);
      });
    }
  } catch (error) {
    return null;
  }
  return null;
}
console.log(getCardsArrayExpData(jsData, d));