module.exports = {
  log: (function () {
    function info(message) {
      return message;
    }
    function main(str) {
      console.info(str);
    }
    main.info = info;
    return main;
  })(),
  executionContext: {
    functionName: "UnitTesting",
  },
  done: jest.fn(),
};
