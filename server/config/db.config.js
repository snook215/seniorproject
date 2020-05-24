/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */

const bcrypt = require('bcryptjs');
// eslint-disable-next-line no-unused-vars
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const db = require('./db.js');
const userMiddleware = require('../middleware/users.js');

//StaffInfo
const getUsers = (request, response) => {
  db.query('SELECT * FROM staffinfo ORDER BY staffid ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)
  db.query('SELECT * FROM staffinfo WHERE staffid = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { staffid, username, schoolid, name, email, phone, position } = request.body
  
  db.query('INSERT INTO staffinfo (staffid, username, schoolid, name, email, phone, position) VALUES ($1, $2,$3, $4, $5, $6, $7)', [staffid,username, schoolid, name, email, phone, position], (error, results) => {
    console.log(request.body)
    if (error) {

      throw error
    }
    response.status(201).send(`User added with ID: ${results.name}`)
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  db.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  db.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

// //StudentInfo
const getStudents = (request, response) => {
  db.query('SELECT * FROM studentinfo ORDER BY studentid ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getStudentById = (request, response) => {
  const id = parseInt(request.params.id)

  db.query('SELECT * FROM studentinfo WHERE studentid = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getStudentByGender = (request, response) => {
  const gender = request.body
  db.query('SELECT * FROM studentinfo WHERE LOWER(gender) = LOWER($1)', [gender], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getStudentBySchoolId = (request, response) => {
  const id = parseInt(request.params.id)

  db.query('SELECT * FROM studentinfo WHERE schoolid = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getStudentByAge = (request, response) => {
  const id = parseInt(request.params.id)

  db.query('SELECT * FROM studentinfo WHERE age = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


const createStudent = (request, response) => {
  const { name, studentid, schoolid, grade, classr, gender, age } = request.body

  db.query('INSERT INTO studentinfo (name, studentid, schoolid, grade, class, gender,age) VALUES ($1, $2, $3, $4, $5, $6, $7)', [name, studentid, schoolid, grade, classr, gender, age], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.name}`)
  })
}

// const updateSchool = (request, response) => {
//   const id = parseInt(request.params.id)
//   const { name, email } = request.body

//   pool.query(
//     'UPDATE School SET name = $1, email = $2 WHERE id = $3',
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User modified with ID: ${id}`)
//     }
//   )
// }

// const deleteSchool = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('DELETE FROM School WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).send(`User deleted with ID: ${id}`)
//   })
// }

//school
const getSchools = (request, response) => {
  db.query('SELECT * FROM school ORDER BY schoolid ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//register
const register = (userMiddleware.validateRegister,(req,res,next) => {
  const { username, password} = req.body
  db.query(
    'SELECT * FROM userlogin WHERE LOWER(username) = LOWER($1)',[username],(err, result) => {
      if (result.rowCount > 0) {
        return res.status(409).send({
          msg: 'This username is already in use!'
        });
      } else {
        // username is available
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).send({
              msg: err
            });
          } else {
            // has hashed pw => add to database
            db.query(
              'INSERT INTO userlogin (username, password,role) VALUES ($1,$2,$3)',[username,hash,'staff'] , (err, result) => {
                if (err) {
                  throw err;
                  return res.status(400).send({
                    msg: err
                  });
                }
                return res.status(201).send({
                  msg: 'Registered!'
                });
              }
            );
          }
        });
      }
    }
  );
});

//login
const login = (req, res, next) => {
  const {username,password} = req.body
  db.query(
    'SELECT * FROM userlogin WHERE username = $1', [username], (err, result) =>{
      // user does not exists
      if (err) {
        // throw err;
        return res.status(400).send({
          msg: err
        });
      }
      if (result.rowCount==0) {
          return res.status(401).send({
          msg: 'Username or password is incorrect!'
        });
      }
      var dbPassword = result.rows[0].password;
      // check password
      bcrypt.compare(
        password,
        dbPassword,
        (bErr, bResult) => {
          // wrong password
          if (bErr) {
            // throw bErr;
            return res.status(401).send({
              msg: 'Username or password is incorrect!'
            });
          }
          if (bResult) {
            const token = jwt.sign({
            },
              'SECRETKEY', {
              expiresIn: '7d'
            }
            );
            db.query(
              'UPDATE userlogin SET lastlogin = now() WHERE username = $1',[username]);
            return res.status(200).send({
              msg: 'Logged in!',
              token,
              user: result[0]
            });
          }
          return res.status(401).send({
            msg: 'Username or password is incorrect!'
          });
        }
      );
    }
  );
};

//Measurement Record
//Measurement Record
//Measurement Record

const getRecordById = (request, response) => {
  const id = parseInt(request.params.id)

  db.query('SELECT * FROM eachrecord WHERE studentid = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createRecord = (request, response) => {
  const { studentid, result, height, weight} = request.body
  
  db.query('INSERT INTO eachrecord (studentid, result, height, weight) VALUES ($1, $2, $3, $4)', [studentid, result, height,weight], (error, results) => {
    if (error) {

      throw error
    }
    response.status(201).send(`User added with ID: ${results.name}`)
  })
}



module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,

  getStudents,
  getStudentById,
  createStudent,
  getStudentByGender,
  getStudentByAge,
  getStudentBySchoolId,

  getSchools,
  login,
  register,

  getRecordById,
  createRecord

  // getSchool,
  // getSchoolById,
  // createSchool,
  // updateSchool,
  // deleteSchool
}