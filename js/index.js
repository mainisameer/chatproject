$(document).ready(function(){
    "use strict";

    /*
    var msg="Hello from Javascript";
    var resultDiv=document.getElementById("results");
    console.log(resultDiv);
    resultDiv.innerHTML="<p>Hello</p>";
    function showmsg(msg){
        console.log (msg);
    }
    showmsg("this is the message");
    */
    var resultList=jQuery("#resultList");
    resultList.text("change the contents");
    var toggleButton=$("#toggleButton");
    toggleButton.on("click",function(){
        resultList.toggle(500);
        if(toggleButton.text()=="Hide")
        {
         toggleButton.text("Show");
        }    
        else 
        {
            toggleButton.text("Hide");
        }
    })
});
