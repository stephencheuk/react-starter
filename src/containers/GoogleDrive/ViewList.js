import React from 'react'

function ViewList({ path, files, setPath, loadFile }) {
  return (
    <div className='flex flex-col border rounded border-green-100 bg-green-100 p-2 w-full'>
      <div className='flex flex-col justify-around p-4'>
        <div className='h-6'>
          PATH: {" "}
          {
            path.name
          }
        </div>
        <div className='h-1 bg-orange-500'> {/* separate line */} </div>
        <div className="flex-1">
          {
            files.map((file) => {
              if (file.mimeType = "application/vnd.google-apps.folder") {
                return (
                  <div key={file.id} className='flex cursor-pointer p-1 hover:bg-gray-50' onClick={e => setPath({ 'id': file.id, 'name': file.name })}>
                    <div className='w-[40px]'><img src={file.iconLink} /></div>
                    <div className='flex-1'>{file.name}</div>
                    <div className='w-[100px] text-right	'>{parseInt(file.size).fileSize()}</div>
                  </div>
                )
              } else {
                return (
                  <div key={file.id} className='flex cursor-pointer p-1 hover:bg-gray-50' onClick={e => loadFile(file.id)}>
                    <div className='w-[40px]'><img src={file.iconLink} /></div>
                    <div className='flex-1'>{file.name}</div>
                    <div className='w-[100px] text-right	'>{parseInt(file.size).fileSize()}</div>
                  </div>
                )
              }
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ViewList