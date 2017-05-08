# ListField Test

This can be run with silk `silk -silk.url="http://139.59.123.174:9002" ../test/admin_test.md`

or `silk -silk.url="{endpoint}" {testfiles...}`

## GET /admin?item_per_page=4
===

* `Status: 200`
* `Content-Type: "application/json;charset=UTF-8"`

```json
[
  {
    "id": 2,
    "fname": "TestUser2",
    "lname": "TestUser",
    "email": "user2@test.com",
    "role": "user",
    "password": "username"
  },
  {
    "id": 3,
    "fname": "TestUser3",
    "lname": "TestUser",
    "email": "user3@test.com",
    "role": "user",
    "password": "username"
  },
  {
    "id": 4,
    "fname": "TestUser4",
    "lname": "TestUser",
    "email": "user4@test.com",
    "role": "user",
    "password": "username"
  },
  {
    "id": 5,
    "fname": "TestUser5",
    "lname": "TestUser",
    "email": "user5@test.com",
    "role": "user",
    "password": "username"
  }
]
```
===

## DELETE /admin/1/delete

===

* `Status: 200`

---
