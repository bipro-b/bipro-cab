import React from 'react'
import Layout from '../component/user/Layout/Layout'
import BookRide from './BookRide'
function page() {
  return (
    <div>
      <Layout Children={<BookRide/>} ></Layout>
    </div>
  )
}

export default page