const Nightmare =require('nightmare')
const nightmare = Nightmare({show:true});
var fs = require('fs')
var appt =[]

nightmare
  .goto('http://www.yad2.co.il/Nadlan/rent.php?AreaID=48&City=&HomeTypeID=&fromRooms=2&untilRooms=3&fromPrice=3000&untilPrice=4500&PriceType=1&FromFloor=&ToFloor=&EnterDate=&Info=')
  .wait(1000)
  .evaluate(() => document.getElementsByClassName('showPopupUnder'))
  .then((text)=>{
    console.log(text)
    fs.writeFile('text.txt',JSON.stringify(text))


  })
  .catch((error) => {
    console.error('Search failed:', error);
  });