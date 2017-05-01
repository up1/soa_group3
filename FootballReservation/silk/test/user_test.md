# Users-service Test

This can be run with silk `silk -silk.url="http://localhost:9005/" ../test/user_test.md`

or `silk -silk.url="{endpoint}" {testfiles...}`



## DELETE user/1/delete

===

* `Status: 200`

---

## GET user/2

get user detail `user` = 2

===

* `Status: 200`
* `Content-Type: "application/json;charset=UTF-8"`

```json
{"id":2,"fullname":"TestManager","email":"manager@test.com","address":"address2","picture":"Tc/f/d/s","username":"manager","password":"manager","role":"manager"}
```

---

## GET users?item_per_page=4

get users detail `item_per_page` = 4

===

* `Status: 200`
* `Content-Type: "application/json;charset=UTF-8"`

```json
[
{"id":2,"fullname":"TestManager","email":"manager@test.com","address":"address2","picture":"Tc/f/d/s","username":"manager","password":"manager","role":"manager"},
{"id":3,"fullname":"TestAdmin","email":"admin@test.com","address":"address3","picture":"Tc/f/d/s","username":"admin","password":"admin","role":"admin"},
{"id":4,"fullname":"TestUser2","email":"user2@test.com","address":"address4","picture":"Tc/f/d/s","username":"username2","password":"username","role":"user"},
{"id":5,"fullname":"TestUser3","email":"user3@test.com","address":"address5","picture":"Tc/f/d/s","username":"username3","password":"username","role":"user"}]
```

----


