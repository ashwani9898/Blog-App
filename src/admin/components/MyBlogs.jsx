import { useEffect, useState } from "react"
import GetAllMyBlogs from "../services/GetAllMyBlogs"
import { Admin_BLOGS_API } from "../../../env";
import axios from "axios";
import { data } from "react-router-dom";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'title', headerName: 'Title', width: 200 },
  { field: 'body', headerName: 'Body', width: 600 },
  { field: 'author_name', headerName: 'Author Name', width: 200 },
  {
    field: 'edit',
    headerName: 'Edit',
    width: 50,
    renderCell: (params) => (
      <button
        onClick={() => handleButtonClick(params.row)}
        className=""
      >
       <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
<path d="M18.9445 9.1875L14.9445 5.1875M18.9445 9.1875L13.946 14.1859C13.2873 14.8446 12.4878 15.3646 11.5699 15.5229C10.6431 15.6828 9.49294 15.736 8.94444 15.1875C8.39595 14.639 8.44915 13.4888 8.609 12.562C8.76731 11.6441 9.28735 10.8446 9.946 10.1859L14.9445 5.1875M18.9445 9.1875C18.9445 9.1875 21.9444 6.1875 19.9444 4.1875C17.9444 2.1875 14.9445 5.1875 14.9445 5.1875M20.5 12C20.5 18.5 18.5 20.5 12 20.5C5.5 20.5 3.5 18.5 3.5 12C3.5 5.5 5.5 3.5 12 3.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </button>
    ),
  }
];

 function MyBlogs(){
 
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });
    
  const [blogs, setBlogs] = useState([]); // For storing fetched blogs
  const [error, setError] = useState(null); // For storing error messages
  const [loading, setLoading] = useState(true); // For tracking loading state

   
  
  const getUserBlogs = async function(){

    
    const token = localStorage.getItem("auth")
    try {
      setLoading(true); // Start loading
      const response = await axios.get(Admin_BLOGS_API,{ headers:{
          'Authorization': token,
          'Content-Type': 'application/json', // Optional, depending on your API requirements
        }}).then((data)=>setBlogs(data.data));
        
        
    
    } catch (err) {
      // Handle error
      console.error("Error fetching blogs:", err);
      setError(err.message || "An unexpected error occurred.");
     
      
    } finally {
      setLoading(false); // End loading
    }

}

useEffect(()=>{getUserBlogs()},[])
console.log("here are the ",blogs)
    return(<>
    <Paper sx={{ height: '100%', width: '100%' }}>
  <DataGrid
    rows={blogs}
    columns={columns}
    getRowId={(okk) => okk._id}
    paginationModel={paginationModel}
    onPaginationModelChange={setPaginationModel}
    pageSizeOptions={[5, 10]}
    checkboxSelection
    disableColumnResize={false}
    
    
    components={{
      NoRowsOverlay: () => <div>No data available</div>,
    }}
    sx={{
      border: 0,
      '& .MuiDataGrid-cell:focus': {
        outline: 'none', // Removes border highlight
      },
      '& .MuiDataGrid-cell:focus-within': {
        outline: 'none', // Removes border highlight
      },}}
  />
</Paper>

    </>)
}

export default MyBlogs