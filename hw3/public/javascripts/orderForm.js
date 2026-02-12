/* Joseph Early
 * 4 February 2026
*/ 


//Load the entire page first
$(document).ready(function () {

    //Form Validation Function
    $('#orderButton').click(function () {

        //Retrieve Order Info
        let orderNotes = $('#orderNotes').val();
        let quantity = $('#toppingQuantity').val();
        let orderToppings = $('input[name="toppingOption"]:checked').val();

        //Check for 'vegan' specified in notes (not case sensitive)
        if (orderNotes.toLowerCase().includes("vegan")) {
            alert("Cheesecake contains dairy.");
        }

        //Check for unclicked topping
        else if (orderToppings == undefined) {
            alert("No toppings selected");
        }

        //Place Order
        else {
            $('#orderForm').hide();
            $('#confirmedOrderInfo').show();

            //Display Confirmed Order Info
            $('#confirmedOrderInfo').html(`
                            <h2>Thank you! Your order has been placed</h2>
                            <ul>
                                <li>Special Instructions: ${orderNotes}</li>
                                <li>Quantity: ${quantity}</li>
                                <li>Toppings: ${orderToppings} </li>
                            </ul>
                        `);
        }

    });// ORDER FORM VALIDATION 


    //DROPDOWN MENU
    $('#dropdownMenu').hover(

        //DISPLAY MENU
        function () {
            $('#monthDropdown').show();
        },

        //HIDE MENU
        function () {
            $('#monthDropdown').hide();
        }
    );

    //CHANGE SELECTED MONTH WHEN CLICKED
    $('#monthDropdown li').click(function () {
        //Update text to selected month
        let selectedMonth = $(this).text();
        $('#selectedMonth').text(selectedMonth);

        //POST SELECTED MONTH
        $.post('/orders', { month: selectedMonth }, function(returnedInfo) {
            
            //DEBUGGING INFO
            console.log("RETURNED INFO IS: ", returnedInfo);

            //FORMAT ORDER INFO
            let monthlyDisplayInfo = '<ul>';
            returnedInfo.orderInfo.forEach(order => {
                monthlyDisplayInfo += `<li>${order.topping}: ${order.quantity} </li>`;
            });
            monthlyDisplayInfo += '</ul>';

            //DISPLAY ORDER INFO
            $('#monthlyOrderInfo').html(monthlyDisplayInfo);
        });
    });

});
