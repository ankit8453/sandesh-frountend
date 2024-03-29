import { Menu } from '@mui/material'
import React from 'react'

const FileMenu = ({ anchorEl }) => {
  return (
    <Menu anchorEl={anchorEl} open={false}>
        <div
          style={{
            width: "10rem",
          }}
        >Lorem ipsum dolor sit amet 
        consectetur, adipisicing elit.
         Omnis, officia vitae! Sapiente 
         nam sed nisi, ex necessitatibus, 
         autem veritatis obcaecati sequi
          similique fugiat amet. Laboriosam 
          tenetur unde nobis molestias natus.</div>  
    </Menu>
  )
}

export default FileMenu