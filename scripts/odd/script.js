	//alert("showtab3");
    $(document).ready(function() {
        var slider = $('#slider').leanSlider({
            directionNav: '#slider-direction-nav',
            controlNav: '#slider-control-nav'
            
        });
    });
    $(document).ready(function() {
        var slider = $('#slider_current').leanSlider({
            directionNav: '#slider-current-direction-nav',
            controlNav: '#slider-current-control-nav'
            
        });
    });
    $(document).ready(function(){
document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';

});

    
    //var h = ((document.getElementById('menu_bar_content_p').offsetHeight)*2 + 'px');
    //var h = document.getElementById('menu_bar_content_p').offsetHeight;
    //h = h*2;
    //alert(document.getElementById('menu_bar_content').offsetHeight+23+10+'px');
    
     //alert(document.getElementById('contentf').offsetHeight);
    
    //alert("showtab4");
    
        if(document.getElementById('article_item_description_current') != undefined)
        document.getElementById('article_item_description_current').style.fontSize = "16px";
    
    
    
    
        
        
        
        $(window).resize(function(){
             if(document.body.clientWidth*0.1<100)
            {
                var m = document.body.clientWidth*0.00;
            }
            if(document.body.clientWidth*0.1<150)
            {
                var m = document.body.clientWidth*0.02;
            }
            else if(document.body.clientWidth*0.1>200)
            {
                var m = document.body.clientWidth*0.15;
            }
            else if(document.body.clientWidth*0.1>250)
            {
                var m = document.body.clientWidth*0.20;
            }
            else if(document.body.clientWidth*0.1>158 && document.body.clientWidth*0.1<200)
            {
                var m = document.body.clientWidth*0.05;
            }
            
            //alert(m);
            document.getElementById("main").style.marginLeft = m + "px";
            document.getElementById("main").style.marginBottom = 0 + "px";
            if(document.getElementById('contentf')!=null)
            {
                document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
            }
            //document.getElementById("main").style.marginRight = m + "px";
        });
        if(document.getElementById('menu_bar_content_space')!=null)
        {
            document.getElementById('menu_bar_content_space').style.height = document.getElementById('menu_bar_content').offsetHeight+23+50+'px';   
        }
        //alert(document.getElementById('content').offsetHeight);
        if(document.getElementById('contentf')!=null)
            {
                document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
            }
        $(document).ready(function(){
            
            
            if(document.body.clientWidth*0.1<100)
            {
                var m = document.body.clientWidth*0.00;
            }
            if(document.body.clientWidth*0.1<150)
            {
                var m = document.body.clientWidth*0.02;
            }
            else if(document.body.clientWidth*0.1>200)
            {
                var m = document.body.clientWidth*0.15;
            }
            else if(document.body.clientWidth*0.1>250)
            {
                var m = document.body.clientWidth*0.20;
            }
            else if(document.body.clientWidth*0.1>158 && document.body.clientWidth*0.1<200)
            {
                var m = document.body.clientWidth*0.05;
            }
            
            //alert(m);
            document.getElementById("main").style.marginLeft = m + "px";
            //document.getElementById("main").style.marginRight = m + "px";
            
        }) 
        //alert("showtab2");
        
        //alert("showtab");
        function showTab(v)
        {
            if(document.getElementById("menu_bar_content_p")!=null)
            {
                if(v==1)
                {
                    document.getElementById('tab_descr').setAttribute("class","menu_line_selected");
                    document.getElementById('tab_comments').setAttribute("class","menu_line");
                    document.getElementById('tab_map').setAttribute("class","menu_line");
                    document.getElementById("menu_bar_content_p").style.margin=10+"px";
                    //document.getElementById('map_cover').style.display="none";
                    if (window.XMLHttpRequest) {
                        // code for IE7+, Firefox, Chrome, Opera, Safari
                        xmlhttp=new XMLHttpRequest();
                      } else { // code for IE6, IE5
                        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                      }
                      xmlhttp.onreadystatechange=function() {
                        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                          document.getElementById("menu_bar_content_p").innerHTML=xmlhttp.responseText;
                          document.getElementById('menu_bar_content_space').style.height = document.getElementById('menu_bar_content').offsetHeight+23+50+'px';
                          document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
                           document.getElementById("company_photo_on_map").style.display='none';
                           document.getElementById("company_photo_background_on_map").style.display='none';
                          //alert(xmlhttp.responseText);
                        }
                      }
                      xmlhttp.open("GET","js.php?good_description="+v,true);
                      xmlhttp.send();
                }
                else if(v==2)
                {
                    document.getElementById('tab_descr').setAttribute("class","menu_line");
                    document.getElementById('tab_comments').setAttribute("class","menu_line_selected");
                    document.getElementById('tab_map').setAttribute("class","menu_line");
                    document.getElementById("menu_bar_content_p").style.margin=10+"px";
                    document.getElementById("menu_bar_content_p").innerHTML="";
                    //document.getElementById('map_cover').style.display="none";
                    if (window.XMLHttpRequest) {
                      // code for IE7+, Firefox, Chrome, Opera, Safari
                      xmlhttp=new XMLHttpRequest();
                    } else { // code for IE6, IE5
                      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                    }
                    xmlhttp.onreadystatechange=function() {
                      if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                        document.getElementById("menu_bar_content_p").innerHTML=xmlhttp.responseText;
                        document.getElementById('menu_bar_content_space').style.height = document.getElementById('menu_bar_content').offsetHeight+23+50+'px';
                        document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
                        document.getElementById("company_photo_on_map").style.display='none';
                        document.getElementById("company_photo_background_on_map").style.display='none';
                      }
                    }
                    xmlhttp.open("GET","js.php?good_comments="+v,true);
                    xmlhttp.send();
                    
                }
                else if(v==3)
                {
                    var loc = document.getElementById("good_item_address_current").innerHTML;
                    document.getElementById('tab_descr').setAttribute("class","menu_line");
                    document.getElementById('tab_comments').setAttribute("class","menu_line");
                    document.getElementById('tab_map').setAttribute("class","menu_line_selected");
                    document.getElementById("menu_bar_content_p").style.margin=0+"px";
                    document.getElementById("menu_bar_content_p").innerHTML="<div id='map' style='width: 100%; height: 800px'></div>";
                    document.getElementById("company_photo_on_map").style.display='block';
                    document.getElementById("company_photo_background_on_map").style.display='block';
                   //document.getElementById('map_cover').style.display="block";
                   var myMap;

            ymaps.ready(init);

            function init(){ 
                
                var myMap = new ymaps.Map ("map", {
                    center: [50.45,30.52],
                    zoom: 13
                });
                
                myMap.behaviors.enable('scrollZoom');
                myMap.behaviors.enable('multiTouch');
                //myMap.behaviors.enable('ruler');
                
                var myGeocoder = ymaps.geocode(loc.substr(7));
                myGeocoder.then(
                    function (res) {
                        var obj = res.geoObjects.get(0);
                        myMap.geoObjects.add(obj);
                        myMap.setBounds(myMap.geoObjects.getBounds());
                        myMap.setZoom(15);
                    },
                    function (err) {
                        alert("Ошибка");
                    });
                    }
                    document.getElementById('menu_bar_content_space').style.height = document.getElementById('menu_bar_content').offsetHeight+23+50+'px';
                    document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
                }
            }
            //document.getElementById('menu_bar_content_space').style.height = document.getElementById('menu_bar_content').offsetHeight+23+50+'px';
            //document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
        }
        //document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
        $(window).load(function()
        { 
            
            //document.getElementById('map_cover').style.display="none";
            if(document.getElementById('menu_bar_content_space')!=null)
            {
                document.getElementById('menu_bar_content_space').style.height = document.getElementById('menu_bar_content').offsetHeight+23+50+'px';
            }
            document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
            
        })
        
        
        
        function showProfileTab(v) // zzz
        {
            if(v==11)
            {
                if (window.XMLHttpRequest) {
                  // code for IE7+, Firefox, Chrome, Opera, Safari
                  xmlhttp=new XMLHttpRequest();
                } else { // code for IE6, IE5
                  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange=function() {
                  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                    document.getElementById("profile_content").innerHTML=xmlhttp.responseText;
                    document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
                  }
                }
                xmlhttp.open("GET","js.php?showprofileeditinfo="+v,true);
                xmlhttp.send();
            }
            else if(v==12)
            {
                
                if (window.XMLHttpRequest) {
                  // code for IE7+, Firefox, Chrome, Opera, Safari
                  xmlhttp=new XMLHttpRequest();
                } else { // code for IE6, IE5
                  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange=function() {
                  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                    document.getElementById("profile_content").innerHTML=xmlhttp.responseText;
                    document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
                  }
                }
                xmlhttp.open("GET","js.php?showprofilerent="+v,true);
                xmlhttp.send();
                //document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
            }
            else if(v==13)
            {
                
                if (window.XMLHttpRequest) {
                  // code for IE7+, Firefox, Chrome, Opera, Safari
                  xmlhttp=new XMLHttpRequest();
                } else { // code for IE6, IE5
                  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange=function() {
                  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                    document.getElementById("profile_content").innerHTML=xmlhttp.responseText;
                    document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
                  }
                }
                xmlhttp.open("GET","js.php?showmailingadd="+v,true);
                xmlhttp.send();
                //document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
            }
            else if(v==21)
            {
                
                if (window.XMLHttpRequest) {
                  // code for IE7+, Firefox, Chrome, Opera, Safari
                  xmlhttp=new XMLHttpRequest();
                } else { // code for IE6, IE5
                  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange=function() {
                  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                    document.getElementById("profile_content").innerHTML=xmlhttp.responseText;
                    document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
                  }
                }
                xmlhttp.open("GET","js.php?showshopoffers="+v,true);
                xmlhttp.send();
                //document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
            }
            else if(v==22)
            {
                
                if (window.XMLHttpRequest) {
                  // code for IE7+, Firefox, Chrome, Opera, Safari
                  xmlhttp=new XMLHttpRequest();
                } else { // code for IE6, IE5
                  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange=function() {
                  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                    document.getElementById("profile_content").innerHTML=xmlhttp.responseText;
                    document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
                  }
                }
                xmlhttp.open("GET","js.php?showaddoffer="+v,true);
                xmlhttp.send();
                //document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
            }
            else if(v==31)
            {
                
                if (window.XMLHttpRequest) {
                  // code for IE7+, Firefox, Chrome, Opera, Safari
                  xmlhttp=new XMLHttpRequest();
                } else { // code for IE6, IE5
                  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange=function() {
                  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                    document.getElementById("profile_content").innerHTML=xmlhttp.responseText;
                    document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
                  }
                }
                xmlhttp.open("GET","js.php?showgoodviews="+v,true);
                xmlhttp.send();
                //document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
            }
            else if(v==32)
            {
                if (window.XMLHttpRequest) {
                  // code for IE7+, Firefox, Chrome, Opera, Safari
                  xmlhttp=new XMLHttpRequest();
                } else { // code for IE6, IE5
                  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange=function() {
                  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                    document.getElementById("profile_content").innerHTML=xmlhttp.responseText;
                    document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
                  }
                }
                xmlhttp.open("GET","js.php?showbannerviews="+v,true);
                xmlhttp.send();
            }
            //document.getElementById('menu_bar_content_space').style.height = document.getElementById('menu_bar_content').offsetHeight+23+50+'px';
            document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
        }
        function showEditItem(v)
        {
            if (window.XMLHttpRequest) {
                  // code for IE7+, Firefox, Chrome, Opera, Safari
                  xmlhttp=new XMLHttpRequest();
                } else { // code for IE6, IE5
                  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange=function() {
                  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                    document.getElementById("profile_content").innerHTML=xmlhttp.responseText;
                    document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
                  }
                }
                xmlhttp.open("GET","js.php?showeditid="+v,true);
                xmlhttp.send();
                document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
        }
        
        
        
        
        
        
        function showSubcategory(str) {
            if(document.getElementById('offer_category_remove')!=null)
            {
                document.getElementById('offer_category').removeChild(document.getElementById('offer_category_remove'));
            }
            if (window.XMLHttpRequest) {
              // code for IE7+, Firefox, Chrome, Opera, Safari
              xmlhttp=new XMLHttpRequest();
            } else { // code for IE6, IE5
              xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange=function() {
              if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                document.getElementById("offer_subcategory").innerHTML=xmlhttp.responseText;
              }
            }
            xmlhttp.open("GET","js.php?subcat="+str,true);
            xmlhttp.send();
        }
        
        
        
        
        
        
        function showSearch()
        {
            document.getElementById('top_search').style.opacity=1;
            if(document.getElementById('search_word').value!='  что вы ищете?')
            {
                
            }
            else if(document.getElementById('search_word').value=='')
            {
                document.getElementById('search_word').value='  что вы ищете?';
            }
			else
			{
				document.getElementById('search_word').value='';
			}
            document.getElementById('search_word').style.color='black';
        }
        
        
        function hideSearch()
        {
            document.getElementById('top_search').style.opacity=0;
            //document.getElementById('search_word').value='что вы ищете?';
            document.getElementById('search_word').style.color='#D8D8D8';
        }
        
        
        function showAnswer(v)
        {
            switch(v)
            {
                case 1:
                    if(document.getElementById('a1').style.display=='block')
                    {
                        document.getElementById('a1').style.display='none';
                    }
                    else
                    {
                        document.getElementById('a1').style.display='block';
                    }
                break;
                case 2:
                    if(document.getElementById('a2').style.display=='block')
                    {
                        document.getElementById('a2').style.display='none';
                    }
                    else
                    {
                        document.getElementById('a2').style.display='block';
                    }
                break;
                case 3:
                    if(document.getElementById('a3').style.display=='block')
                    {
                        document.getElementById('a3').style.display='none';
                    }
                    else
                    {
                        document.getElementById('a3').style.display='block';
                    }
                break;
                case 4:
                    if(document.getElementById('a4').style.display=='block')
                    {
                        document.getElementById('a4').style.display='none';
                    }
                    else
                    {
                        document.getElementById('a4').style.display='block';
                    }
                break;
                case 5:
                    if(document.getElementById('a5').style.display=='block')
                    {
                        document.getElementById('a5').style.display='none';
                    }
                    else
                    {
                        document.getElementById('a5').style.display='block';
                    }
                break;
                case 6:
                    if(document.getElementById('a6').style.display=='block')
                    {
                        document.getElementById('a6').style.display='none';
                    }
                    else
                    {
                        document.getElementById('a6').style.display='block';
                    }
                break;
            }
            document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
        }
        
        
        var c=0;
        function filterArticles(v)
        {
            if(v==1)
            {
                if (window.XMLHttpRequest) {
                  // code for IE7+, Firefox, Chrome, Opera, Safari
                  xmlhttp=new XMLHttpRequest();
                } else { // code for IE6, IE5
                  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange=function() {
                  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                    document.getElementById('article_items').innerHTML=xmlhttp.responseText;
                    document.getElementById('filtera1').style.color='orangered';
                    document.getElementById('filtera2').style.color='#fdc925';
                    document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
                    //alert(xmlhttp.responseText);
                  }
                }
                xmlhttp.open("GET","js.php?filtera="+v,true);
                xmlhttp.send();
            }
            else if(v==2)
            {
                    if (window.XMLHttpRequest) {
                  // code for IE7+, Firefox, Chrome, Opera, Safari
                  xmlhttp=new XMLHttpRequest();
                } else { // code for IE6, IE5
                  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange=function() {
                  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                    document.getElementById('article_items').innerHTML=xmlhttp.responseText;
                    //document.getElementById('filtera1').style.color='#fdc925';
                    if (c==0) {
                        document.getElementById('filtera2').style.color='#77982d';
                        //alert('green');
                        c=1;
                    }
                    else
                    {
                        document.getElementById('filtera2').style.color='grey';
                        //alert('silver');
                        c=0;
                    }
                    
                    document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
                    //alert(xmlhttp.responseText);
                  }
                }
                xmlhttp.open("GET","js.php?filtera="+v,true);
                xmlhttp.send();
            }
            
            
        }
        
        
        
        
        function filterGoods(v)
        {
            if(v==1)
            {
                if (window.XMLHttpRequest) {
                  // code for IE7+, Firefox, Chrome, Opera, Safari
                  xmlhttp=new XMLHttpRequest();
                } else { // code for IE6, IE5
                  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange=function() {
                  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                    document.getElementById("content_right_tab").innerHTML=xmlhttp.responseText;
                    //alert(xmlhttp.responseText);
                  }
                }
                xmlhttp.open("GET","js.php?filter="+v,true);
                xmlhttp.send();
            }
            else if(v==2)
            {
                    if (window.XMLHttpRequest) {
                  // code for IE7+, Firefox, Chrome, Opera, Safari
                  xmlhttp=new XMLHttpRequest();
                } else { // code for IE6, IE5
                  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange=function() {
                  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                    document.getElementById("content_right_tab").innerHTML=xmlhttp.responseText;
                    //alert(xmlhttp.responseText);
                  }
                }
                xmlhttp.open("GET","js.php?filter="+v,true);
                xmlhttp.send();
            }
            else if(v==3)
            {
                    if (window.XMLHttpRequest) {
                 // code for IE7+, Firefox, Chrome, Opera, Safari
                 xmlhttp=new XMLHttpRequest();
               } else { // code for IE6, IE5
                 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
               }
               xmlhttp.onreadystatechange=function() {
                 if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                   document.getElementById("content_right_tab").innerHTML=xmlhttp.responseText;
                 }
               }
               xmlhttp.open("GET","js.php?filter="+v,true);
               xmlhttp.send();
            }
            else if(v==4)
            {
                    if (window.XMLHttpRequest) {
                  // code for IE7+, Firefox, Chrome, Opera, Safari
                  xmlhttp=new XMLHttpRequest();
                } else { // code for IE6, IE5
                  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange=function() {
                  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                    document.getElementById("content_right_tab").innerHTML=xmlhttp.responseText;
                  }
                }
                xmlhttp.open("GET","js.php?filter="+v,true);
                xmlhttp.send();
                            

            }
            
            document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
        }
        
        
        function showProfileUserQuestion(v)
        {
            switch(v)
            {
                    case 1:
                    document.getElementById('profile_user_answer1').style.display='block';
                    break;
                    case 2:
                    document.getElementById('profile_user_answer2').style.display='block';
                    break;
                    case 3:
                    document.getElementById('profile_user_answer3').style.display='block';
                    break;
            }
        }
        function hideProfileUserQuestion(v)
        {
            switch(v)
            {
                    case 1:
                    document.getElementById('profile_user_answer1').style.display='none';
                    break;
                    case 2:
                    document.getElementById('profile_user_answer2').style.display='none';
                    break;
                    case 3:
                    document.getElementById('profile_user_answer3').style.display='none';
                    break;
            }
        }
        function showProfilePasswordFields()
        {
            document.getElementById('edit_new_password').style.display='block';
            document.getElementById('edit_new_password_repeat').style.display='block';
            document.getElementById('edit_new_password_input').style.display='block';
            document.getElementById('edit_new_password_repeat_input').style.display='block';
            document.getElementById('profile_change_password_button').style.display='none';
            document.getElementById('profile_change_password_example').style.display='block';
            document.getElementById('profile_change_password_button_left_space').style.display='none';
            
        }
        
        
                function sleep(millis, callback) {
    setTimeout(function()
            { callback(); }
    , millis);
}


        function changeView(v)
        {
            switch(v)
            {
                    case 1:
                        
                    if (window.XMLHttpRequest) {
                  // code for IE7+, Firefox, Chrome, Opera, Safari
                  xmlhttp=new XMLHttpRequest();
                } else { // code for IE6, IE5
                  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange=function() {
                  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                    document.getElementById("article_items").style.width=897+'px';
                    document.getElementById("article_items").innerHTML=xmlhttp.responseText;
                    if(document.getElementById("content_left_bara") != undefined)
                    document.getElementById("content_left_bara").style.display='block';
                    document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
                  }
                }
                xmlhttp.open("GET","js.php?view="+v,true);
                xmlhttp.send();
                    
                    break;
                    case 2:
                        
                    if (window.XMLHttpRequest) {
                  // code for IE7+, Firefox, Chrome, Opera, Safari
                  xmlhttp=new XMLHttpRequest();
                } else { // code for IE6, IE5
                  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange=function() {
                  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                    document.getElementById("article_items").style.width=1048+'px';
                    document.getElementById("article_items").innerHTML=xmlhttp.responseText;
                    if(document.getElementById("content_left_bara") != undefined)
                    document.getElementById("content_left_bara").style.display='none';
                    document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
                    document.getElementById('vertical_line').style.height = document.getElementById('contentf').offsetHeight-280+'px';
                  }
                }
                xmlhttp.open("GET","js.php?view="+v,true);
                xmlhttp.send();
                    
                    break;
            }
        }
        
        
        
        
        function changeStyle(selectorText)
{
                    var theRules = new Array();
                    if (document.styleSheets[0].cssRules) {
                        theRules = document.styleSheets[0].cssRules;
                    } 
                    else if (document.styleSheets[0].rules) {
                        theRules = document.styleSheets[0].rules;
                    }
                    for (n in theRules)
                    {
                        if (theRules[n].selectorText === selectorText)   {
                            theRules[n].style.color = 'blue';
                        }
                    }
        
    }
        
        
        function changeText(v)
        {
            switch(v)
            {
                    case 1:
                        
                    //document.getElementById('article_item_description_current').style.fontSize = (document.getElementById('article_item_description_current').style.fontSize + 2) + 'px';
                    if(document.getElementById('article_item_description_current').style.fontSize == "10px")
                    document.getElementById('article_item_description_current').style.fontSize = "12px";
                    else if(document.getElementById('article_item_description_current').style.fontSize == "12px")
                    document.getElementById('article_item_description_current').style.fontSize = "14px";
                    else if(document.getElementById('article_item_description_current').style.fontSize == "14px")
                    document.getElementById('article_item_description_current').style.fontSize = "16px";
                    else if(document.getElementById('article_item_description_current').style.fontSize == "16px")
                    document.getElementById('article_item_description_current').style.fontSize = "18px";
                    else if(document.getElementById('article_item_description_current').style.fontSize == "18px")
                    document.getElementById('article_item_description_current').style.fontSize = "20px";
                    else if(document.getElementById('article_item_description_current').style.fontSize == "20px")
                    document.getElementById('article_item_description_current').style.fontSize = "22px";
                    else if(document.getElementById('article_item_description_current').style.fontSize == "22px")
                    document.getElementById('article_item_description_current').style.fontSize = "24px";
                    else if(document.getElementById('article_item_description_current').style.fontSize == "24px")
                    document.getElementById('article_item_description_current').style.fontSize = "26px";
                
                    changeStyle('article_item_description_current');
                    
                    
                   
                    
                    
                    
                    
                    
                    
                    document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
                    break;
                    case 2:
                     
                    if(document.getElementById('article_item_description_current').style.fontSize == "18px")
                    document.getElementById('article_item_description_current').style.fontSize = "16px";
                    else if(document.getElementById('article_item_description_current').style.fontSize == "20px")
                    document.getElementById('article_item_description_current').style.fontSize = "18px";
                    else if(document.getElementById('article_item_description_current').style.fontSize == "22px")
                    document.getElementById('article_item_description_current').style.fontSize = "20px"; 
                    else if(document.getElementById('article_item_description_current').style.fontSize == "24px")
                    document.getElementById('article_item_description_current').style.fontSize = "22px"; 
                    else if(document.getElementById('article_item_description_current').style.fontSize == "26px")
                    document.getElementById('article_item_description_current').style.fontSize = "24px";
                    else if(document.getElementById('article_item_description_current').style.fontSize == "16px")
                    document.getElementById('article_item_description_current').style.fontSize = "14px";
                    else if(document.getElementById('article_item_description_current').style.fontSize == "14px")
                    document.getElementById('article_item_description_current').style.fontSize = "12px";
                    else if(document.getElementById('article_item_description_current').style.fontSize == "12px")
                    document.getElementById('article_item_description_current').style.fontSize = "10px";
                    
                    
                    document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
                    break;
            }
        }
        
        
        
        
        function hideGoodFields(v) {
            if (v=='discount' || v=='sale')
            {
                document.getElementById('offer_discount').style.visibility = 'visible';
                document.getElementById('offer_economy').style.visibility = 'visible';
                document.getElementById('offer_pricef').style.visibility = 'visible';
            }
            else if (v=='arrival')
            {
                document.getElementById('offer_discount').style.visibility = 'hidden';
                document.getElementById('offer_economy').style.visibility = 'hidden';
                document.getElementById('offer_pricef').style.visibility = 'hidden';
            }
            else
            {
                document.getElementById('offer_discount').style.visibility = 'hidden';
                document.getElementById('offer_economy').style.visibility = 'hidden';
                document.getElementById('offer_pricef').style.visibility = 'hidden';
            }
            
        }
        
        
        function showPhotoManager() {
            if (window.XMLHttpRequest) {
                  // code for IE7+, Firefox, Chrome, Opera, Safari
                  xmlhttp=new XMLHttpRequest();
                } else { // code for IE6, IE5
                  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange=function() {
                  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                    document.getElementById("profile_content").innerHTML=xmlhttp.responseText;
                    document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
                  }
                }
                xmlhttp.open("GET","js.php?showphotomanager="+50,true);
                xmlhttp.send();
        }
        
        
        function photoManagerDeleteImage(v) {
            //var im = "photo_manager_photo"+v;
            //var imc = "photo_manager_photo_control"+v;
            if (window.XMLHttpRequest) {
                  // code for IE7+, Firefox, Chrome, Opera, Safari
                  xmlhttp=new XMLHttpRequest();
                } else { // code for IE6, IE5
                  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange=function() {
                  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                    document.getElementById('offer_image_list').innerHTML = xmlhttp.responseText;
                    document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
                  }
                }
                xmlhttp.open("GET","js.php?photomanagerdeleteimage="+v,true);
                xmlhttp.send();
        }
        
        
        



        
        /*function increaseBannerViews(v)
        {
                    if (window.XMLHttpRequest) {
                      // code for IE7+, Firefox, Chrome, Opera, Safari
                      xmlhttp=new XMLHttpRequest();
                    } else { // code for IE6, IE5
                      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                    }
                    xmlhttp.onreadystatechange=function() {
                      if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                        //document.getElementById("menu_bar_content_p").innerHTML=xmlhttp.responseText;
                      }
                    }
                    xmlhttp.open("GET","js.php?banner_view="+v,true);
                    xmlhttp.send();
                    //sleep(2000);
                    //alert("WTF");
        }*/
        
        
        
   $(document).ready(function(){
if(document.getElementById('vertical_line') != undefined)
{
    document.getElementById('vertical_line').style.height = document.getElementById('contentf').offsetHeight+'px';
    document.getElementById('article_items').style.width = 1048+'px';
}
   });
   
   $(window).bind("load", function() {
    
   if(document.getElementById('vertical_line') != undefined)
{
    document.getElementById('vertical_line').style.height = document.getElementById('contentf').offsetHeight-280+'px';
    document.getElementById('article_items').style.width = 1048+'px';
    
}
// Photo gallery > Vertical
                            if ($(".photosgallery-vertical")!= undefined)
                            {
                                
                            
				$(".photosgallery-vertical").sliderkit({
					circular:true,
					//mousewheel:true,
					shownavitems:4,
					verticalnav:true,
					navclipcenter:true,
					auto:false
				});
                            }
});