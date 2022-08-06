var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

const contains = (object, value) => {
  for (let i in object) {
    if (typeof object[i] === "object") {
      return contains(object[i], value);
    }
    if (object[i] === value) {
      return true;
    }
  }
  return false;
};

console.log(contains(nestedObject, "Shiv"));
