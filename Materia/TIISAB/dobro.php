<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible"
            content="IE=edge" />
        <meta name="viewport"
            content="width=device-width, initial-scale=1.0" />
        <title>Dobro</title>
        <link href="css/bootstrap.css"
            rel="stylesheet" />
        <link href="css/estilos.css"
            rel="stylesheet" />
    </head>

    <body>
        <?php 
         if(isset($_POST['btndobro'])){
             $num = intval($_POST['txtnum']);
             if(! empty($num)){
                 $dobro = 2* $num;
            }else{
                $num=0;
                $dobro=0;
            }
         }
      
      ?>
        <div class="container">
            <div id="menu"></div>
            <div class="row">
                <div class="col-xs-12 col-md-4">
                    <div class="card"
                        style="width: 18rem">
                        <img src="imagens/veado.jpg"
                            class="card-img-top"
                            alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </p>
                            <a href="#"
                                class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-8">
                    <h1>Formulário Dobro</h1>
                    <hr />
                    <form action="<?php echo htmlentities($_SERVER['PHP_SELF']) ?>"
                        method="post"
                        enctype="application/x-www-form-urlencoded">
                        <div class="form-group">
                            <label for="txtnum">Número</label>
                            <input type="text"
                                name="txtnum"
                                id="txtnum"
                                class="form-control"
                                value="<?php 
                                  if(isset($_POST['btndobro'])){
                                      echo $num;
                                  }
                                ?>"
                                placeholder="Introduza número" />
                            <br>
                            <div style="display: flex; justify-content: space-evenly; padding: 5px;">
                                <button type="submit"
                                    name="btndobro"
                                    class="btn btn-danger">Submit</button>
                                <button type="button"
                                    id="btnajax"
                                    class="btn btn-success">Ajax</button>
                                <button type="button"
                                    id="btnjquery"
                                    class="btn btn-primary">Jquery</button>
                            </div>
                            <br>

                            <div class="form-group">
                                <label for="txtdobro">Resultado</label>
                                <input type="text"
                                    name="txtdobro"
                                    id="txtdobro"
                                    class="form-control"
                                    value="<?php 
                   if(isset($dobro)){
                       echo $dobro;
                   }
                ?>"
                                    placeholder="Introduza número" />



                            </div>
                    </form>
                </div>
            </div>
        </div>
        <script src="js/jquery-3.6.0.js"></script>
        <script src="js/bootstrap.js"></script>
        <script src="js/out30.js"></script>
    </body>

</html>
