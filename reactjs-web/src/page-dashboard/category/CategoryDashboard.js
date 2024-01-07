import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function CategoryDashboard() {

  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  }, [])
  const server = "http://localhost:8081/api/"
  const getList = () => {
    axios({
      url : server + "category", // URL API
      method : "get",
      data: {}
    }).then(res => {
     var data = res.data
     setList(data.data)
      // console.log(data);
    
    }).catch(err => {
      console.log(err);
    })
  }

  // event delet button
  const onDelete = (id) => {
    axios({
      url : server + "category/"+id, // URL API
      method : "delete",
      data: {}
    }).then(res => {
     var data = res.data
    //  setList(data.message)
      // console.log(data);
      getList();
    
    }).catch(err => {
      console.log(err);
    })
    
  }

  return (
    <main className='max-w-8xl mx-auto Manrope py-3'>
         {/* <h1 className='text-3xl font-bold'> List Category</h1> */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg border mt-3 bg-gray-100">
            <table className="w-full text-md text-left rtl:text-right text-gray-800 font-medium">
                <thead className="text-xl text-gray-700 border-b-2 bg-gray-200">
                    <tr>
                        <th scope="col" className="py-3 px-3 border-r border-gray-300">
                        No
                        </th>
                        <th scope="col" className="py-3 px-3 border-r border-gray-300">
                        NAME
                        </th>
                        <th scope="col" className="py-3 px-3 border-r border-gray-300">
                        DESCRIPTION
                        </th>
                        <th scope="col" className="py-3 px-3 border-r border-gray-300">
                        STATUS
                        </th>
                        <th scope="col" className="py-3 px-3 border-r border-gray-300">
                        CREATE
                        </th>
                        <th scope="col" className="py-3 px-3">
                        ACTION
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                      list.map((item, index) => {
                        return(
                          <tr className='border-t odd:bg-white' key={index}>
                            <td className='py-3 px-3'>{index+1}</td>
                            <td className='py-3 border-l px-3'>{item.name}</td>
                            <td className='py-3 border-l px-3'>{item.description}</td>
                            <td className='py-3 border-l px-3'>{item.status}</td>
                            <td className='py-3 border-l px-3'>{item.create}</td>
                            <td className='space-x-1 py-3 px-3 border-l'>
                              <button className='bg-green-400 text-sm uppercase text-white px-4 py-2 rounded-md hover:bg-green-500 hover:duration-200'>Edit</button>
                              <button onClick={()=> onDelete(item.category_id)} className='bg-red-400 text-sm uppercase text-white px-4 py-2 rounded-md hover:bg-red-500 hover:duration-200'>Delete</button>
                            </td>
                          </tr>
                        )
                      })
                    }
                </tbody>
            </table>
        </div>

    </main>
  )
}
