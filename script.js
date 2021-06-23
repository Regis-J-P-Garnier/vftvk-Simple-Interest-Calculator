function compute()
{
    // FORM DATA IMPORT //
    var validatedPrincipal = validatePrincipal(); // or launch onblur by HTML
    if (validatedPrincipal) {
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        // CALCULATED DATA //
        var interest = Number(principal) * Number(years) * Number(rate) /100.00;
        var year = new Date().getFullYear()+parseInt(years); // WARNING : on 'year' neq 'years"
        var amount = Number(interest)
        // OUTPUT //
        document.getElementById("result").innerHTML="If you deposit <b>"+principal+"</b>,\<br\>at an interest rate of <b>"+rate+"%</b>\<br\>You will receive an amount of <b>"+amount+"</b>,\<br\>in the year <b>"+year+"</b>\<br\>"
    }
}       
   
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=Number(rateval).toString()+"%";
}

function validatePrincipal(){
       var principal = document.getElementById("principal").value;
       if ( principal == '' || principal == undefined || principal <= 0){ //test empty, not number, leq 0 or 0
           alert("Enter a positive number").blur();
           document.getElementById(myElementID).focus("principal");
           return false;
        }
        return true;
}
        
