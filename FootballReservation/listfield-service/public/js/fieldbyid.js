var QueryString = function () {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}();

$(document).ready(function(){
var trHTML = '';
var detail = '';
var field_id = QueryString.field_id;

    $.ajax({
        url: "http://localhost:9001/field/"+field_id
    }).then(function(data,status,jqxhr){
        $.each(data, function(key ,value){
            trHTML += '<tr>'+
                    '<td>'+value.image+'</td>' +
                    '<td>'+value.fieldex_name +'</td>' +
                    '<td>'+value.rent +'</td>' +
                    '<td>'+value.size+'</td>'+
                    '<td>'+value.floor+'</td>'+
                    '<td><a href="view_field_extend.html?field_id='+field_id+'&ex_id='+value.ex_id+'"><span class="glyphicon glyphicon-search"></span> </a> </td>'+
                    '</tr>';
        });
        $('#table_body').append(trHTML);
    });

    $.ajax({
        url: "http://localhost:9001/field?field_id="+QueryString.field_id
    }).then(function(data,status,jqxhr){


        detail += "Field ID: "+data.field_id+"</br></br>"+
            "Name: "+data.field_name+"</br></br>"+
            "Contact: "+data.tel+"</br></br>"+
            "Price Range: "+data.price+"</br></br>"+
            "Location: "+data.location+"</br></br>"+
            "Email: "+data.email+"</br></br>"+
            "Web-site: "+data.website+"</br></br>"+
            "Detail: "+data.detail+"</br></br>"+
            "Open: "+data.stime+".00 - "+data.etime+".00</br></br>"+
            "Owner: "+data.username+"</br></br>"
        $('#field_detail').append(detail);

        $('#h_title').append(data.field_name+"</br>");
    });

});

