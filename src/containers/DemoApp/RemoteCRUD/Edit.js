import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'

const Edit = () => {

  let [searchParams] = useSearchParams();
  let params = useParams();

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
      Edit param
      {
        JSON.stringify({userData, params})
      }
    </div>
    </div>
  )
}

export default Edit