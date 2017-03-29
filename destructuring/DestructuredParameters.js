// Handy to make clear what parameters are optional
function setCookie(name, value, {secure, path, domain, expires}) {
    console.log(name);
    console.log(value);
    console.log(secure);
    console.log(path);
    console.log(domain);
    console.log(expires);
}

setCookie("type", "js", {
    secure: true,
    expires: 60000
});