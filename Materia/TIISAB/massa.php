<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>indice de massa corporal</title>
    <link rel="stylesheets" href="css/bootstrap.css">
</head>

<body>
    <div class="container">
        <div id="menu"></div>
        <div class="row">
            <div class="col-12">
                <h1></h1>
                <table class="table table-bordered table-stripped">
                    <thead>

                        <td>valor</td>
                        <td>descritivo</td>


                    </thead>
                    <tbody>
                        <?php
                        include("imc.php");
                        foreach ($imc as $k => $v) {
                            echo "<tr><td>" . $k . "<td><td>" . $v . "</td></tr>";
                        }
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="form-group">
            <label for="txtpeso">peso</label>
            <input type="text" id="txtpeso" class="form-control" placeholder="">
        </div>
        <div class="form-group">
            <label for="txtaltura">altura</label>
            <input type="text" id="txtaltura" class="form-control" placeholder="">
            <br>
            <button class="btn btn-warning" type="button" id="bt">ver</button>
        </div>
        <div class="form-group">
            <label for="txtmsg">mensagem</label>
            <input type="text" id="txtmsg" class="form-control" placeholder="">
        </div>
    </div>
    <script src="js/jquery-3.6.0.js"></script>
    <script src="js/bootstrap.js"></script>
    <script>
        $(function() {
            $("#menu").load("menu.html")
            $("#bt").click((evt) => {
                evt = evt ? evt : window.event;
                evt.preventDefault();

                $.ajax({
                    url:`tabelaimc.php`,
                    type:`post`,
                    dataType:,
                    data:{id:1},
                    success:function(dados){},
                    error:function(){}
                })
            });
        });
    </script>
</body>

</html>