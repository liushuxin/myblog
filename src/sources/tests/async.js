const ajax = (str) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(str);
    }, 1000);
  });
};
function *main(){
  const data1 = yield ajax(123);
  console.log(data1);
  const data2 = yield ajax(456);
  console.log(data2);
}
function co(genetator){



}
co(main);

const data = {
  a:1,
  b:2
}


