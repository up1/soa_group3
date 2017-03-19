$(document).ready(function(){
var trHTML = '<tbody>';
    $.ajax({
        url: "http://localhost:9001/listfield"
    }).then(function(data,status,jqxhr){
        $.each(data, function(key ,value){
            trHTML += '<tr><td>'+value.field_name+'</td>' +
                     '<td>'+value.location+'</td>' +
                     '<td>'+value.price+'</td>' +
                     '<td>'+value.stime+' - '+value.etime+'</td>'+
                     '<td><a href="#"><span class="glyphicon glyphicon-search"></span> </a> </td></tr>';
        });
        $('#field_table').append(trHTML+'</tbody>');
    });

});