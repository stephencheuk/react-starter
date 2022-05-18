import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation, useSearchParams } from 'react-router-dom'

const Edit = () => {

  let [searchParams, setSearchParams] = useSearchParams();

  let user = searchParams.get("user");

  let [userData, setUserData] = useState(null);

  const redux = useSelector((state) => state.DemoApp_RemoteCRUD);

  console.log("RemoteCRUD Edit", redux);

  const location = useLocation();

  useEffect(() => {
    console.log('RemoteCRUD Edit useEffect', user);
    setUserData(user)
  }, [user]);

  return (
    <div>
    <div>
      <Link
        to={location.pathname.replace(/\/(create|edit).*/, '')}
      >Back</Link>
    </div>
    <div>
      Edit param {userData}
    </div>
    </div>
  )
}

export default Edit