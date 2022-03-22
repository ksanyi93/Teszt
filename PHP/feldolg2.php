<?php

//1. olvassuk ki az urlből az adatokat
$nev = $_GET["nev"];
$email = $_GET["email"];
$password = $_GET["password"];
$password_confirmation = $_GET["password_confirmation"];


//2.adatok hossza
$nev_hossz = strlen($nev);
$email_hossz = strlen($email);
$password_hossz = strlen($password);


if( $nev_hossz < 4 or $nev_hossz > 30 ){
    print 'A név hosszának 4 és 30 karakter között kell lennie!';
}

elseif( $password_hossz < 4 or $password_hossz > 30 ){
    print 'A jelszó hosszának 4 és 30 karakter között kell lenni!';
}

elseif( filter_var($email, FILTER_VAlIDATE_EMAIL) ===false){
    print 'Az email cím nem valid formátumú!';
}

elseif( $password != $password_confirmation){
    print 'A két jelszó nem azonos!';
}

else{
    print 'Sikeres küldés!';
}



//kiszolgáló neve
//felhasz.név
//jelszó
//adatbázis
$connection  = mysqli_connect( "localhost", "root", "sunyika5", "teszt");

    $error_msg = mysqli_connect_error($connection);

        if( $error_msg ){
            print $error_msg;
            exit;
        }

        //adatok kiolvasása a "select id from users where..." paranccsal
        $eredmeny = mysqli_query( $connection, "select id from users where email = '$email'");

        $talalatszam = mysqli_num_rows($eredmeny);

        if($talalatszam > 0){
            print 'Ez az email cím már foglalt!';
        }

        elseif(mysqli_num_rows(mysqli_query( $connection, "select id from users where name = '$nev'")) > 0){
            
            print 'Ez a név már foglalt!';
        }
            //adatok bevitele a "insert into users (nev, email, password) value ('$nev', '$email', '$password')" paranccsal
        else{
            mysqli_query( $connection, "insert into users (nev, email, password) value ('$nev', '$email', '$password')" );

            print 'Sikeres!';
        }
