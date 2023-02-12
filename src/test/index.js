// const test = "111";
// //test = 2;

// const obj = {
//   name: "test",
// };
// Object.defineProperty(obj, "name", {
//   writable: true,
//   enumerable: true,
//   configurable: false,
// });
// delete obj.name;

// const proto = Object.getPrototypeOf(obj);
// console.log(proto);
// console.log(Object.isExtensible(obj));

// console.log(obj);

// const foroze = new Proxy(
//   {
//     a: 1,
//     b: 2,
//   },
//   {
//     get(target, prop) {
//       if (prop in target) {
//         return target[prop];
//       } else {
//         return 0; // 默认值
//       }
//     },
//     set(target, prop, value) {
//       if (prop in target) {
//         return;
//       } else {
//         target[prop] = value;
//       }
//     },
//   }
// );
// foroze.c = 4;
// foroze.b = 14;
//console.log(foroze.c, foroze.b);

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];
  const left = [];
  const right = [];

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < pivot) {
      left.push(arr[index]);
    } else {
      right.push(arr[index]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}

//console.log("object");
const data = console.log(quickSort([3, 4, 6, 222, 333, 22222, 3, 5, 6]));

//函数去抖
