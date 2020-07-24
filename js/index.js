$(document).ready(function(){
    "use strict";

    
        
class FlipFlopGameControl extends Aθεος.Αφροδίτη.UserWorldControl
{
    constructor( )
    {
        super({
            Title:"Chaat2"
            ,ReloadDocumentOnReset: true
            ,Container:document.getElementById("idMagicUsersContainer")
        });              

        var sendmessage = this.Server.PatchRaw(function (msg, txt)
        {
          //  const user = self.coven.User(msg.sender);
            //$('#messages').append($('<li>').text(new Date(msg.timestamp) + ":" + user.name + "> " + txt));
            document.getElementById("output").innerHTML+=txt;
        }
        );
        document.getElementById("sndbtn").addEventListener("click",function (){
        //document.getElementById("output").innerHTML+=document.getElementById("chatbox").value;
        sendmessage(document.getElementById("chatbox").value)
        });
        
    }
    OnInit()
    {
        super.OnInit();

    }

   
}

Aθεος.Αφροδίτη.OnReady().then(()=>new FlipFlopGameControl());



});
