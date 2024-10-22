import React from 'react'
import AdoptionListView from './adoption'

const AdminDashboard = () => {
  return (
    <div className='bg-white px-5 py-10 rounded-lg'>
    <h1 className='text-3xl font-bold mb-5'>Admin Dashboard</h1>
      <AdoptionListView />
    </div>
  )
}

export default AdminDashboard
