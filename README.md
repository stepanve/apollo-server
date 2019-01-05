### command
```
$ node index.js
```

### Query
```
query {
  posts {
    id
    title
    content
    comments {
      id
      content
    }
  }
}
```
