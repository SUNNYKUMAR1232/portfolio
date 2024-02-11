import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const MenuItems = ({path,name}) => {
  return (
    <Box>
        <Link href={path}>
            <Typography variant='span' >{name}</Typography>
        </Link>
    </Box>
  )
}

export default MenuItems