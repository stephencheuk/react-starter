import React from 'react'

import PageList from './PageList';
import PageContent from './PageContent';

const Notion = () => {

  // const [] = useState();
    
  return (
    <div className='notion'>
        <div className='notion__pagelist'>
          <PageList />
        </div>
        <div className='notion__pagecontent'>
          <PageContent />
        </div>
    </div>
  )
}

export default Notion;