let obj = {
    log: ['test'],
    get latest() {
        if (this.log.length == 0) return undefined;
        return this.log[this.log.length - 1];
    }
}

console.log(obj.latest);
obj.log.push("new latest");
console.log(obj.latest);