const HelloWorld = artifacts.require("HelloWorld");


contract("HelloWorld", account => {
    it("should return HelloWorld string", () => {
        HelloWorld.deployed()
        .then(instance => instance.print.call()
        .then(message => {
            assert.equal(message, "HelloWorld!");
        }))
    });
});