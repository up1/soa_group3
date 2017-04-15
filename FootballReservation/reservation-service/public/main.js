$(document).ready(function(){
//var id_reserve = document.getElementById("idreserve").value;
var $reserve = $('.reserve');
var $a = $('.a');
var $b = $('.b');
var $c = $('.c');
var $d = $('.d');
var $e = $('.e');
var $f = $('.f');
var $g = $('.g');
$('#search-by-id').on('click', function(){
    $.ajax({
    type: 'GET',
    url:'http://localhost:9004/reservation/'+$("#idreserve").val()
    }).then(function(data, status, jqxhr) {
        $a.text(data.reserv_id);
        $b.text(data.reserv_user);
        $c.text(data.reserv_field_id);
        $d.text(data.reserv_ex_id);
        $e.text(data.reserv_time);
        $f.text(data.reserv_date);
        $g.text(data.reserv_status);
        //$reserve.text('ID: '+data.reserv_id+'user: '+data.reserv_user+'field_id: '+data.reserv_field_id+'Ex_id: '+data.reserv_ex_id+'Time: '+data.reserv_time+'Date: '+data.reserv_date+'Status: '+data.reserv_status);
           });
    });
});