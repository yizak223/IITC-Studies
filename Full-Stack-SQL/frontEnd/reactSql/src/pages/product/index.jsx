import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import baseUrl from '../../config/baseUrl'


export default function Product() {
    const [products, setProducts] = useState([])
    const [pageNumber, setPageNumber] = useState();
    const [seeProducts, setSeeProducts] = useState(false)
    const [createMOde, setCreateMOde] = useState(false)
    const [newProduct, setNewProduct] = useState({
        ProductName: '',
        UnitPrice: ""
    })
    const [editMode, setEditMode] = useState(false)
    const [editProduct, setEditProduct] = useState({
        ProductID: '',
        ProductName: '',
        UnitPrice: ""
    })

    const fetchData = async (page) => {
        const response = await Axios.post(`${baseUrl}/getByPage`, {
            page: page,
        })
        setProducts(response.data)
    }

    const handleChange = (e) => {
        const newData = { ...newProduct }
        newData[e.target.name] = e.target.value
        setNewProduct(newData)
    }

    const handleChangeEdit = (e) => {
        const editData = { ...editProduct }
        editData[e.target.name] = e.target.value
        setEditProduct(editData)
    }

    const handleEdit = async (e) => {
        e.preventDefault()
        const response = await Axios.patch(`${baseUrl}/`, editProduct)
        setEditMode(false)
        setEditProduct({
            ProductID: '',
            ProductName: '',
            UnitPrice: ""
        })
        fetchData()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await Axios.post(`${baseUrl}/create`, newProduct)
        setCreateMOde(false)
        setNewProduct({
            ProductName: '',
            UnitPrice: ""
        })
        fetchData()
    }

    useEffect(() => {
        fetchData(pageNumber)
    }, [pageNumber])

    const handlePageChange = (event) => {
        setPageNumber(parseInt(event.target.value));
    };
    return (
        <div>
            <button onClick={() => setSeeProducts(!seeProducts)}>{!seeProducts ? 'see products' : 'close'}</button>
            {
                seeProducts ?
                    <>
                        <ul>
                            {
                                products.map((product, i) => (
                                    <div key={i}>
                                        <li>{product.ProductID} - {product.ProductName}</li>
                                    </div>
                                ))
                            }
                        </ul>
                        <label htmlFor=""> Page number</label><br />
                        <input
                            type="number"
                            id="pageNumber"
                            value={pageNumber}
                            onChange={handlePageChange} />
                    </>
                    : null
            }<br />
            <button onClick={() => setCreateMOde(!createMOde)}>{!createMOde ? 'create product' : 'close'}</button>
            {
                createMOde ?
                    <form onSubmit={handleSubmit}>
                        <input placeholder='UnitPrice' onChange={handleChange} type="number" name='UnitPrice' />
                        <input placeholder='ProductName' onChange={handleChange} type="text" name='ProductName' />
                        <button>create</button>
                    </form>
                    : null
            }<br />
            <button onClick={() => setEditMode(!editMode)}>{!editMode ? 'edit product' : 'close'}</button>
            {
                editMode ?
                    <form onSubmit={handleEdit}>
                        <input placeholder='ProductID' onChange={handleChangeEdit} type="number" name='ProductID' />
                        <input placeholder='ProductName' onChange={handleChangeEdit} type="text" name='ProductName' />
                        <input placeholder='UnitPrice' onChange={handleChangeEdit} type="number" name='UnitPrice' />
                        <button>create</button>
                    </form>
                    : null
            }
        </div>
    )
}
