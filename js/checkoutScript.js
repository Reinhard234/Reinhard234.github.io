var Dot1 = document.getElementById("dot1");
var Dot2 = document.getElementById("dot2");
var Dot3 = document.getElementById("dot3");
var DeliveryForm = document.getElementById("deliveryForm");
var PaymentForm = document.getElementById("PaymentForm");
var ConfirmationSection = document.getElementById("ConfirmationSection");




function checkoutClick(x) {
	switch(x) {
    	case 0:
    	{
    		console.log("hello");
			Dot1.classList.remove("currentlyActive");
			Dot1.classList.add("completed");

			Dot2.classList.remove("uncompleted");
			Dot2.classList.add("currentlyActive");
			DeliveryForm.classList.add("hideFormPart");
			PaymentForm.classList.remove("hideFormPart");
			break;
    	}

    	case 1:
    	{
    		console.log("hello");
			Dot2.classList.remove("currentlyActive");
			Dot2.classList.add("completed");

			Dot3.classList.remove("uncompleted");
			Dot3.classList.add("currentlyActive");
			PaymentForm.classList.add("hideFormPart");
			ConfirmationSection.classList.remove("hideFormPart");
			break;
    	}
			
	}
}

function backClick(x) {
	switch(x) {
    	case 0:
    	{
    		window.location.href = "index.html";
			break;
    	}

    	case 1:
    	{
    		console.log("hello");
			Dot2.classList.remove("currentlyActive");
			Dot2.classList.add("uncompleted");
			Dot1.classList.remove("completed");
			Dot1.classList.add("currentlyActive");

			PaymentForm.classList.add("hideFormPart");
			DeliveryForm.classList.remove("hideFormPart");
			break;
    	}
			
	}
}