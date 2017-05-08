# Manager-service Test

This can be run with silk `silk -silk.url="http://139.59.123.175:9003" ../test/manager_test.md`

or `silk -silk.url="{endpoint}" {testfiles...}`

## GET /field/1
===

* `Status: 200`
* `Content-Type: "application/json;charset=UTF-8"`

```json
[
  {
    "ex_id": 1,
    "field_id": 1,
    "fieldex_name": "test112",
    "rent": 500,
    "image": "img",
    "size": "35x50 m",
    "floor": "Natural grass"
  },
  {
    "ex_id": 2,
    "field_id": 1,
    "fieldex_name": "test2",
    "rent": 700,
    "image": "img",
    "size": "35x50 m",
    "floor": "Natural grass"
  },
  {
    "ex_id": 3,
    "field_id": 1,
    "fieldex_name": "test3",
    "rent": 800,
    "image": "img",
    "size": "35x50 m",
    "floor": "Natural grass"
  },
  {
    "ex_id": 4,
    "field_id": 1,
    "fieldex_name": "test4",
    "rent": 1000,
    "image": "img",
    "size": "105x75 m",
    "floor": "Plastic grass"
  },
  {
    "ex_id": 5,
    "field_id": 1,
    "fieldex_name": "test5",
    "rent": 1500,
    "image": "img",
    "size": "105x75 m",
    "floor": "Natural grass"
  },
  {
    "ex_id": 17,
    "field_id": 1,
    "fieldex_name": "RE",
    "rent": 111,
    "image": "img",
    "size": "100x200 m",
    "floor": "Resin floor"
  },
  {
    "ex_id": 19,
    "field_id": 1,
    "fieldex_name": "ทดลองสร้างสนาม",
    "rent": 150,
    "image": "img",
    "size": "150x150 m",
    "floor": "สนาม150"
  }
]
```
===

## GET /field_ex/1
===

* `Status: 200`
* `Content-Type: "application/json;charset=UTF-8"`

```json
[
  {
    "ex_id": 1,
    "field_id": 1,
    "fieldex_name": "test112",
    "rent": 500,
    "image": "img",
    "size": "35x50 m",
    "floor": "Natural grass"
  }
]
```

===
