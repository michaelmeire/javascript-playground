var log = require('../utils.js').log;

let uid = Symbol.for("uid");
let object = {};
object[uid] = "12345"
log(() => object[uid]);
log(() => uid);

let uid2 = Symbol.for("uid");
log(() => uid === uid2);

log(() => Symbol.keyFor(uid2));