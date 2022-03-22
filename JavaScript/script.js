let lista = [

    //0         //1         //2
    ['Sanyi', 'Békécsaba', '20'],
    ['Klára', 'Kecskemét', '30'],
    ['Imre', 'Budapest', '40'],
    ['Géza', 'Pécs', '50'],
];

document.write('<table border=1 cellpadding=1>');

for(let i=0; i < lista.length; i++){
    document.write('<tr>');
    document.write('<td>' +lista[i][0]+ '</td>');
    document.write('<td>' +lista[i][1]+ '</td>');
    document.write('<td>' +lista[i][2]+ '</td>');
    document.write('</tr>');
}

document.write('</table>');