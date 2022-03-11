const users = require('express').Router();
const express = require('express')
const app = express();
const { pool } = require('.../dbConfig');
const bcrypt = require('bcrypt')
const session = require('express-session')
const flash = require('express-flash')

//Configuration / Middleware 
app.use(users.urlencoded({ extended: false }))
app.use(session({
    secret: 'secret',

    resave: false,

    saveUninitialized: false
})
);
app.use(flash);

users.get("/", (req, res) => {
    res.send("./pages/main");
});

users.get("/", async (req, res) => {
    res.send("./signup");
});

users.get("/", async (req, res) => {
    res.send("./login");
});

users.get("/dashboard", async (req, res) => {
    res.send("./dashboard");
});

users.post("/signup", async (req, res) => {
    let { name, email, password, password2 } = req.body;
    console.log({
        name,
        email,
        password,
        password2
    })

    let errors = [];

    if (!name || !email || !password || !password2) {
        errors.push({ message: 'Please eneter all fields' })
    }
    if (password.length < 6) {
        errors.push({ message: 'Password should be at least 6 characters' })
    }
    if (password !== password2) {
        errors.push({ message: 'Passwords do not match' })
    }
    if (errors.length > 0) {
        res.render('Signup', { errors });
    } else {
        let hashPassword = await bcrypt.hash(password, 10);
        console.log(hashPassword)


        pool.query(
            `SELECT * FROM users 
            WHERE email = $1`,
            { email },
            (err, results) => {
                if (err) {
                    throw err;
                }
                console.log(results.rows);

                if (results.rows.length > 0) {
                    errors.push({ message: 'email is already signed up' })
                    res.render('signup', { errors });
                }else{
                    pool.query(
                        `INSERT INTO users (name, password, email)
                        VALUES ($1, $2, $3)
                        RETURNING id, password`, {name, password, email}, 
                        (err, results) => {
                            if(err){
                                throw err;
                            }
                            console.log(results.row)    
                            req.flash('success_msg', 'You are now signed up. Please log in!')
                            res.redirect('/login')                      
                        }
                    )
                }
            }
        );
    }
});

users.put("/users/signup/:id", async (req, res) => {
    res.send("")
});

users.delete("/users/dashboard/:id", async (req, res) => {
    res.send("")
});

module.exports = users;