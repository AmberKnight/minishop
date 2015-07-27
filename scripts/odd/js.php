<?php
session_start();
//include_once('service/mysql.php');
//include_once('service/config.php');
include_once('classes/info.php');
if(empty($_SESSION['c']))
{
    $_SESSION['c']=0;
}

$info = new Info();

if(isset($_GET['photomanagerdeleteimage']))
{
    $info->PhotoManagerDeleteImage($_GET['photomanagerdeleteimage']);
}
if(isset($_GET['showphotomanager']))
{
    $info->ShowPhotoManager();
}
if(isset($_GET['showprofilerent']))
{
    $info->ShowProfileRent();
}
if(isset($_GET['showmailingadd']))
{
    $info->ShowMailingAdd();
}
if(isset($_GET['showaddoffer']))
{
    $info->ShowAddOffer();
}
if(isset($_GET['showprofileeditinfo']))
{
    $info->ShowProfileEditInfo();
}
if(isset($_GET['showeditid']))
{
    $_SESSION['good_edit_id']=$_GET['showeditid'];
    $info->ShowProfileEditItem($_GET['showeditid']);
}
if(isset($_GET['showshopoffers']))
{
    $info->ShowShopOffers();
}
if(isset($_GET['showgoodviews']))
{
    $info->ShowGoodViews();
}
if(isset($_GET['showbannerviews']))
{
    $info->ShowBannerViews();
}
if(isset($_GET['good_comments']))
{
    $info->ShowComments($_SESSION['good_id']);
}
if(isset($_GET['good_description']))
{
    $info->GetGoodDescription();
}
if(isset($_GET['banner_view']))
{
    $info->IncreaseBannerViews($_GET['banner_view']);
    $info->RedirectFromBanner($_GET['banner_view']);
}
if(isset($_GET['view']))
{
    if($_GET['view']==1)
    {
        $info->ShowHorizontalView();
    }
    else if($_GET['view']==2)
    {
        $info->ShowVerticalView();
    }
}
if(isset($_GET['subcat']))
{
    $q = intval($_GET['subcat']);

    global $_CONFIG;
    $dbc = new DB();
    $dbc->Connect("{$_CONFIG['db']['host']}", "{$_CONFIG['db']['user']}", "{$_CONFIG['db']['password']}", "{$_CONFIG['db']['db_name']}");

    $dbc->Query("SELECT * FROM tsubcategory WHERE cCategoryID='{$_GET['subcat']}'");
    $result = $dbc->ResultToArray();
    foreach ($result as $Value) {
        echo "<option value='{$Value['cID']}'>{$Value['cName']}</option>";
    }
}

if(isset($_GET['filtera']))
{
    if($_SESSION['c']==0)
    {
        $_SESSION['filtera'] = $_GET['filtera'];
        $_SESSION['c']=1;
    }
    else
    {
        $_SESSION['filtera'] = NULL;
        $_SESSION['c']=0;
    }
    
    if($_SESSION['show_type']=='categorya')
    {
        $info->ShowCategoryA($_SESSION['show_id']);
    }
    else if($_SESSION['show_type']=='searcha')
    {
        $info->SearchA($_SESSION['show_id']);
    }
    else if($_SESSION['show_type']=='all')
    {
        $info->ShowArticles();
    }
}
if(isset($_GET['filter']))
{
    $_SESSION['filter'] = $_GET['filter'];
    echo $_SESSION['last_path'];
    $info->ShowFilter();
    if($_SESSION['show_type']=='category')
    {
        $info->ShowCategory($_SESSION['show_id']);
    }
    else if($_SESSION['show_type']=='subcategory')
    {
        $info->ShowSubcategory($_SESSION['show_id']);
    }
}
else
{
    $_SESSION['filter'] = NULL;
}

?>