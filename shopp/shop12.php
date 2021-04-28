<?php
    $conn = new mysqli("localhost", "root", "");
    $conn->select_db("Suprema");

    $sql="SELECT * FROM sign WHERE current = 1 ";

    $res=$conn->query($sql);
    $email="";
    if($res->num_rows>0)
    {
        $data=$res->fetch_assoc();
        $email=$data['Email'];
    }
    $sql = "SELECT * FROM shop WHERE Product = 'White x Black Backpack'";
    $res = $conn->query($sql);

    $price = $res->fetch_assoc();

    $sql="INSERT INTO client(Email,Product,Total_Price,Quantity) VALUES (?,?,?,?)";

    $stmt=$conn->prepare($sql);
    $name="White x Black Backpack";
    $quantity=1;
    $stmt->bind_param("ssii",$email,$name,$price['Price'],$quantity);

    $stmt->execute();
    $conn->close();
    header("location:../shop.php");
?>