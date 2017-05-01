# ListField Test

This can be run with silk `silk -silk.url="http://localhost:9001/" ../test/listfield_test.md`

or `silk -silk.url="{endpoint}" {testfiles...}`

## GET /listfield?item_per_page=5

list of field `item_per_page` = 5

===

* `Status: 200`
* `Content-Type: "application/json;charset=UTF-8"`

```json
[{"field_id":1,"field_name":"SamPaoSan Football","tel":"081-732-7343","price":"3,000 - 3,500","location":"98/1 M.13 Soi.Kubon Ramintra road ","email":"sampaosan@hotmail.com","website":null,"detail":"Test123","image":"path to image","stime":9,"etime":24,"username":"man"},
{"field_id":2,"field_name":"KaoSan Football","tel":"081-918-2677","price":"2,000 - 2,600","location":"Suansiam Soi 16 Bangkok 10320","email":"aphone2501@yahoo.com","website":null,"detail":null,"image":"path to image","stime":9,"etime":24,"username":"man1"},
{"field_id":3,"field_name":"TungTraKai Football","tel":"02-513-3425","price":"1,200 - 1,300","location":"Soi Ladprao 18 Ladprao road Bangkok 10900","email":null,"website":null,"detail":null,"image":"path to image","stime":9,"etime":24,"username":"man2"},
{"field_id":4,"field_name":"CrisFrod Football","tel":"089-910-8519","price":"\t800 - 1,000","location":"12/15 Kranparpreak RD Bangkok","email":null,"website":null,"detail":null,"image":"path to image","stime":9,"etime":24,"username":"man3"},
{"field_id":5,"field_name":"Golden Football Club","tel":"080-585-6655","price":"600 - 1,500","location":"54 M.2 ShimPree Bangkok 10170","email":null,"website":null,"detail":null,"image":"path to image","stime":9,"etime":24,"username":"man4"}]
```

## GET field/1

list of sub-field of field 1

===

* `Status: 200`
* `Content-Type: "application/json;charset=UTF-8"`

```json
[{"ex_id":1,"field_id":1,"fieldex_name":"test112","rent":500,"image":"img","size":"35x50 m","floor":"Natural grass"},
{"ex_id":2,"field_id":1,"fieldex_name":"test2","rent":700,"image":"img","size":"35x50 m","floor":"Natural grass"},
{"ex_id":3,"field_id":1,"fieldex_name":"test3","rent":800,"image":"img","size":"35x50 m","floor":"Natural grass"},
{"ex_id":4,"field_id":1,"fieldex_name":"test4","rent":1000,"image":"img","size":"105x75 m","floor":"Plastic grass"},
{"ex_id":5,"field_id":1,"fieldex_name":"test5","rent":1500,"image":"img","size":"105x75 m","floor":"Natural grass"},
{"ex_id":17,"field_id":1,"fieldex_name":"RE","rent":111,"image":"img","size":"100x200 m","floor":"Resin floor"}]
```

## GET field/1/1

sub-field detail `field_id` = 1 `ex_id` = 1

===

* `Status: 200`
* `Content-Type: "application/json;charset=UTF-8"`

```json
{"ex_id":1,"field_id":1,"fieldex_name":"test112","rent":500,"image":"img","size":"35x50 m","floor":"Natural grass"}
```
## GET field?field_id=1

===

* `Status: 200`

---

# Test to Fail

## GET field/worngpath

===

* `Status: 400`

## GET field?field_id=9999

===

* `Status: 500`

## GET listfield/worngpath

===

* `Status: 404`