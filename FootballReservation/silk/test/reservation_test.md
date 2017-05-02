# Reservation-service Test

This can be run with silk `silk -silk.url="http://localhost:9004/" ../test/reservation_test.md`

or `silk -silk.url="{endpoint}" {testfiles...}`

## GET reservations?item_per_page=5

Show list of Reservations detail `item_per_page` = 5

===

* `Status: 200`
* `Content-Type: "application/json;charset=UTF-8"`

```json
[{"reserv_id":1,"reserv_user":"TestUser","reserv_field_id":1,"reserv_ex_id":1,"reserv_time":1,"reserv_date":"2017-03-12","reserv_status":"pending"},
{"reserv_id":2,"reserv_user":"TestUser","reserv_field_id":1,"reserv_ex_id":1,"reserv_time":2,"reserv_date":"2017-03-12","reserv_status":"pending"},
{"reserv_id":3,"reserv_user":"TestUser","reserv_field_id":1,"reserv_ex_id":1,"reserv_time":3,"reserv_date":"2017-03-12","reserv_status":"pending"},
{"reserv_id":4,"reserv_user":"TestUser","reserv_field_id":1,"reserv_ex_id":1,"reserv_time":4,"reserv_date":"2017-03-12","reserv_status":"pending"},
{"reserv_id":5,"reserv_user":"TestUser","reserv_field_id":1,"reserv_ex_id":1,"reserv_time":5,"reserv_date":"2017-03-12","reserv_status":"pending"}]
```

---

## GET reservation/1

Show Reservation Detail `reserv_id` = 1

===

* `Status: 200`
* `Content-Type: "application/json;charset=UTF-8"`

```json
{"reserv_id":1,"reserv_user":"TestUser","reserv_field_id":1,"reserv_ex_id":1,"reserv_time":1,"reserv_date":"2017-03-12","reserv_status":"pending"}
```

---
