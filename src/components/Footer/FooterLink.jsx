import React from 'react'
import Link from 'next/link'
import { Typography } from '@mui/material'

const FooterLink = ({path,name}) => {
  return (
    <Link href={path} >
        <Typography variant='span' >{name}</Typography>
    </Link>

  )
}

export default FooterLink
const useStyles = {
    root:{
        backgroundColor:"#c5c5c5",
        color:'#fff',
        width:'100%',
        height:'100vh',
        

    }
}
