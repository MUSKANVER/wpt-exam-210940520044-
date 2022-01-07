const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "wpt",
};

async function connectionCheck() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("connected");
  await connection.endAsync();
}
async function addUser(user) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `insert into message(username,messages) values(?,?)`;
  await connection.queryAsync(sql, [user.username, user.messages]);
  await connection.endAsync();
}

async function selectUser() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `select * from message`;
  const list = await connection.queryAsync(sql, []);
  await connection.endAsync();
  console.log(list);
  return list;
}

connectionCheck();

/*const user = {
  username: "abcd",
  messages: "hi i'm abcd",
};
addUser(user);*/
selectUser();
module.exports = { selectUser, addUser };
