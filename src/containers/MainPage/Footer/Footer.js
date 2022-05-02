import React, { useEffect, useState } from 'react'

const Footer = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{

    let contacts = ["J&W", "A&B", "C&D", "E&D", "C&K"];
    let dd = [
      { 
        "contact" : "J&W", 
        "items" : [
            {
                "code" : "Shirt", 
                "qty" : 6.0, 
                "unitprice" : 699.0, 
                "colorsize" : {
                    "red|S" : 1.0, 
                    "red|M" : 2.0, 
                    "red|L" : 3.0
                }
            }, 
            {
                "code" : "Hat", 
                "qty" : 6.0, 
                "unitprice" : 699.0, 
                "colorsize" : {
                    "brown|S" : 1.0, 
                    "brown|L" : 2.0
                }
            }
        ], 
        "amount" : 2000.0, 
        "current" : "HKD", 
        "nos" : "SC00001"
      },
      { 
          "contact" : "A&B", 
          "nos" : "sc00002", 
          "items" : [
              {
                  "code" : "Shirt", 
                  "qty" : 6.0, 
                  "unitprice" : 699.0, 
                  "colorsize" : {
                      "red|S" : 1.0, 
                      "red|M" : 2.0, 
                      "red|L" : 3.0
                  }
              }, 
              {
                  "code" : "Hat", 
                  "qty" : 6.0, 
                  "unitprice" : 699.0, 
                  "colorsize" : {
                      "brown|S" : 1.0, 
                      "brown|L" : 2.0
                  }
              }
          ], 
          "amount" : 2000.0, 
          "current" : "HKD"
      },
      { 
          "contact" : "E&D", 
          "nos" : "sc00003", 
          "items" : [
              {
                  "code" : "Shirt", 
                  "qty" : 6.0, 
                  "unitprice" : 699.0, 
                  "colorsize" : {
                      "red|S" : 1.0, 
                      "red|M" : 2.0, 
                      "red|L" : 3.0
                  }
              }, 
              {
                  "code" : "Hat", 
                  "qty" : 6.0, 
                  "unitprice" : 699.0, 
                  "colorsize" : {
                      "brown|S" : 1.0, 
                      "brown|L" : 2.0
                  }
              }
          ], 
          "amount" : 2000.0, 
          "current" : "HKD"
      },
      { 
          "contact" : "C&D", 
          "nos" : "sc00004", 
          "items" : [
              {
                  "code" : "Shirt", 
                  "qty" : 6.0, 
                  "unitprice" : 699.0, 
                  "colorsize" : {
                      "red|S" : 1.0, 
                      "red|M" : 2.0, 
                      "red|L" : 3.0
                  }
              }, 
              {
                  "code" : "Hat", 
                  "qty" : 6.0, 
                  "unitprice" : 699.0, 
                  "colorsize" : {
                      "brown|S" : 1.0, 
                      "brown|L" : 2.0
                  }
              }
          ], 
          "amount" : 2000.0, 
          "current" : "HKD"
      }
    ];

    // for(let x=2000; x<5000; x++){
    //   var c = contacts[Math.floor(Math.random()*contacts.length)];
    //   let cc = {};
    //   Object.assign(cc, dd[x-1]);
    //   cc.nos = "sc" + x + 1;
    //   cc.contact = c;
    //   dd.push(cc);
    // }

    // setData(dd);

  }, []);

  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default Footer