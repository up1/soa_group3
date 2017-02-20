# Get multi users

This can be run with `silk -silk.url="http://localhost:9001/"`

## `GET users?page=2&item_per_page=5`

Perform a find all users information at page 2 and 5 item per page

===

* `Status: 200`
* `Content-Type: "application/json;charset=UTF-8"`
```json
[{"id":6,"firstname":"aa","lastname":"bb"},{"id":7,"firstname":"aa","lastname":"bb"},{"id":8,"firstname":"aa","lastname":"bb"},{"id":9,"firstname":"aa","lastname":"bb"},{"id":10,"firstname":"aa","lastname":"bb"}]
```

## `GET users?page=-2&item_per_page=5`

Perform a find all users information with invalid page arguments.

===

* `Status: 500`

