/* @Author Joseph Early
 * CS341 Software Engineering HW4
*/

var express = require('express');
var router = express.Router();

// Get Order info
router.post('/', function(req, res, next) 
{
    const selectedMonth = req.body.month;
    console.log("MONTH SELECTED:", selectedMonth); //Debugging purposes

    //Simulate different order info for months to see change
    const possibleMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const orderQuantity = possibleMonths.indexOf(selectedMonth) + 1; //+1 for january 

    //ORGANIZE ORDER INFO
    const orderInfo = [
        { topping: "chocolate", quantity: orderQuantity },
        { topping: "strawberry", quantity: orderQuantity },
        { topping: "plain", quantity: orderQuantity },
    ];


    //SEND ORDER INFO BACK
    res.json({orderInfo, selectedMonth}); 
});

module.exports = router;
