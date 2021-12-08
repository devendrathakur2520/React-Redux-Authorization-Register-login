import React from 'react'
import { useEffect } from 'react'
import { getProducts, setProductsFilters } from '../action'
import { useDispatch, useSelector } from 'react-redux'
import { ProductsRequest } from '../thunk/Products'
import { Table } from 'react-bootstrap'
export const Products = () => {

    const selector = useSelector((state) => state.Products.product.records)
    const filters = useSelector((state) => state.Products.product.filter)
    const dispatch = useDispatch();
    console.log("selector", selector)
    const handleChangeFilter = (event) => {
        const { value, name } = event.target;
        dispatch(setProductsFilters({ [name]: value }));
        console.log("filters", filters.limit)
    };
    const handlePageChange = (acc) => {
        dispatch(setProductsFilters({ page: acc + filters.page }));
      };
    useEffect(() => {
        const getProduct = () => {
            dispatch(ProductsRequest(filters));
        }
        getProduct();
    }, [filters.limit,filters.page])

    return (
        <>
            <div>
                <select name="limit" value={filters.limit} onChange={handleChangeFilter}>
                <option value="">All</option>
                    <option value={2}>2</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select>

                <button disabled={filters.page === 1} onClick={() => handlePageChange(-1)}>Prev</button>
      <button disabled={filters.page === filters.pages} onClick={() => handlePageChange(1)}>Next</button>
            </div>
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