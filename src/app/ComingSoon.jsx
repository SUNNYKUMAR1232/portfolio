import React from 'react'
import {motion} from 'framer-motion'
const ComingSoon = () => {
  return (
    <>
      <motion.div
      animate={{scale:1.5}}
      initial={{scale:0.5}}
      transition={{duration:1}}
      style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',width:'100vw',backgroundColor:'#000',color:'#fff'}}>
        <h1>Coming Soon...</h1>
      </motion.div>
    </>
  )
}

export default ComingSoon