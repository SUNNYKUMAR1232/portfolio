import { Icon } from '@iconify/react'
import { Box, InputAdornment, TextField } from '@mui/material'
import React from 'react'

const TextFields = ({icon,placeholder}) => {
  return (
    <Box>
         <TextField
          sx={useStyles.input}
          placeholder={placeholder}
          InputProps={{
            startAdornment: (
              <InputAdornment sx={useStyles.Icon} position="start">
                <Icon icon={icon} />
              </InputAdornment>
            ),
          }}
        />
    </Box>
  )
}

export default TextFields
const useStyles = {
    input: {
      width:{xs:"300px",md:"500px"},
      height: "100%",
        "& .MuiInputBase-root": {
          borderRadius: "5px",
          marginBottom: "10px",
          border: "none",
        },
      },
      Icon: {
        color: "#000000",
        fontSize: { xs: "20px", md: "30px" },
      },
      
}
// Compare this snippet from src/components/GetTouch/GetTuchForm.jsx: