import { useState, useEffect } from 'react';
import SummaryBlock from './SummaryBlock';
import StorageBlock from './StorageBlock';

import {
  VideoIcon,
  PDFIcon,
  ZipIcon,
  ImageIcon,
} from "./Icons";

const DriveSummary = ({ gapi, ...props }) => {

  gapi = gapi || window.gapi;

  const [reload, setReload] = useState(false);
  const [summary, setSummary] = useState([]);
  const [result, setResult] = useState([]);
  const [storageQuota, setStorageQuota] = useState({});
  const [status, setStatus] = useState('Starting');

  useEffect(() => {
    getStatus();
    getAllFile();
  }, []);

  const getAllFile = async () => {
    var user = (gapi.auth2.getAuthInstance().currentUser.get())
    var profile = user.getBasicProfile()
    var auth = (user.getAuthResponse())
    var AUTH_TOKEN = auth.access_token

    var headers = {
      Authorization: 'Bearer ' + AUTH_TOKEN
    }
    var conditions = []
    //conditions.push("mimeType = 'application/vnd.google-apps.folder'")
    conditions.push("'root' in parents")
    conditions.push("mimeType='image'")
    var query = encodeURIComponent(conditions.join(" and "))
    var url = "https://www.googleapis.com/drive/v3/files?fields=files(mimeType,id,name,size,parents)"
    //var url = "https://www.googleapis.com/drive/v3/files?q="+query+"&fields=files(mimeType,name)&pageSize=1000"
    //url = 'response.json'
    setStatus('Queuing');
    fetch(url, { method: 'GET', headers, })
      .then(response => response.json())
      .then(data => {
        setStatus('Success');
        console.log('summary fetched', data);
        setResult(data);
        if (data.files) {
          const files = data.files;
          let countSummary = {};
          let fileSummary = {
            'Image': { 'size': 0, 'count': 0, 'icon': <ImageIcon /> },
            'Video': { 'size': 0, 'count': 0, 'icon': <VideoIcon /> },
            'Document': { 'size': 0, 'count': 0, 'icon': <ImageIcon /> },
            'PDF': { 'size': 0, 'count': 0, 'icon': <PDFIcon /> },
            'Unkown': { 'size': 0, 'count': 0, 'icon': <ImageIcon /> }
          };
          files.map((file) => {
            if (file.mimeType === "application/vnd.google-apps.folder") {
              countSummary['folder_count']++;
            } else {
              countSummary['file_count']++;
              if (file.mimeType.indexOf("image") == 0) {
                fileSummary['Image']['size'] *= 1;
                fileSummary['Image']['size'] += parseInt(file.size);
                fileSummary['Image']['count']++;
              }
              else if (
                file.mimeType.indexOf("application/pdf") === 0
              ) {
                fileSummary['PDF']['size'] *= 1;
                fileSummary['PDF']['size'] += parseInt(file.size);
                fileSummary['PDF']['count']++;
              } else if (
                file.mimeType.indexOf("application/doc") === 0
                || file.mimeType.indexOf("application/excel") === 0
              ) {
                fileSummary['Document']['size'] *= 1;
                fileSummary['Document']['size'] += parseInt(file.size);
                fileSummary['Document']['count']++;
              }
              else if (
                file.mimeType.indexOf("application/avi") === 0
                || file.mimeType.indexOf("application/mpg") === 0
                || file.mimeType.indexOf("application/mp4") === 0
              ) {
                fileSummary['Video']['size'] *= 1;
                fileSummary['Video']['size'] += parseInt(file.size);
                fileSummary['Video']['count']++;
              } else {
                fileSummary['Unkown']['size'] *= 1;
                fileSummary['Unkown']['size'] += parseInt(file.size);
                fileSummary['Unkown']['count']++;
              }
            }
          });
          //console.log(fileSummary);
          const Summary = [];
          for (var type in fileSummary) {
            const hash = {
              'name': type,
              'size': fileSummary[type]['size'],
              'icon': fileSummary[type]['icon'],
              'count': fileSummary[type]['count'],
            };
            //console.log(hash);
            Summary.push(hash);
          }
          setSummary(Summary);
        }
        // this.setState({ loading: false })
      }).catch((err) => {
        setStatus('Fail ' + err);
      });
  }

  const getStatus = async () => {
    var user = (gapi.auth2.getAuthInstance().currentUser.get())
    var profile = user.getBasicProfile()
    var auth = (user.getAuthResponse())
    var AUTH_TOKEN = auth.access_token

    var headers = {
      Authorization: 'Bearer ' + AUTH_TOKEN
    }

    var conditions = []
    conditions.push("'root' in parents")
    conditions.push("mimeType='image'")
    var query = encodeURIComponent(conditions.join(" and "))
    var url = "https://www.googleapis.com/drive/v3/about?fields=storageQuota"
    fetch(url, { method: 'GET', headers, })
      .then(response => response.json())
      .then(data => {
        setStorageQuota({
          limit: data.storageQuota.limit,
          used: data.storageQuota.usage,
          trash: data.storageQuota.usageInDriveTrash,
        });
        console.log('getStatus fetched', data);
      }).catch((err) => {
        console.log('getStatus fetched', err);
      });
  }

  return (
    <>
      <StorageBlock data={storageQuota} />
      <SummaryBlock data={{ title: 'All Types', data: summary }} />
    </>
  )

}
export default DriveSummary;
