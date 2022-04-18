import React from 'react';

const Blogs = () => {
   return (
      <div className='mt-5 mb-5'>
         <div className='w-75 border border-secondary rounded mx-auto p-3 mt-3'>
            <h4>Difference between authorization and authentication?</h4>
            <p>Authentication is the act of validating that users are whom they claim to be. This is the first step in any security process. In some instances, systems require the successful verification of more than one factor before granting access. This multi-factor authentication requirement is often deployed to increase security beyond what passwords alone can provide.Authorization in system security is the process of giving the user permission to access a specific resource or function. This term is often used interchangeably with access control or client privilege.
               Giving someone permission to download a particular file on a server or providing individual users with administrative access to an application are good examples of authorization. <br />
               Despite the similar-sounding terms, authentication and authorization are separate steps in the login process. Understanding the difference between the two is key to successfully implementing an IAM solution.</p>
         </div>
         <div className='w-75 border border-secondary rounded mx-auto p-3 mt-3'>
            <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
            <p>Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.
               You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.
               As a Google Cloud service, it also gives you access to other Google products and features, like Google Drive and Sheets. For instance, you can import dummy data from Google Sheets and use it temporarily to serve your app. <br />
               <h6 className='mt-3'>Firebase Alternatives</h6>
               <ul>
                  <li>Back4App</li>
                  <li>AWS Amplify</li>
                  <li>Kuzzle</li>
                  <li>Couchbase</li>
                  <li>NativeScript</li>
                  <li>RxDB</li>
                  <li>Flutter</li>
               </ul>
            </p>
         </div>
         <div className='w-75 border border-secondary rounded mx-auto p-3 mt-3'>
            <h4>What other services does firebase provide other than authentication?</h4>
            <p>
               <ul>
                  <li>
                     Real-time Database
                  </li>
                  <li>
                     Cloud Firestore
                  </li>
                  <li>
                     Crashlytics
                  </li>
                  <li>
                     App Distribution
                  </li>
                  <li>
                     Test Lab
                  </li>
                  <li>
                     App Distribution
                  </li>
                  <li>
                     Cloud Messaging
                  </li>
                  <li>
                     In-App Messaging
                  </li>
               </ul>
            </p>
         </div>
      </div>
   );
};

export default Blogs;