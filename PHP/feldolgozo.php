<?php

//adatok urlből kiolvasása
$nev = $_GET["nev"];
$email = $_GET["email"];
$password = $_GET["password"];
$password_confirmation = $_GET["password_confirmation"];




//egyes adatok hosszának megállapítása
$nev_hossz = strlen( $nev );
$jelszo_hossz = strlen( $password );



//adatokat ellenőzirni kell hosszúság szempontból
if ( $nev_hossz < 4 or $nev_hossz > 30 ){
    print 'A név hosszának 4 és 30 karakter között kell legyen!';
}




//email cím formátumának ellenőrzése
elseif( filter_var( $email, FILTER_VAlIDATE_EMAIL ) === false ){
    print 'Az email cím nem valid formátumú!';
}




//jelszó hossz
elseif ( $jelszo_hossz < 4 or $jelszo_hossz > 30 ){
    print 'A jelszó hosszának 4 és 30 karakter között kell legyen!';
}





//két jelszó azonossága
elseif( $password != $password_confirmation ){
    print 'A két jelszónak azonosnak kell lennie!';
}

//sikeres
else {
    print 'Sikeres küldés!';
}