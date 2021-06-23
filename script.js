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
        document.getElementById("result").innerHTML="If you deposit <b class="yellowed">"+principal+"</b>,\<br\>at an interest rate of <b class="yellowed">"+rate+"%</b>\<br\>You will receive an amount of <b class="yellowed">"+amount+"</b>,\<br\>in the year <b class="yellowed">"+year+"</b>\<br\>"
    }
}       
   
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=Number(rateval).toString()+"%";
}

function validatePrincipal(){
       var principal = document.getElementById("principal").value;
       if ( principal == undefined || principal <= 0){ //test empty, leq 0 or 0
           document.getElementById("principal").focus();
           alert("Enter a positive number").blur();
           return false;
        }
        return true;
}
        
