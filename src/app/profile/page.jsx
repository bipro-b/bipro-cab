import Layout from '@/component/user/Layout/Layout'
import React from 'react'
import Profile from './Profile'

function page() {
  return (
    <div>
        <Layout Children={<Profile/>} />
    </div>
  )
}

export default page