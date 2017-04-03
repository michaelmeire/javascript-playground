function log(func) {
    console.log(`${func.toString().match(/\(\) => (.*)$/)[1]} --> ${func()}`);
}

module.exports = {
    log: log
};