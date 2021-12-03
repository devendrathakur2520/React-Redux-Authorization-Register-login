import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TransactionRequest } from '../thunk/Transaction'
import { Table } from 'react-bootstrap'
export const Transaction = () => {

    const selector = useSelector((state) => state.Transaction.transaction)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(TransactionRequest());

    }, [])

    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Cost</th>
                        <th>Quantity</th>
                        <th>ProductId</th>
                    </tr>
                </thead>
                <tbody>
                    {selector.map((transaction) => (
                        <tr>
                            <td>{transaction.id}</td>
                            <td>{transaction.cost}</td>
                            <td>{transaction.quantity}</td>
                            <td>{transaction.productId}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </>
    )


}