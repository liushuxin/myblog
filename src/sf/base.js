const FUNC_ERROR_TEXT = "Expected a function";

// 防抖
const debounce = (func, wait) => {
  let timeout = undefined;
  function debounced() {
    // 清除定时器
    if (timeout) clearTimeout(timeout);

    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(() => {
      typeof func === "function" && func();
    }, wait);
  }

  return debounced;
};
// 节流
const throttle = (func, wait) => {
  let inThrottle;

  function throttled(...args) {
    const context = this;

    // 跳出时间限制
    if (!inThrottle) {
      func.apply(context, args); // 执行回调
      inThrottle = true;
      // 开启定时器计时
      setTimeout(() => (inThrottle = false), wait);
    }
  }
  return throttled;
};

const throttle1 = (func, wait) => {
  let inThrottle;
  function throttled(...args) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), wait);
    }
  }
  return throttled;
};

// 深拷贝

// 浅拷贝

// curry , compose,

// em rem 的区别

//react diff  fiber ,事件系统，vue和react 的区别

// HTTP 缓存，HTTP1.0 和2.0 的区别

// 启发式缓存：当报头中没有用来确定强缓存时间的字段时，浏览器会触发启发式缓存，缓存有效期计算公式：**(date - last-modified ) * 10%，**取响应报头中 date 与 last-modified 值之差的百分之十作为缓存时间。启发式缓存比较容易忽略，不了解启发式缓存可能会因为这种默认的缓存方式而掉入坑里，但一旦你了解了浏览器启发式缓存的机制，很多问题都可以得到解决。

// CSS 隐藏元素的方式，元素居中，动画

// 跨域，同源策略，

const throttle2 = (func, wait) => {
  let inThrottle;

  function throttled(...args) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), wait);
    }
  }
  return throttled;
};

function checkType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

function deepClone(sourceValue) {
  // 如果传入的数据是简单类型（不是 {} & []），直接返回即可
  if (typeof sourceValue !== "object") {
    return sourceValue;
  }
  // 判断 传入参数的数据类型(object or array)
  let targetType = checkType(sourceValue);
  // 根据传入参数的数据类型，创建 初始存储结果的变量类型 {} or []
  let result = targetType === "Object" ? {} : [];
  // 遍历 sourceValue (for...in可以遍历数据和对象)
  // 避免数组内有自定义属性，遍历数组使用 for...of，遍历对象 for...in
  if (targetType === "Array") {
    // 传入参数是数组时，次数使用的是 for...of 遍历，当然，也可以使用 数组的其他遍历方法
    for (const [key, value] of sourceValue.entries()) {
      let itemType = checkType(value);
      // 如果 value 是 数组 或 对象，则继续遍历
      if (itemType === "Object" || itemType === "Array") {
        result[key] = deepClone(value);
      } else {
        // 如果 value 是 基本数据类型 或者 函数，直接赋值即可
        result[key] = value;
      }
    }
  } else {
    // 传入参数是对象时
    for (const key in sourceValue) {
      // 遍历数组时，key 为数组的 下标
      // 遍历对象时，key 为对象的 key
      // hasOwnProperty 只能检验对象自身的属性，不能检验继承属性，也不能检验原型链上的属性
      if (sourceValue.hasOwnProperty(key)) {
        const item = sourceValue[key];
        let itemType = checkType(item);
        // 如果 value 是 数组 或 对象，则继续遍历
        if (itemType === "Object" || itemType === "Array") {
          result[key] = deepClone(item);
        } else {
          // 如果 value 是 基本数据类型 或者 函数，直接赋值即可
          result[key] = item;
        }
      }
    }
  }
  // 返回 result 即可
  return result;
}
