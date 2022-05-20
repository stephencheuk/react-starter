
const Header = (props) => {

  return (
    <div className="header">
      <div className="font-bold text-4xl mb-4">
      A simple CRUD demo with backend nodejs express and remote database (<a href="https://www.mongodb.com/">Mongodb</a>)
      </div>
    </div>
  );

  /*
  return (
    <div className="header">
      <div className="flex flex-col">
        <div className="font-bold text-4xl">
          A simple CRUD demo with backend nodejs express and remote database <a href="https://www.mongodb.com/">Mongodb</a>
        </div>
        <div className="flex gap-2">
          <div><Link to="./">List</Link></div>
          <div><Link to="./edit">Edit</Link></div>
          <div><Link to="./edit/123">Edit/123</Link></div>
          <div><Link to="./create">Create</Link></div>
          <div><Link to="./create/23">Create/123</Link></div>
        </div>
        <div className="flex items-center">
          <input className="rounded text-sm p-1 outline-none" placeholder="Search" value={querystring_search} onChange={e => setQS_Search(e.target.value)} onKeyPress={e => onEnterPress} />
          <SearchIcon className="h-4 w-4 text-white m-2" />
        </div>
      </div>
    </div>
  )
  */

  // useEffect(() => {
  //   setQS_Search(searchParams.get('search') || '');
  // }, [searchParams])

  // return (
  //   <div className="header bg-[#fc766a] mb-5">
  //     <div className="max-w-6xl mx-auto flex place-items-center justify-between">
  //       <div className="font-extralight m-4 text-2xl text-white">
  //         <Link to="/">Simple BLOG</Link>
  //       </div>
  //       <div className="flex items-center">
  //         <input className="rounded text-sm p-1 outline-none" placeholder="Search" value={querystring_search} onChange={e => setQS_Search(e.target.value)} onKeyPress={omEnterPress} />
  //         <SearchIcon className="h-4 w-4 text-white m-2" />
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default Header