let a: number;
let b: boolean;
let c: string;

let d: string[]; // Array<strings>

type Conditions = "admin" | "user" | "manager";

type ConditionsWithoutAdmin = Exclude<Conditions, "admin">;

interface DepartmentsForPermission {
  depName: string;
  lvl: number;
}

const DepsForPerms: Record<Conditions, DepartmentsForPermission> = {
  admin: {
    depName: "security",
    lvl: 10,
  },
  user: {
    depName: "sales",
    lvl: 5,
  },
  manager: {
    depName: "sales",
    lvl: 10,
  },
};

interface BasicUser<A = boolean, P = string[]> {
  name: string;
  surname: string;
  age: number;
  isAdmin: A;
  permissions?: P[];
}

type BasicUserWithoutPermissions = Omit<BasicUser, "permissions">;

type AdvancedUser = {
  account: number;
};

type FullUser<A = boolean, P = string[]> = BasicUser<A, P> & AdvancedUser;

const user: FullUser<boolean, Conditions> = {
  name: "Gideon",
  surname: "Nwokpor",
  age: 22,
  isAdmin: true,
  account: 100,
  permissions: ["admin"],
};

const user2: BasicUser = {
  name: "Bigman",
  surname: "Gideon",
  age: 21,
  isAdmin: false,
  // permissions: ["manager", "Developer", "instructor"],
};

// let usersArray: BasicUser[] = [user, user, user];

type MathFunc = (a: number, b: number) => number;

const mul: MathFunc = (a, b) => a * b;

const add: MathFunc = (a, b) => a + b;
