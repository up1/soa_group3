# Reservation-service Test

This can be run with silk `silk -silk.url="http://139.59.123.172:9004/" ../test/reservation_test.md`

or `silk -silk.url="{endpoint}" {testfiles...}`

## GET /reservations?item_per_page=5

Show list of Reservations detail `item_per_page` = 5

===

* `Status: 200`
* `Content-Type: "application/json;charset=UTF-8"`

```json
[
  {
    "reserv_id": 1,
    "reserv_user_id": 1,
    "reserv_field_id": 1,
    "reserv_ex_id": 1,
    "reserv_start_time": 9,
    "reserv_end_time": 12,
    "reserv_date": "2017-03-12",
    "reserv_status": "pending"
  },
  {
    "reserv_id": 2,
    "reserv_user_id": 2,
    "reserv_field_id": 1,
    "reserv_ex_id": 1,
    "reserv_start_time": 18,
    "reserv_end_time": 21,
    "reserv_date": "2017-03-30",
    "reserv_status": "pending"
  },
  {
    "reserv_id": 3,
    "reserv_user_id": 3,
    "reserv_field_id": 1,
    "reserv_ex_id": 2,
    "reserv_start_time": 12,
    "reserv_end_time": 16,
    "reserv_date": "2017-04-12",
    "reserv_status": "pending"
  },
  {
    "reserv_id": 4,
    "reserv_user_id": 3,
    "reserv_field_id": 1,
    "reserv_ex_id": 2,
    "reserv_start_time": 16,
    "reserv_end_time": 19,
    "reserv_date": "2017-05-12",
    "reserv_status": "pending"
  },
  {
    "reserv_id": 5,
    "reserv_user_id": 1,
    "reserv_field_id": 10,
    "reserv_ex_id": 14,
    "reserv_start_time": 9,
    "reserv_end_time": 12,
    "reserv_date": "2017-05-08",
    "reserv_status": "pending"
  }
]
```

---

## GET /reservation/1

Show Reservation Detail `reserv_id` = 1

===

* `Status: 200`
* `Content-Type: "application/json;charset=UTF-8"`

```json
{
  "reserv_id": 1,
  "reserv_user_id": 1,
  "reserv_field_id": 1,
  "reserv_ex_id": 1,
  "reserv_start_time": 9,
  "reserv_end_time": 12,
  "reserv_date": "2017-03-12",
  "reserv_status": "pending"
}
```

---
