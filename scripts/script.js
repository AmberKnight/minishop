var pay_amount = parseFloat(document.getElementById("pay_amount").innerHTML);
function addToCart(v) {
                    
                    if (window.XMLHttpRequest) {
                        // code for IE7+, Firefox, Chrome, Opera, Safari
                        xmlhttp=new XMLHttpRequest();
                      } else { // code for IE6, IE5
                        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                      }
                      xmlhttp.onreadystatechange=function() {
                        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                          //alert(xmlhttp.responseText);
                        }
                      }
                      xmlhttp.open("GET","js.php?add_to_cart="+v,true);
                      xmlhttp.send();
}
function removeFromCart(v) {
                    
                    if (window.XMLHttpRequest) {
                        // code for IE7+, Firefox, Chrome, Opera, Safari
                        xmlhttp=new XMLHttpRequest();
                      } else { // code for IE6, IE5
                        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                      }
                      xmlhttp.onreadystatechange=function() {
                        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                          document.getElementById("main").innerHTML=xmlhttp.responseText;
                          pay_amount = parseFloat(document.getElementById("pay_amount").innerHTML);
                          //alert(xmlhttp.responseText);
                          
                        }
                      }
                      xmlhttp.open("GET","js.php?remove_from_cart="+v,true);
                      xmlhttp.send();
}
function changePayAmount(v) {
                    
                    document.getElementById("pay_amount").innerHTML=pay_amount+v;
                    
}