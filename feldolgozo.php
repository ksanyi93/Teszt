<?php

$nev = $_GET["nev"];
$email = $_GET["email"];
$password = $_GET["password"];
$password_confirmation = $_GET["password_confirmation"];


$nev_hossz = strlen ( $nev );
$password_hossz = strlen ( $password );

if( $nev_hossz > 30 or $nev_hossz < 4){
    print 'A név nem megfelelő hosszúságú';
}

elseif( filtert_var( $email, FILTER_VALIDATE_EMAIL ) === false){
    print 'Az email cím nem megfelelő formátumú!';
}

elseif( $password_hossz < 4 or $password_hossz > 30 ){
    print 'A jelszó nem megfelelő hosszúságú!';
}

elseif( $password != $password_confirmation ){
    print 'A két jelszó nem azonos';
}