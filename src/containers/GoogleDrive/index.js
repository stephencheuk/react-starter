import React, { useState, useEffect } from 'react';
import { gapi, loadAuth2, loadClientAuth2 } from 'gapi-script'

import {
  GoogleDrive_apiKEY,
  GoogleDrive_clientID,
} from '../../config/constant';

import DriveSummary from "./DriveSummary"
import ViewList from './ViewList';
import ViewThumb from './ViewThumb';

// import { UserCard } from './UserCard';
// import './GoogleLogin.css';

var SCOPE = 'profile https://www.googleapis.com/auth/drive';
var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';

const GoogleDrive = () => {
  const [user, setUser] = useState(null);
  const [files, setFiles] = useState([]);
  const [path, setPath] = useState({});
  const [bname, setBName] = useState('Loading');
  const [view, setView] = useState('thumb');
  // const [googleAuth, setGoogleAuth] = useState(null);

  const initAuth2 = async () => {
    await loadAuth2(gapi, GoogleDrive_clientID, SCOPE).then((user) => {
      console.log(['initAuth2 then', user.currentUser])
    });
    console.log(['initAuth2'])
  }

  // useEffect(() => {
  //   const setAuth2 = async () => {
  //     // initAuth2();
  //     // console.log(loadClientAuth2);
  //     // let auth2 = await loadAuth2(gapi, GoogleDrive_clientID, SCOPE, discoveryUrl);
  //     // const auth2 = await loadAuth2(gapi, GoogleDrive_clientID, '')
  //     // console.log('first useEffect', auth2.isSignedIn.get());
  //     //   if (auth2.isSignedIn.get()) {
  //     //     updateUser(auth2.currentUser.get());
  //     //     initClient(auth2.currentUser.get());
  //     //   } else {
  //     //     attachSignin(document.getElementById('customBtn'), auth2);
  //     //   }
  //   }
  //   setAuth2();
  // }, []);

  useEffect(() => {
    if (!user) {
      const setAuth2 = async () => {
        const auth2 = await loadAuth2(gapi, GoogleDrive_clientID, SCOPE)
        attachSignin(document.getElementById('customBtn'), auth2);
        await loadClientAuth2(gapi, GoogleDrive_clientID, SCOPE);
        gapi.client.init({
          apiKey: GoogleDrive_apiKEY,
          discoveryDocs: [discoveryUrl],
          clientId: GoogleDrive_clientID,
          scope: SCOPE
        }).then(function () {
          console.log('gapi.client.init then')
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

        });
      }
      setAuth2();
    }
  }, [user])

  useEffect(() => {
    if (user) {
      loadFile(path.id);
    }
  }, [path])

  function updateSigninStatus(isSignedIn) {
    // When signin status changes, this function is called.
    // If the signin status is changed to signedIn, we make an API call.
    if (isSignedIn) {
      updateUser(gapi.auth2.getAuthInstance().currentUser.get());
      setPath({ id: 'root', name: '/' });
    }
  }
  // const initClient = async () => {
  //   console.log('initClient');
  //   await loadClientAuth2(gapi, GoogleDrive_clientID, SCOPE, discoveryUrl);
  //   // window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus)
  //   // console.log('initClient', window.gapi.auth2.getAuthInstance());
  // }

  const loadFile = async (parent) => {
    //AUTH_TOKEN = "ya29.GltjBlFp1_IiifotwFMgCllpXuyC9IFHLYURXTbfZcwheGTAxxmOaO-7cwU8YSRHli2NIJIT53wEPpnSMEvSDzQTVz49WJtBUREcKXSpoArztBYuhQYwP4NRoCmK"
    var user = (gapi.auth2.getAuthInstance().currentUser.get())
    var profile = user.getBasicProfile()
    var auth = (user.getAuthResponse())
    var AUTH_TOKEN = auth.access_token

    var headers = {
      Authorization: 'Bearer ' + AUTH_TOKEN
    }
    // this.setState({loading: true})
    var conditions = []
    //conditions.push("trashed = false")
    //conditions.push("mimeType = 'application/vnd.google-apps.folder'")
    conditions.push("'" + parent + "' in parents")
    var query = encodeURIComponent(conditions.join(" and "))
    //console.log(query);
    // https://www.googleapis.com/drive/v3/files?q=trashed = false and '[object Object]' in parents&fields=files(copyRequiresWriterPermission,createdTime,description,iconLink,id,kind,mimeType,name,ownedByMe,parents,properties,shared,sharingUser,size,teamDriveId,thumbnailLink,trashed,webContentLink,webViewLink),incompleteSearch,kind,nextPageToken&key=
    // https://www.googleapis.com/drive/v3/files?q=trashed = false and 'root' in parents&fields=files(copyRequiresWriterPermission,createdTime,description,iconLink,id,kind,mimeType,name,ownedByMe,parents,properties,shared,sharingUser,size,teamDriveId,thumbnailLink,trashed,webContentLink,webViewLink),incompleteSearch,kind,nextPageToken&key=
    var url = "https://www.googleapis.com/drive/v3/files?q=" + query + "&fields=files(copyRequiresWriterPermission%2CcreatedTime%2Cdescription%2CiconLink%2Cid%2Ckind%2CmimeType%2Cname%2CownedByMe%2Cparents%2Cproperties%2Cshared%2CsharingUser%2Csize%2CteamDriveId%2CthumbnailLink%2Ctrashed%2CwebContentLink%2CwebViewLink)%2CincompleteSearch%2Ckind%2CnextPageToken&key="
    var url = "https://www.googleapis.com/drive/v3/files?q=" + query + "&fields=files(mimeType, id, name, size, parents, iconLink, thumbnailLink)&key="
    //url = 'response.json'
    fetch(url, { method: 'GET', headers, })
      .then(response => response.json())
      .then(data => {
        if (data.files) {
          console.log(data.files);
          setFiles(data.files);
        }
        // this.setState({ loading: false })
      });
  }
  const updateUser = (currentUser) => {
    //console.log('updateUser');
    const name = currentUser.getBasicProfile().getName();
    const profileImg = currentUser.getBasicProfile().getImageUrl();
    setUser({
      name: name,
      profileImg: profileImg,
    });
  };

  const attachSignin = (element, auth2) => {
    setBName('Login');
    auth2.attachClickHandler(element, {},
      (googleUser) => {
        updateUser(googleUser);
      }, (error) => {
        console.log(JSON.stringify(error))
      });
  };

  const signOut = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      setUser(null);
      console.log('User signed out.');
    });
  }

  // // <UserCard user={user} />
  if (user) {
    return (
      <div className="flex flex-col">
        <div className='flex w-full bg-red-500 justify-between'>
          <div className='flex'>
            <div id="" className="rounded border border-orange-500 bg-orange-700 p-2 cursor-pointer" onClick={e => loadFile('root')}>
              Load File
            </div>
            <div>
              <img src={user.profileImg} />
            </div>
          </div>
          <div className='flex'>
            <div className='w-fit'>
              {user.name}
            </div>
            <div id="" className="w-fit rounded border border-orange-500 bg-orange-700 p-2 cursor-pointer" onClick={signOut}>
              Sign Out
            </div>
          </div>
        </div>
        <div className="md:flex bg-yellow-500">
          <div className='w-full md:w-2/5 xl:w-[30%] 2xl:w-[20%] 3xl:w-[15%] 4xl:w-[10%]'><DriveSummary /></div>
          <div className='flex flex-1 sm:p-1 md:p-2'>
            {
              view === 'list' ?
                <ViewList path={path} files={files} setPath={setPath} loadFile={loadFile} /> :
                <ViewThumb path={path} files={files} setPath={setPath} loadFile={loadFile} />
            }
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <div id="customBtn" className="rounded border border-orange-500 bg-orange-700 p-2 cursor-pointer">
        {bname}
      </div>
    </div>
  );
}

export default GoogleDrive;