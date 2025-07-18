[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<br />
<div align="center">
  <a href="https://github.com/ArmanKhanTech/Celestia/">
    <img src="https://github.com/ArmanKhanTech/Celestia/blob/master/Frontend/public/logo.png" alt="Logo" width="80" height="80" >
  </a>

  <h3 align="center">Celestia</h3>
  <p align="center">Status: Ongoing</p>
  <p align="center">A next-gen chat application.</p>

  <p align="center">
    <a href="https://github.com/ArmanKhanTech/Celestia"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/ArmanKhanTech/Celestia/issues">Report a Bug</a>
    · 
    <a href="https://github.com/ArmanKhanTech/Celestia/issues">Request new Feature</a>
  </p>
</div>
<br />



<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About the Project</a>
      <ul>
        <li><a href="#built-with">Built with</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
    <li><a href="#technical-description">Technical Description</a></li>
    <li><a href="#screenshots">Screenshots</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



## About the Project

Celestia is a modern real-time chat application built with microservices architecture. It supports 1:1 and group messaging, user profiles, real-time communication via WebSockets and Redis Pub/Sub, and a PostgreSQL-backed storage system. Firebase is used for profile media, and Nginx handles routing and gateway management. Currently under active development.


### Built with

* [![NextJS][nextjs]][NextJS-url]
* [![TailwindCSS][tailwindcss]][tailwindcss-url]
* [![NodeJS][nodejs]][nodejs-url]
* [![ExpressJS][expressjs]][expressjs-url]
* [![PostgreSQL][postgresql]][postgresql-url]
* [![Redis][redis]][redis-url]
* [![Firebase][firebase]][firebase-url]
* [![Nginx][Nginx]][Nginx-url]



## Getting Started

Follow the instructions below to get started.


### Prerequisites

<ol>
  <li>
    <p>NodeJS v21+</p>
  </li>
  <li>
    <p>PostgresSQL</p>
  </li>
  <li>
    <p>Redis</p>
  </li>
  <li>
    <p>nginx</p>
  </li>
 <li>
    <p>Firebase Account (Spark Plan)</p>
  </li>
 <li>
    <p>WSL (if developing on Windows)</p>
  </li>
</ol>



### Installation

1. Clone this repository
   
   ```sh
   git clone https://github.com/ArmanKhanTech/Celestia.git
   ```

2. Configure nginx by pasting [this](https://github.com/ArmanKhanTech/Celestia/blob/master/Backend/nginx.conf) file at `your-nginx-installation-path/conf`

3. Start PostgreSQL and Redis servers.

4. Additional Note: Redis isn't natively supported on Windows. You'll have to run it within WSL instead. Follow [this](https://redis.io/docs/latest/operate/oss_and_stack/install/archive/install-redis/install-redis-on-windows/) tutorial.

5. Import the PostgreSQL schema by executing the following command in your terminal:

      ```sh
      psql -U postgres -h localhost -p 5432 -W -d celestia -f schema.sql
      ```

6. Paste your own Firebase configs [here](https://github.com/ArmanKhanTech/Celestia/blob/master/Frontend/src/app/lib/firebase.ts) or just use mine instead.

7. Execute the following commands from the root dir of this project:

      ```js
      cd Frontend
      
      npm run start   // Start the NextJS Development Server
      
      cd ../Backend/User
      
      npm run start   // Start User Microservice
      
      cd ../Chat
      
      npm run start   // Start Chat Microservice
      
      cd ../Auth
      
      npm run start   // Start Auth Microservice
      ``` 

8. Finally, start the nginx web server by executing `start nginx`. (Note: `cd` into `your-nginx-installation-path` first in-case you haven't set the ENV for nginx yet.)
   

## Features

1. Authentication
2. Profile Customization: Name, PFP, etc
3. 1:1 Chatting
4. M:M Chatting (Groups)
5. User Lookup (Search users by their usernames)
6. E2EE (Pending)
7. Supported Message Format: Text Only
8. 15+ Themes


## Technical Description

1. Websockets for real-time, bi-directional communication.
2. Redis Pub/Sub for real-time chatting.
3. Firebase Storage for storing PFPs.
4. Firebase Authentication for authenticating users and automated session management.
5. PostgreSQL is used to store user info and conversations.
6. Microservices:
   <br>&emsp;a. Chat 
   <br>&emsp;b. Auth 
   <br>&emsp;c. User 
   <br>&emsp;d. Group (Pending)
7. Web Server & API Gateway: nginx
8. Tables:
   <br>&emsp;a. Users: uid, uname, name, email, date_join, is_active, last_seen, profile_pic_url, status
   <br>&emsp;b. Conversations: cid, participants 
   <br>&emsp;c. Messages: mid, cid, message, sender, sent_at, receiver, received_at, status 
   <br>&emsp;d. Groups: gid, cid, gname, members, desc, admins, created_at
   

## Screenshots


To be added soon



## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! 

Thanks again!



## License

Distributed under the MIT License. See `LICENSE` for more information.



## Contact

Arman Khan - ak2341776@gmail.com

Project Link - [https://github.com/ArmanKhanTech/Celestia](https://github.com/ArmanKhanTech/Celestia)



[contributors-shield]: https://img.shields.io/github/contributors/ArmanKhanTech/Celestia.svg?style=for-the-badge
[contributors-url]: https://github.com/ArmanKhanTech/Celestia/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ArmanKhanTech/Celestia.svg?style=for-the-badge
[forks-url]: https://github.com/ArmanKhanTech/Celestia/network/members
[stars-shield]: https://img.shields.io/github/stars/ArmanKhanTech/Celestia.svg?style=for-the-badge
[stars-url]: https://github.com/ArmanKhanTech/Celestia/stargazers
[issues-shield]: https://img.shields.io/github/issues/ArmanKhanTech/Celestia.svg?style=for-the-badge
[issues-url]: https://github.com/ArmanKhanTech/Celestia/issues
[license-shield]: https://img.shields.io/github/license/ArmanKhanTech/Celestia.svg?style=for-the-badge
[license-url]: https://github.com/ArmanKhanTech/Celestia/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&Screenshot=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/arman-khan-25b624205/
[nodejs]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[nodejs-url]: https://nodejs.org/en
[nextjs]: https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white
[nextjs-url]: https://nextjs.org/
[redis]: https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white
[redis-url]: https://nodejs.org/en
[nginx]: https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white
[nginx-url]: https://nginx.org/
[firebase]: https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34
[firebase-url]: https://firebase.google.com/
[postgresql]: https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
[postgresql-url]: https://www.postgresql.org/
[tailwindcss]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[tailwindcss-url]: https://tailwindcss.com/
[expressjs]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[expressjs-url]: https://expressjs.com/
