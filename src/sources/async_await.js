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
