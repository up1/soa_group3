$(document).ready(function(){
var trHTML = '';
var page = '';
var i = 1;
    $.ajax({
        url: "http://localhost:9001/listfield?page=1&item_per_page=5"
    }).then(function(data,status,jqxhr){
        $.each(data, function(key ,value){
            trHTML += '<tr>'+
                    '<td>'+value.image+'</td>' +
                    '<td>'+value.field_name  +'</td>' +
                    '<td>'+value.location +'</td>' +
                    '<td>'+value.price+'</td>' +
                    '<td>'+value.stime+'.00 - '+value.etime+'.00 </td>'+
                    '<td><a href="view_field.html?field_id='+value.field_id+'"><span class="glyphicon glyphicon-search"></span> </a> </td>'+
                    '</tr>';
        });
        $('#table_body').append(trHTML);
    });

    $.ajax({
        url: "http://localhost:9001/listfield"
    }).then(function(data,status,jqxhr){
        $.each(data, function(key ,value){
            if(key%5==0){
                page += '<li><button class="pageclick btn-default" value="'+i+'">'+i+'</button></li>'
                i++;
            };

        });
        $('#page_number').append(page);

        $('.pageclick').on('click',function(){
            trHTML = '';
            $.ajax({
            url:"http://localhost:9001/listfield?page="+$(this).val()+"&item_per_page=5"
            }).then(function(data, status, jqxhr) {
            $.each(data, function(key ,value){
                trHTML += '<tr>'+
                        '<td>'+value.image+'</td>' +
                        '<td>'+value.field_name  +'</td>' +
                        '<td>'+value.location  +'</td>' +
                        '<td>'+value.price+'</td>' +
                        '<td>'+value.stime+'.00 - '+value.etime+'.00 </td>'+
                        '<td><a href="view_field.html?field_id='+value.field_id+'"><span class="glyphicon glyphicon-search"></span> </a> </td>'+
                        '</tr>';
            });
            $('#table_body').html(trHTML);
            });
        });
    });

});