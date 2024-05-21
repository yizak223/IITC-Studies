const sql = require('mssql');

const config = {
    user: 'user2',
    password: '123456',
    server: 'YIZAK_ALALUF',
    database: 'NORTHWND',
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

const getProduct = async (req, res) => {
    try {
        await sql.connect(config);
        const result = await sql.query`SELECT TOP (10) * FROM Products`;
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send({ message: "Error connecting to the database", error: err });
    }
}
const getProductByPage = async (req, res) => {
    const body = req.body;
    let offset = 0;
    switch (+body.page) {
        case 1:
            offset = 0;
            break;
        case 2:
            offset = 10;
            break;
        case 3:
            offset = 20;
            break;
        case 4:
            offset = 30;
            break;
        case 5:
            offset = 40;
            break;
        case 6:
            offset = 50;
            break;
        case 7:
            offset = 60;
            break;
        case 8:
            offset = 70;
            break;
        case 9:
            offset = 80;
            break;
        // default:
        //     offset = 0;
        //     break;
    }
    try {
        await sql.connect(config);
        const result = await sql.query`
            SELECT *
            FROM Products
            ORDER BY ProductID
            OFFSET ${offset} ROWS FETCH NEXT 10 ROWS ONLY;
        `;
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send({ message: "Error connecting to the database", error: err });
    }
}

//todo add the whole columon
const createProduct = async (req, res) => {
    try {
        await sql.connect(config);
        const result = await sql.query`INSERT INTO Products ( 
            ProductName, 
            UnitPrice
            ) VALUES (
            ${req.body.ProductName},
            ${req.body.UnitPrice}
            )`;
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send({ message: "Error connecting to the database", error: err });
    }
}

const updateProduct = async (req, res) => {
    try {
        await sql.connect(config);
        const result = await sql.query`UPDATE Products SET ProductName = ${req.body.ProductName}, UnitPrice = ${req.body.UnitPrice} WHERE ProductID = ${req.body.ProductID}`;
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send({ message: "Error connecting to the database", error: err });
    }
}



module.exports = { getProduct, updateProduct, createProduct, getProductByPage }