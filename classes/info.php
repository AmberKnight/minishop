<?php

session_start();
require_once('service/mysql.php');
require_once('service/config.php');


class Info {
    
    private $user_id;
    private $cart_id;
    private $user_cash;
    private $config;
    private $dbc;

    public function __construct() {
        $this->getUserInfo();
    }
    
    private function getUserInfo()
    {
        
        $this->user_id=1;
        global $_CONFIG;
        $this->config = $_CONFIG;
        $dbc = new DB();
        $dbc->Connect("{$_CONFIG['db']['host']}", "{$_CONFIG['db']['user']}", "{$_CONFIG['db']['password']}", "{$_CONFIG['db']['db_name']}");
        $this->dbc=$dbc;
        $this->dbc->Query("SELECT * FROM minishop_tcart WHERE cUserID=".$this->user_id);
        $cart = $this->dbc->ResultToArray();
        $this->cart_id = $cart[0]['cID'];
        $this->dbc->Query("SELECT * FROM minishop_tusers WHERE cID=".$this->user_id);
        $user = $this->dbc->ResultToArray();
        $this->user_cash = $user[0]['cCash'];
        
        
    }
    
    public function Show(){
        
        echo "<div id='main'>";
        echo "<div id='main_page_link'><a href='index.php'>Main</a><div class='user_cash'>".$this->user_cash."$</div></div>";
        if(!isset($_GET['page']) && !isset($_POST['submit_pay']))
        {
            $this->showMainPage();
        }
        else if(isset($_POST['submit_pay']))
        {
            $this->showSubmitPayPage();
        }
        else if($_GET['page']=='cart')
        {
            $this->showCartPage();
        }
        
        echo "<div class='button_show_cart'><a href='?page=cart'>My Cart</a></div>";
        echo "</div>";
    }
    
    private function showMainPage()
    {
            
            
            
            $this->dbc->Query("SELECT * FROM minishop_tgoods");
            $goods = $this->dbc->ResultToArray();
            echo "<div id='goods'>";
            
            foreach ($goods as $Value) {
                echo "<div class='good'>";
                echo "<div class='good_name'>{$Value['cName']}</div>";
                echo "<div class='good_price'>{$Value['cPrice']}$</div>";
                echo "<div class='good_rating'>{$Value['cRating']}</div>";
                echo "<div class='button_add_to_cart'><a href='#' onclick='addToCart({$Value['cID']});'>Add to cart</a></div>";
                echo "</div>";
            }
            
            echo "</div>";
    }
    
    
    
    
    
    private function showCartPage()
    {
            
            
            
            $this->dbc->Query("SELECT * FROM minishop_tcart_goods WHERE cCartID=".$this->cart_id);
            $tcart_goods = $this->dbc->ResultToArray();
            $goods;
            $i=0;
            foreach ($tcart_goods as $Value) {
                $this->dbc->Query("SELECT * FROM minishop_tgoods WHERE cID=".$Value['cGoodID']);
                $temp = $this->dbc->ResultToArray();
                $goods[$i]['cID'] = $temp[0]['cID'];
                $goods[$i]['cName'] = $temp[0]['cName'];
                $goods[$i]['cPrice'] = $temp[0]['cPrice'];
                $goods[$i]['cRating'] = $temp[0]['cRating'];
                $i++;
            }
            
            
            if(isset($goods))
            {
                echo "<div id='goods'>";
                foreach ($goods as $Value) {
                    echo "<div class='good'>";
                    echo "<div class='good_name'>{$Value['cName']}</div>";
                    echo "<div class='good_price'>{$Value['cPrice']}$</div>";
                    echo "<div class='good_rating'>{$Value['cRating']}</div>";
                    echo "<div class='button_add_to_cart'><a href='#' onclick='removeFromCart({$Value['cID']});'>Remove from cart</a></div>";
                    echo "</div>";
                }
                echo "</div>";
                $this->showPay();
            }
            else
            {
                echo "<div>Cart is empty</div>";
            }
            
            
            
           
    }
    
    
    private function showPay()
    {
        echo "<form action='index.php?page=cart' method='POST'>";
        $this->showTransport();
        //echo "<div class='button_pay'><a href='' onclick='Pay()'>Pay</a></div>";
        echo "<div class='button_pay'><input type='submit' name='submit_pay' value='Pay'></div>";
        $this->showPayAmount();
        //echo "</div>";
        echo "</form>";
    }
    
    private function calculatePayAmount()
    {
        $this->dbc->Query("SELECT * FROM minishop_tcart_goods WHERE cCartID='{$this->cart_id}'");
        $tcart_goods = $this->dbc->ResultToArray();
        $pay_amount = 0;
        foreach($tcart_goods as $value)
        {
            $this->dbc->Query("SELECT * FROM minishop_tgoods WHERE cID='{$value['cGoodID']}'");
            $good = $this->dbc->ResultToArray();
            $pay_amount+=$good[0]['cPrice'];
        }
        return $pay_amount;
    }
    
    private function calculatePayAmountWithTransport($transport_id)
    {
        $this->dbc->Query("SELECT * FROM minishop_tcart_goods WHERE cCartID='{$this->cart_id}'");
        $tcart_goods = $this->dbc->ResultToArray();
        $pay_amount = 0;
        foreach($tcart_goods as $value)
        {
            $this->dbc->Query("SELECT * FROM minishop_tgoods WHERE cID='{$value['cGoodID']}'");
            $good = $this->dbc->ResultToArray();
            $pay_amount += $good[0]['cPrice'];
        }
        
        $this->dbc->Query("SELECT * FROM minishop_ttransport WHERE cID='$transport_id'");
        $transport = $this->dbc->ResultToArray();
        $pay_amount += $transport[0]['cPrice'];
        
        return $pay_amount;
    }
    
    private function showPayAmount()
    {
        echo "<div id='pay_amount_label'><div id='pay_amount'>".$this->calculatePayAmount()."</div>$</div>";
    }
    
    private function showTransport()
    {
        
        
        
        $this->dbc->Query("SELECT * FROM minishop_ttransport");
        $transport = $this->dbc->ResultToArray();
        $first = true;
        foreach($transport as $value)
        {
            if($first)
            {
                echo "<div>{$value['cName']}<input type='radio' onchange='changePayAmount({$value['cPrice']})' checked name='transport' value='{$value['cID']}'>{$value['cPrice']}$</div>";
                $first=!$first;
            }
            else
            {
                echo "<div>{$value['cName']}<input type='radio' onchange='changePayAmount({$value['cPrice']})' name='transport' value='{$value['cID']}'>{$value['cPrice']}$</div>";
            }
        }
        
    }
    
    
    private function showSubmitPayPage()
    {
        $pay_amount = $this->calculatePayAmountWithTransport($_POST['transport']);
        if($this->user_cash>=$pay_amount)
        {
			$this->user_cash -= $pay_amount;
            echo "<div id='success_message'>Order complete!!(".($this->user_cash+$pay_amount)."-".$pay_amount.")</div>";
            $this->dbc->Query("UPDATE minishop_tusers SET cCash='".$this->user_cash."' WHERE cID='".$this->user_id."'");
            $this->dbc->Query("DELETE FROM minishop_tcart_goods WHERE cCartID=".$this->cart_id);
        }
        else
        {
            echo "<div id='success_message'>Insufficient funds(".$this->user_cash."-".$pay_amount.")</div>";
        }
        
    }
    
    
    
    public function addGoodToCart($id)
    {
        
        
        
        $this->dbc->Query("INSERT INTO minishop_tcart_goods VALUES(null,'{$this->cart_id}','$id')");
    }
    
    public function removeFromCart($id)
    {
        
        
        
        $this->dbc->Query("DELETE FROM minishop_tcart_goods WHERE cCartID='{$this->cart_id}' and cGoodID='$id' LIMIT 1");
        $_GET['page']='cart';
        $this->Show();
    }

}