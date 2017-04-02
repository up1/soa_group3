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

var ex_id = QueryString.ex_id;
var field_id = QueryString.field_id;

$(document).ready(function(){
var trHTML = '';
var detail = '';

    $.ajax({
        url: "http://localhost:9001/field/"+field_id+"/"+ex_id
    }).then(function(data,status,jqxhr){
            trHTML += '<tr>'+
                    '<td>'+data.image+'</td>' +
                    '<td>'+data.fieldex_name +'</td>' +
                    '<td>'+data.rent +'</td>' +
                    '<td>'+data.size+'</td>'+
                    '<td>'+data.floor+'</td>'+
                    '</tr>';
        $('#table_body').append(trHTML);
    });

    $.ajax({
        url: "http://localhost:9001/field?field_id="+QueryString.field_id
    }).then(function(data,status,jqxhr){


        detail += "Field ID: "+data.field_id+"</br></br>"+
            "Name: "+data.field_name+"</br></br>"+
            "Contact: "+data.tel+"</br></br>"+
//            "Price Range: "+data.price+"</br></br>"+
            "Location: "+data.location+"</br></br>"+
            "Email: "+data.email+"</br></br>"+
            "Web-site: "+data.website+"</br></br>"+
            "Detail: "+data.detail+"</br></br>"+
            "Open: "+data.stime+".00 - "+data.etime+".00</br></br>"+
            "Owner: "+data.username+"</br></br>"+
            '<button class="btn-default">จอง</button>'
        $('#field_detail').append(detail);

        $('#h_title').append(data.field_name+" SubField "+ex_id+"</br>");
    });

});