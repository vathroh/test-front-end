import { ProColumns, ProTable } from '@ant-design/pro-components'
import React from 'react'

type ProductsItems = {
    id: string;
    name: string;
    priority: number;
    ProductType: string;
    Categories: string;
    Price: number;
    status: boolean;
};

const columns: ProColumns<ProductsItems >[] = [
    {
        dataIndex: 'index',
        valueType: 'indexBorder',
        width: 48,
    },
]

const AllProducts: React.FC = () => {
    return (
        <div>
            <ProTable
            columns={columns}
            >

            </ProTable>
        </div>
    )
}

export default AllProducts