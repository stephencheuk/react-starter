import React from 'react'

import {
  FileIcon,
  FolderIcon
} from "./Icons";

function StorageBlock({ data, ...props }) {
  return (
    <div className='flex flex-1 p-2'>
      <div className='flex flex-col border rounded border-green-100 bg-green-100 p-2 w-full'>
        <div className='flex justify-around p-4'>
          <div className='flex flex-1 items-center justify-evenly'>
            <div className="rounded-full p-2 border"><FileIcon /></div>
            <div>
              {
                parseInt(data.file) - 1 ?
                  `${parseInt(data.file)} Files` :
                  `${parseInt(data.file)} File`
              }
            </div>
          </div>
          <div className='flex flex-1 items-center justify-evenly'>
            <div className="rounded-full p-2 border"><FolderIcon /></div>
            <div>
              {
                parseInt(data.folder) - 1 ?
                  `${parseInt(data.folder)} Folders` :
                  `${parseInt(data.folder)} Folder`
              }
            </div>
          </div>
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