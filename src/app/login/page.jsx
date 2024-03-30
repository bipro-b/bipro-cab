'use client'
import Layout from '@/component/user/Layout/Layout'
import React from 'react'
import Index from './Index'


function page() {
  return (
    <div>
        <Layout Children={<Index/>} />
    </div>
  )
}

export default page