'use client'
import Layout from '@/component/user/Layout/Layout'
import React from 'react'
import Login from './Login'



function page() {
  return (
    <div>
        <Layout Children={<Login/>} />
    </div>
  )
}

export default page