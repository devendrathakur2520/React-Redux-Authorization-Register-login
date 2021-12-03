
import React from 'react'
import { useEffect } from 'react'
import { getProducts } from '../action'
import { useDispatch, useSelector } from 'react-redux'
import { locationRequest } from '../thunk/Location'
import { Table } from 'react-bootstrap'

export const Location = () => {

    const selector = useSelector((state) => state.Locations.location)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(locationRequest());

    }, [])

    return (
        <>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {selector.map((location) => (
                        <tr>
                            <td>{location.id}</td>
                            <td>{location.name}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>

    )


}