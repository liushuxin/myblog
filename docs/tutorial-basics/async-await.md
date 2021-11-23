---
sidebar_position: 2
title: Async Await 方案
tags:
  - JavaScript
  - Async
---

## async await 原理实现

async await 是 generator 函数和 Promise 的语法糖，具体源码实现如下

```javascript title="源码"
function* main() {
  const user = yield ajax('test1');
  console.log(user);
  const user1 = yield ajax('test2');
  console.log(user1);
}
const co = (generator) => {
  const g = generator();
  function recursionGenerator(result) {
    if (result.done) return;
    result.value.then(
      (data) => {
        recursionGenerator(g.next(data));
      },
      (error) => {
        g.throw(error);
      },
    );
  }
  recursionGenerator(g.next());
};
co(main);
```
