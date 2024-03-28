import Layout from '@/component/user/Layout/Layout'
import React from 'react'
import Rides from './Rides'

function page() {
  return (
    <div >
        <Layout Children={<Rides/>}/>
    </div>
  )
}

export default page