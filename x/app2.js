var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
.goto('http://www.yad2.co.il/Nadlan/rent.php?AreaID=48&City=&HomeTypeID=&fromRooms=2&untilRooms=3&fromPrice=3000&untilPrice=4500&PriceType=1&FromFloor=&ToFloor=&EnterDate=&Info=')
.wait(2000)
.evaluate(function(){
    var list = document.querySelectorAll('.showPopupUnder td');
    list.forEach(function(elt){
       elt.click()
       console.log(elt)

       
      
       //We need synchronous sleep here
      //Wait 2 seconds
    });
  })
.then(function (result) {
    console.log(result)
})
.catch(function (error) {
    console.error('Search failed:', error);
});