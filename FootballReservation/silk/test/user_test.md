# Users-service Test

This can be run with silk `silk -silk.url="http://139.59.123.174:9005/" ../test/user_test.md`

or `silk -silk.url="{endpoint}" {testfiles...}`

## DELETE /user/1/delete

===

* `Status: 200`

---

## GET /user/2

get user detail `user` = 2

===

* `Status: 200`
* `Content-Type: "application/json;charset=UTF-8"`

```json
{
  "id": 2,
  "fname": "TestUser2",
  "lname": "TestUser",
  "email": "user2@test.com",
  "role": "user",
  "password": "username"
}
```

---

## GET /users?item_per_page=3

get users detail `item_per_page` = 3

===

* `Status: 200`
* `Content-Type: "application/json;charset=UTF-8"`

```json
[
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
  }
]`

----
