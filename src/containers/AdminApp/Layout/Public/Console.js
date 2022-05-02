import React from 'react'

const Console = () => {
    return (
        <div className='absolute z-50 flex flex-wrap gap-1 top-0 right-0 w-[100px] h-[100px]'>
            <div className='border p-2 hidden xs:inline'>XS</div>
            <div className='border p-2 hidden sm:inline'>SM</div>
            <div className='border p-2 hidden md:inline'>MD</div>
            <div className='border p-2 hidden lg:inline'>LG</div>
            <div className='border p-2 hidden xl:inline'>XL</div>
            <div className='border p-2 hidden 2xl:inline'>2XL</div>
        </div>
    )
}

export default Console