const HelloWorld = artifacts.require("HelloWorld");


contract("HelloWorld", account => {

    describe("Calling print", () => {
        it("should return Hello World string", () => {
            HelloWorld.deployed()
            .then(instance => instance.print.call()
            .then(message => {
                assert.equal(message, "Hello World!");
            }))
        });
    })
});