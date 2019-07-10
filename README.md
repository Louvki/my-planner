A React, Redux & Firebase App created for learning purposes.

To start the application run ``` npm install ``` and then``` npm start ```

  Allows the registration of users using email and firebase auth. 
  Registered users can create projects.
  Notifications about created projects and registered users are created using cloud functions.


To set up your own instance of firebase go to src/config/fbConfig and replace the configuration.

Current firestore security rule setup
```
service cloud.firestore {
  match /databases/{database}/documents {
    match /projects/{project} {
      allow read, write : if request.auth.uid != null
    }
    match /users/{userId} {
     allow create
      allow read: if request.auth.uid != null
      allow write: if request.auth.uid == userId
    }
      match /notifications/{notification} {
      allow read : if request.auth.uid != null
    }
  }
}
```
