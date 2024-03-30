'use client'
import Layout from '@/component/user/Layout/Layout'
import React from 'react'
import Register from './Register'

function page() {
  return (
    <div>
    <Layout Children={<Register/>} />
    </div>
  )
}

export default page