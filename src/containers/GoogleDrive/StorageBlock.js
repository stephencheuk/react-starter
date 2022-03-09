import React from 'react'

function StorageBlock({ data, ...props }) {
  return (
    <div className='flex flex-1 p-2'>
      <div className='flex flex-col border rounded border-green-100 bg-green-100 p-2 w-full'>
        <div className=''>
          <div className=''>{/*File Icon*/}</div>
          <div className=''>{/*File Count*/}</div>
        </div>
        <div className='h-1 bg-orange-500'> {/* separate line */} </div>
        <div className='flex justify-between'>
          <div className=''>
            <div className=''>Total Storage</div>
            <div className=''>{parseInt(data.limit).fileSize()}</div>
          </div>
          <div className=''>
            <div className=''>Used</div>
            <div className=''>{parseInt(data.used).fileSize()}</div>
          </div>
          <div className=''>
            <div className=''>Trash</div>
            <div className=''>{parseInt(data.trash).fileSize()}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StorageBlock