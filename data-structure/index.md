---
sidebar_position: 1
title: 算法与数据结构
---

### 算法与数据结构

#### 时间复杂度
因为大O符号表示法并不是用于来真实代表算法的执行时间的，它是用来表示代码执行时间的增长变化趋势的。

#### 1、 域名反转
（考察点）：字符串，数组方法
扩展问题: 其他的实现方式

```javascript

const str = "www.sohu.com";

function domainReverse(domain) {
  const strArr = domain.split(".");
  // strArr.reverse();
  const reverseStr = strArr.map((item) => item.split("").reverse().join(""));
  return reverseStr.join(".");
}

console.log(domainReverse(str));

```

#### 2、快排
  1. 快速排序是对冒泡排序的一种改进
  1. 快速排序的基本思想是：通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小，再按这种方法对这两部分数据分别进行快速排序，整个过程可以递归进行，使整个数据变成有序序列
  1. 这是典型的分治思想，即分治法

  ```javascript

  function quickSort(arr) {
if(arr.length<=1){
    return;

}
  }

  ```




