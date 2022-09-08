# Array based pagination

> npm i a-p

### how to use the hook

```
const [elements, totalPage] = usePagination(array, currentPage, pageSize);
```

this will paginate your array.
in elements you can get group of items that are in each page

### example

```
array = [1,2,3,4,5,6,7,8,9,10,11,12] // lenght is 12
currentPage = 1
pageSize = 10
const [elements, totalPage] = usePagination(array, currentPage, pageSize);
// return [12,11,10,9,8,7,6,5,4,3]
```
