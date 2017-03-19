$(document).ready(function(){
var trHTML = '';
var page = '';
var i = 1;
    $.ajax({
        url: "http://localhost:9001/listfield?page=1&item_per_page=10"
    }).then(function(data,status,jqxhr){
        $.each(data, function(key ,value){
            trHTML += '<tr>'+
                    '<td>'+value.field_id+'</td>' +
                    '<td>'+'รอแก้ไฟล์ sql'  /*value.field_name*/  +'</td>' +
                    '<td>'+'รอแก้ไฟล์ sql'  /*value.location*/  +'</td>' +
                    '<td>'+value.price+'</td>' +
                    '<td>'+value.stime+'.00 - '+value.etime+'.00 </td>'+
                    '<td><a href="#"><span class="glyphicon glyphicon-search"></span> </a> </td>'+
                    '</tr>';
        });
        $('#table_body').append(trHTML);
    });

    $.ajax({
        url: "http://localhost:9001/listfield"
    }).then(function(data,status,jqxhr){
        $.each(data, function(key ,value){
            if(key%9==0){
                page += '<li><a href="#'+i+'" class="pageclick">'+i+'</a></li>'
                i++;
            };

        });
        $('#page_number').append(page);

        $('.pageclick').on('click',function(){
            trHTML = '';
            $.ajax({
            url:"http://localhost:9001/listfield?page=2&item_per_page=10"
            }).then(function(data, status, jqxhr) {
            $.each(data, function(key ,value){
                trHTML += '<tr>'+
                        '<td>'+value.field_id+'</td>' +
                        '<td>'+'รอแก้ไฟล์ sql'  /*value.field_name*/  +'</td>' +
                        '<td>'+'รอแก้ไฟล์ sql'  /*value.location*/  +'</td>' +
                        '<td>'+value.price+'</td>' +
                        '<td>'+value.stime+'.00 - '+value.etime+'.00 </td>'+
                        '<td><a href="#"><span class="glyphicon glyphicon-search"></span> </a> </td>'+
                        '</tr>';
            });
            $('#table_body').html(trHTML);
            });
        });
    });

});