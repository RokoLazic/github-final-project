function compute()
{   //Reference inputs and calculate interest
    var principal = document.getElementById("principal").value;  
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;

    //Convert year input into actual year
    var year = new Date().getFullYear()+parseInt(years);
    
    //Show alert if amount input is less or equal to zero, bring focus back to input
    if (principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        document.getElementById("result").innerHTML="";
        return false;
    }
    //Show text after button click
    document.getElementById("result").innerHTML="<br\><br\> If you deposit "+"<mark>"+principal+"</mark>"+",<br\>at an interest rate of "+"<mark>"+rate+"% </mark><br\>You will receive an amount of "+"<mark>"+interest+"</mark>"+",<br\>in the year "+"<mark>"+year+"</mark>"+"<br\>"+".";
   
}

function updateRate()
{   //Dynamically change percentage when using slider
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";

}

        