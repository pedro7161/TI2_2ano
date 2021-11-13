<?php 
if(isset($_POST["n"])){
   $n = intval($_POST["n"]);
   if(!is_nan($n)){
       $dobro =$n * 2;
   }else{
       $n=0;
       $dobro=0;
   }
}else{
        $n=0;
       $dobro=0;
}
 $resposta = array('num'=>$n, 'dobro'=>$dobro);
 echo json_encode($resposta);
?>
