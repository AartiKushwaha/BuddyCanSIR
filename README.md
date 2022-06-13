# BuddyCanSIR
### To make you Self-reliant and Independent is our Responsibility

### 📌 Table of Contents
* [Toolchain](#toolchain)
* [Features](#features)
* [Application Overview](#overview)
* [Learnings](#learning)
* [Challenges faced](#challenges)
* [Future Scope/ What's next?](#scope)
* [Resources](#resources)
* [Setup](#setup)
* [Authors](#authors)
* [Bug Reporting](#bug)
* [Feature Requests](#feature-request)


<a id="toolchain"></a>
## 💻 Toolchain

<img alt="HTML" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/><img alt="CSS" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/><img alt="Javascript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/><img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"/><img alt="NodeJs" src="https://img.shields.io/badge/Node.js-%23000.svg?style=for-the-badge&logo=node.js&logoColor=white"/><img alt="MongoDb" src="https://img.shields.io/badge/MongoDB-%2307405e.svg?style=for-the-badge&logo=mongodb&logoColor=white" /><img alt="ExpressJs" src="https://img.shields.io/badge/Express.js-%23E34F26.svg?style=for-the-badge&logo=expressjs&logoColor=%23F7DF1E"/><img alt="React" src="https://img.shields.io/badge/React-0078d7.svg?style=for-the-badge&logo=react&logoColor=white"/><img alt="Git" src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"/>

***Frontend*** : HTML, CSS, JS, Bootstrap, React

***Backend*** : NodeJs, ExpressJs

***Database*** : MongoDb

***API/Clouds*** : Google Translate, Cloudinary, Twilio, MongoDb Atlas, EmailJs

***Other*** : Git - Version Control, Visual Studio Code


<a id="features"></a>
## 🚀 Features
- The portal has separate pages for admin and user login.
- Registered users can make requests for availing the services provided by the NGO.
- The administration will get notified of new requests generated via email/sms notifications.
- Users will get notification whether his/her request has been approved or denied and then can proceed to next step of uploading documents for verification.
- The documents will be transfered to the administration and user will be notified of approval/denial.
- The portal is multilingual so that the users across the country can easily access it.
- It is light weight and users can access it with limited internet connectivity.
- The portal can also be viewed in offline mode and gets updated as soon as internet connectivity is restored.
- Is fully responsive and works well with all screen sizes.
- The website also has a chatbot which assists the user in case of any difficulty.
- [Add more features](#feature-request)...

<a id="overview"></a>
## 📖 Application Overview
### Home Page
![Home Page1](https://user-images.githubusercontent.com/77791154/173409996-330f4b8c-b982-48f9-bead-dbef4be4bc80.png)
![Home Page2](https://user-images.githubusercontent.com/77791154/173410091-dd856669-f5f3-433c-980b-9b241eb81c6c.png)
![Chatbot](https://user-images.githubusercontent.com/77791154/173410243-0efbfce8-a207-4855-a599-82c496dd49ad.png)
### Login Page 
![Login Page](https://user-images.githubusercontent.com/77791154/173410313-81ccea8a-58dc-455e-9f4f-e5a033d2c64f.png)
### New user Registeration Page
![Register Page](https://user-images.githubusercontent.com/77791154/173410379-93d1794a-5f4d-4d61-9360-ea7a12dc0cae.png)
### Admin Page
![admin page](https://user-images.githubusercontent.com/77791154/173410488-cf908187-0d7a-40a9-8798-67e025794d26.png)
### Requests Page
![Request Page](https://user-images.githubusercontent.com/77791154/173410515-5d941c23-cdd7-4611-b839-93f1e80a553f.png)
### Profile Page
![Profile Page](https://user-images.githubusercontent.com/77791154/173410548-7e68168e-abbc-4c64-8788-09a7a470fdc2.png)

<a id="learning"></a>
## 💡 Learnings
- Enhancing designing and graphic skills by accomodating bootstrap library.
- Learning about using various APIs for sms/email notifications and google translate.
- Uploading images and documents to cloud and integrating it with database.
- Connecting various schemas under the database to frontend .

<a id="challenges"></a>
## 💡 Challenges faced
- Had technical setup issue while authenticating users and admin.
- Integrating simultaneous working of request and admin page and keeping track of the status of requests.
- Faced difficulty while integrating the sms/email notification facility for the user and admin.

<a id="scope"></a>
## 🚧 Future Scope/ What's next?
- [ ] Implementing push notification feature for users.
- [ ] Generating multiple requests per user.
- [ ] Customize chatbot according to the needs.
- [ ] Add donate option for government organizations to make donations.

<a id="resources"></a>
## 📚 Resources

- [HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JS Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Bootstrap Documentation](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
- [ReactJs Documentation](https://reactjs.org/docs/getting-started.html)
- [NodeJs Documentation](https://nodejs.dev/learn)
- [ExpressJs Documentation](https://expressjs.com/en/guide/routing.html)
- [MongoDb Documentation](https://www.mongodb.com/docs/atlas/getting-started/)
- [Cloudinary Documentation](https://cloudinary.com/documentation/image_video_and_file_upload)
- [Twilio Documentation](https://www.twilio.com/docs/messaging/twiml/message)


<a id="setup"></a>
## ⚙️ Set Up

Take These Steps to configure the Project :

* Clone The Repository by `git clone https://github.com/AartiKushwaha/BuddyCanSIR.git`.
* Install NodeJs from [Nodejs](https://nodejs.org/en/)
* Open the repo folder in VSCode or any other IDE.
* Run `npm install` in both backend and frontend folder.
* Go to package.json in frontend folder and add `"proxy":"http://localhost:5000/api/"`.
* Install the additional packages that show up in warning/errors by `npm i package-name`.
* Run `npm install` in terminal under both frontend and backend folders.



<a id="authors"></a>
## 💻 Authors

Contributors names and contact info :

[Punerva Singh](https://github.com/punervasingh)
<br>
[Aarti Kushwaha](https://github.com/AartiKushwaha)
<br>
[Shritul Tiwari](https://github.com/Shritul)
<br>
[Manisha Chaturvedi](https://github.com/manisha1904)
<br>
[Palak Chawla](https://github.com/PalakChaw)
<br>
[Prachi Aggarwal](https://github.com/prachi-io)
<br>

<a id="bug"></a>
## 🐛 Bug Reporting
Feel free to [open an issue](https://github.com/AartiKushwaha/BuddyCanSIR/issues) on GitHub if you find bugs.

<a id="feature-request"></a>
## ⭐ Feature Request
- Feel free to [open an issue](https://github.com/AartiKushwaha/BuddyCanSIR/issues) on GitHub to add any additional features you feel could enhance this project.  
