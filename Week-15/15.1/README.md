# Twitter HLD

---

**Functional Requirements:**

- Tweet
- Retweet
- Follow
- Search
- Timelines

---

**Non-functional Requirements:**

- Read fast- Twitter has more read traffic than write traffic
- Fast rendering of tweets
- Fast tweeting - some tweet lag is acceptable, for instance, tweets loading a few seconds after being tweeted
- Low latency

---

**Traffic estimation:**

- 200 million daily active users (reads)-

  - each user reads 100 tweets per day on an average
  - 20 billion tweets read per day
  - average size of 1 tweet is 1MB(on character tweeta maybe in KBs, but averaging with ones with photos/videos)
  - 20 PB of tweets per day

- 200 million daily active users (writes)-
  - average of 500 million tweets per daily
  - 5700 tweets per second or upto 12000 tweets per second at peakload

---

---

---

---

---

---

**Architecture:**

- 3-tier architecture with Load Balancers, User Services, Graph Services, User Live Websockets, and Analytics Services
- User Database: MySQL
- Caching: Redis
- Message Streaming: Kafka

---

User-Onboarding and Login:

- Login page for users to access the platform
- User-onboarding process to be completed by the user

---

User-Follow:

- Ability for users to follow other users

---

User-App/Website:

- User interface on the web and mobile app for users to access the platform
- Performance optimization for different browsers and devices
- Integration with APIs and services of third-party platforms
- Security measures for user data

---

Load Balancers:

- Traffic routing and balancing for the different services
- Connection pooling for incoming requests
- Load testing for handling large traffic

---

User Services:

- Authentication and authorization of user accounts
- Managing user profiles and settings
- Integration with other user services

---

Graph Services:

- Handling user relationships, likes, and comments
- Integration with other graph services

---

User Live Websockets:

- Real-time communication between users
- Data synchronization between web and mobile app

---

Analytics Services:

- Data collection and analysis for user engagement
- Generation of insights
- Integration with other analytics services
- Reporting and visualization of analytics data

---

**HLD**
![](./Assets/HLD.jpg)
