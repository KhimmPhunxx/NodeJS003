import React, { useEffect, useState } from 'react'
import request from '../../share/request'
import { Table, Tag } from 'antd';
import { formateDateClient } from '../../share/helper';
import Manrope from './CategoryDashboard.css'

export default function ProductDashboard() {

  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  }, [])

  const getList = () => {
    request("product","get").then(res => {
      console.log(res)
      if(res){
        setList(res.data)
      }
    })
  }
  return (
    <main>
        {/* create new button create */}
        <div className='flex mt-2'>
          <button className='bg-blue-400 Manrope text-sm uppercase text-white px-3 py-2 rounded-md hover:bg-blue-500 hover:duration-200'>New Product <i class="fa-solid fa-plus"></i></button>
        </div>
        <Table
        className='mt-3 shadow border bg-gray-100'
        pagination={false}
        columns={[
          {
            key : "barcode",
            title: "Barcode",
            dataIndex: "barcode",
            className : "Manrope"
            
          },
          {
            key : "name",
            title: "Name",
            dataIndex: "name",
            className : "Manrope"
            
          },
          {
            key : "quantity",
            title: "Quantity",
            dataIndex: "quantity",
            className : "Manrope"
          },
          {
            key : "price",
            title: "Price",
            dataIndex: "price",
            className : "Manrope"
          },
          {
            key : "image",
            title: "Image",
            dataIndex: "image",
          },
          {
            key : "description",
            title: "Description",
            dataIndex: "description",
            className : "Manrope"
          },
          {
            key : "is_active",
            title: "Active",
            dataIndex: "is_active",
            render : (text, record, index)=>{
              return (
                <Tag className="Manrope" color={text == 1 ? "green" : "red" } key={1}>
                  {text == 1 ? "Active" : "Disable"}
                </Tag>
              )
            }
          },
          {
            key : "create_at",
            title: "Create",
            dataIndex: "create_at",
            render : (text, record, index) =>{
              return formateDateClient(text)
            },
            className : "Manrope"
          },
          {
            key : "action",
            title: "Action",
            className : "Manrope",
            render : (text, record, index) =>{
              return (
                <div className='space-x-2 px-2 border-l'>
                  <button className='bg-blue-400 text-sm uppercase text-white px-3 py-1 rounded-md hover:bg-blue-500 hover:duration-200'><i class="fa-solid fa-pen-to-square"></i></button>
                  <button className='bg-red-400 text-sm uppercase text-white px-3 py-1 rounded hover:bg-red-500 hover:duration-200'><i class="fa-solid fa-trash-can"></i></button> 
                </div>
              )
            }
          },
        ]}
            dataSource={list}
        />

    </main>
    //  "product_id": 2,
    //  "category_id": 1,
    //  "barcode": "P001",
    //  "name": "Mackbook Pro 2024",
    //  "quantity": -189,
    //  "price": 2200,
    //  "image": "",
    //  "description": "SSD 2TBG ,RAM 31 GB Dispay 16Inch",
    //  "is_active": 1,
    //  "create_at": "2024-01-10T06:42:10.000Z",
    //  "create_by": null


  )
}
