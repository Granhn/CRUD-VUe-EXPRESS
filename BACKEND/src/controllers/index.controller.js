const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: 'crudapi',
})

const getUsers = async (req, res) =>{
    const response = await pool.query('SELECT * FROM users');
    jsonData = {
        "data": response.rows
    }
    res.status(200).json(jsonData);
}
const createUser = async (req, res) =>{
    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO users (name,email) VALUES ($1,$2)',[name, email])
    console.log(response);
    res.json({
        message: "User added Succesfully",
        body: {
            user: {name, email}
        }
    })
}
const getUserById = async(req, res) => {
    const { id } = req.params;
    const query_response = await pool.query('SELECT * FROM users WHERE ID = $1',[id]);
    res.send(query_response.rows)
}
const deleteUserById = async(req, res)=>{
    const  id  = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    console.log(response);
    res.json(`User ${id} deleted`)
}
const updateUser = async (req,res) =>{
    const {name, email} = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3',[name,email,id]);
    console.log(response);
    res.json('User updated successfully')

}

module.exports = {
    getUsers,
    createUser,
    getUserById,
    deleteUserById,
    updateUser
}