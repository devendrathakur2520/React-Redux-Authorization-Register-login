import React from 'react'
import { useEffect } from 'react'
import { getProducts } from '../action'
import { useDispatch, useSelector } from 'react-redux'
import { FamiliesRequest } from '../thunk/Families'
import { Table } from 'react-bootstrap'
export const Families = () => {

    const selector = useSelector((state) => state.Families.families)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FamiliesRequest());

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
                    {selector.map((family) => (
                        <tr>
                            <td>{family.id}</td>
                            <td>{family.name}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </>
    )


}