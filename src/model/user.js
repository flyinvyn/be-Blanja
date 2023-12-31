const Pool = require("../config/db");

const insertUser = (data) => {
  const { id_user, email_user, passwordHash_user, fullname_user, phone_number, role_user, photo } =
    data;
  return Pool.query(`INSERT INTO users(id_user, email_user, password_user, fullname_user, phone_number, role_user , photo)
    VALUES ('${id_user}','${email_user}','${passwordHash_user}','${fullname_user}', '${phone_number}','${role_user}','${photo}')`)
};

const selectAllUser = ({ limit, offset, sort, sortby }) => {
  return Pool.query(
    `SELECT * FROM users ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${offset}`
  );
};

const selectUser = (id_user) => {
  return Pool.query(`SELECT * FROM users WHERE id_user = '${id_user}'`);
};

const updateUser = (data) => {
  const { id_user, email_user, role_user, phone_number, fullname_user,photo } = data;
  return Pool.query(
    `UPDATE users SET email_user = '${email_user}', role_user = '${role_user}', fullname_user = '${fullname_user}', phone_number = '${phone_number}', photo = '${photo}' WHERE id_user = '${id_user}'`
  );
};

const findId = (id_user) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT id_user FROM users WHERE id_user='${id_user}'`,
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    )
  );
};

const findEmail = (email_user) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT * FROM users WHERE email_user= '${email_user}' `,
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    )
  );
};

const countData = () => {
  return Pool.query(`SELECT COUNT(*) FROM users`);
};

module.exports = {
  insertUser,
  findEmail,
  selectAllUser,
  countData,
  findId,
  selectUser,
  updateUser,
};
