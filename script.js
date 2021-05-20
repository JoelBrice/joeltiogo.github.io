function foo() {
  throw new Error("SessionStack will help you cash all the crashes:)");
}

function bar() {
  foo();
}

function start() {
  bar();
}

start();
