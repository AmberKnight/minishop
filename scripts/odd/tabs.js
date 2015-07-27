function showTab(v)
        {
            
            if(v==1)
            {
                document.getElementById('tab_descr').setAttribute("class","menu_line_selected");
                document.getElementById('tab_comments').setAttribute("class","menu_line");
                document.getElementById('tab_map').setAttribute("class","menu_line");
                document.getElementById("menu_bar_content_p").style.margin=10+"px";
                //document.getElementById('map_cover').style.display="none";
                document.getElementById("menu_bar_content_p").innerHTML="<?php echo $_SESSION['descr'] ?>";
            }
            else if(v==2)
            {
                document.getElementById('tab_descr').setAttribute("class","menu_line");
                document.getElementById('tab_comments').setAttribute("class","menu_line_selected");
                document.getElementById('tab_map').setAttribute("class","menu_line");
                document.getElementById("menu_bar_content_p").style.margin=10+"px";
                document.getElementById("menu_bar_content_p").innerHTML="";
                //document.getElementById('map_cover').style.display="none";
                /*if (window.XMLHttpRequest) {
                  // code for IE7+, Firefox, Chrome, Opera, Safari
                  xmlhttp=new XMLHttpRequest();
                } else { // code for IE6, IE5
                  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange=function() {
                  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                    document.getElementById("menu_bar_content_p").innerHTML=xmlhttp.responseText;
                  }
                }
                xmlhttp.open("GET","showcomments.php?q="+"<?php echo $_GET['good_id'] ?>",true);
                xmlhttp.send();*/
                document.getElementById("menu_bar_content_p").innerHTML="<?php if(!empty($_GET['good_id'])){$info->ShowComments($_GET['good_id']);}else{} ?>";
            }
            else if(v==3)
            {
                document.getElementById('tab_descr').setAttribute("class","menu_line");
                document.getElementById('tab_comments').setAttribute("class","menu_line");
                document.getElementById('tab_map').setAttribute("class","menu_line_selected");
                document.getElementById("menu_bar_content_p").style.margin=0+"px";
               document.getElementById("menu_bar_content_p").innerHTML="<div id='map' style='width: 100%; height: 800px'></div>";
               //document.getElementById('map_cover').style.display="block";
               var myMap;
    
        ymaps.ready(init);

        function init(){ 
            
            var myMap = new ymaps.Map ("map", {
                center: [50.45,30.52],
                zoom: 13
            }); 
            
            var myGeocoder = ymaps.geocode("<?php echo $_SESSION['address'] ?>");
            myGeocoder.then(
                function (res) {
                    var obj = res.geoObjects.get(0);
                    myMap.geoObjects.add(obj);
                    myMap.setBounds(myMap.geoObjects.getBounds());
                    myMap.setZoom(15);
                },
                function (err) {
                    alert("Œ¯Ë·Í‡");
                });
                }
               
            }
            document.getElementById('menu_bar_content_space').style.height = document.getElementById('menu_bar_content').offsetHeight+23+50+'px';
            document.getElementById('contentf').style.height = document.getElementById('content').offsetHeight+'px';
        }