import React from 'react'
import { useEffect } from 'react'
import { getProducts } from '../action'
import { useDispatch, useSelector } from 'react-redux'
import { ProductsRequest } from '../thunk/Products'
import { Table } from 'react-bootstrap'
export const Products = () => {

    const selector = useSelector((state) => state.Products.product)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ProductsRequest());

    }, [])

    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Products</th>
                    </tr>
                </thead>
                <tbody>
                    {selector.map((product) => (
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </>
    )


}