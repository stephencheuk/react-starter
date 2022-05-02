import React from 'react'

function ViewThumb({ path, files, setPath, loadFile }) {
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
        <div className="flex-1 grid grid-cols-2 gap-1 xl:grid-cols-3 xl:gap-3 2xl:grid-cols-4 2xl:gap-3 3xl:grid-cols-8 3xl:gap-8 4xl:grid-cols-8 4xl:gap-8">
          {
            files.map((file) => {
              if (file.mimeType === "application/vnd.google-apps.folder") {
                return (
                  <div key={file.id} className='flex flex-col cursor-pointer p-1 sm:bg-gray-50 hover:bg-gray-50' onClick={e => setPath({ 'id': file.id, 'name': file.name })}>
                    <div className='h-40'><img alt="" className='h-40' referrerPolicy="no-referrer" src={file.thumbnailLink || file.iconLink} /></div>
                    <div className='flex-1'>{file.name}</div>
                    <div className='w-[100px] text-right	'>{parseInt(file.size).fileSize()}</div>
                  </div>
                )
              } else {
                return (
                  <div key={file.id} className='flex flex-col cursor-pointer p-1 sm:bg-gray-50 hover:bg-gray-50' onClick={e => loadFile(file.id)}>
                    <div className='h-40'><img alt="" className='h-40' referrerPolicy="no-referrer" src={file.thumbnailLink || file.iconLink} /></div>
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

export default ViewThumb