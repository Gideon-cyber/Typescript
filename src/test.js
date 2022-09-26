var a;
var b;
var c;
var d; // Array<strings>
var DepsForPerms = {
    admin: {
        depName: "security",
        lvl: 10
    },
    user: {
        depName: "sales",
        lvl: 5
    },
    manager: {
        depName: "sales",
        lvl: 10
    }
};
var user = {
    name: "Gideon",
    surname: "Nwokpor",
    age: 22,
    isAdmin: true,
    account: 100,
    permissions: ["admin"]
};
var user2 = {
    name: "Bigman",
    surname: "Gideon",
    age: 21,
    isAdmin: false
};
var mul = function (a, b) { return a * b; };
var add = function (a, b) { return a + b; };
