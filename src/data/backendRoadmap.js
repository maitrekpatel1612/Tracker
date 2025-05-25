// Backend Roadmap Data
export const backendRoadmapData = {
  'programming-basics': {
    name: 'Programming Fundamentals',
    topics: [
      {
        id: 'prog-1',
        title: 'Backend Languages',
        description: 'Choose and master a backend programming language',
        status: 'not-started',
        estimatedHours: 20,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'prog-1-1', title: 'JavaScript/Node.js', status: 'not-started', resources: ['https://nodejs.dev/learn'] },
          { id: 'prog-1-2', title: 'Python', status: 'not-started', resources: ['https://docs.python.org/3/tutorial/'] },
          { id: 'prog-1-3', title: 'Java', status: 'not-started', resources: ['https://dev.java/learn/'] },
          { id: 'prog-1-4', title: 'C#/.NET', status: 'not-started', resources: ['https://dotnet.microsoft.com/learn'] },
          { id: 'prog-1-5', title: 'PHP', status: 'not-started', resources: ['https://www.php.net/manual/en/intro-whatis.php'] },
          { id: 'prog-1-6', title: 'Go', status: 'not-started', resources: ['https://go.dev/doc/tutorial/getting-started'] },
          { id: 'prog-1-7', title: 'Ruby', status: 'not-started', resources: ['https://www.ruby-lang.org/en/documentation/quickstart/'] }
        ]
      },
      {
        id: 'prog-2',
        title: 'Data Structures & Algorithms',
        description: 'Fundamental concepts for efficient programming',
        status: 'not-started',
        estimatedHours: 15,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'prog-2-1', title: 'Arrays & Strings', status: 'not-started', resources: ['https://www.geeksforgeeks.org/array-data-structure/'] },
          { id: 'prog-2-2', title: 'Linked Lists', status: 'not-started', resources: ['https://www.geeksforgeeks.org/data-structures/linked-list/'] },
          { id: 'prog-2-3', title: 'Stacks & Queues', status: 'not-started', resources: ['https://www.geeksforgeeks.org/stack-data-structure/', 'https://www.geeksforgeeks.org/queue-data-structure/'] },
          { id: 'prog-2-4', title: 'Hash Tables', status: 'not-started', resources: ['https://www.geeksforgeeks.org/hashing-data-structure/'] },
          { id: 'prog-2-5', title: 'Trees & Graphs', status: 'not-started', resources: ['https://www.geeksforgeeks.org/binary-tree-data-structure/', 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/'] },
          { id: 'prog-2-6', title: 'Sorting & Searching', status: 'not-started', resources: ['https://www.geeksforgeeks.org/sorting-algorithms/'] },
          { id: 'prog-2-7', title: 'Dynamic Programming', status: 'not-started', resources: ['https://www.geeksforgeeks.org/dynamic-programming/'] },
          { id: 'prog-2-8', title: 'Big O Notation', status: 'not-started', resources: ['https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/'] }
        ]
      }
    ]
  },
  'databases': {
    name: 'Databases',
    topics: [
      {
        id: 'db-1',
        title: 'Relational Databases',
        description: 'Structured data storage and querying',
        status: 'not-started',
        estimatedHours: 10,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'db-1-1', title: 'SQL Basics', status: 'not-started', resources: ['https://www.w3schools.com/sql/'] },
          { id: 'db-1-2', title: 'MySQL', status: 'not-started', resources: ['https://dev.mysql.com/doc/refman/8.0/en/tutorial.html'] },
          { id: 'db-1-3', title: 'PostgreSQL', status: 'not-started', resources: ['https://www.postgresql.org/docs/current/tutorial.html'] },
          { id: 'db-1-4', title: 'Database Design & Normalization', status: 'not-started', resources: ['https://www.guru99.com/database-normalization.html'] },
          { id: 'db-1-5', title: 'Indexing & Performance', status: 'not-started', resources: ['https://use-the-index-luke.com/'] },
          { id: 'db-1-6', title: 'Transactions & ACID Properties', status: 'not-started', resources: ['https://www.geeksforgeeks.org/acid-properties-in-dbms/'] }
        ]
      },
      {
        id: 'db-2',
        title: 'NoSQL Databases',
        description: 'Non-relational database options',
        status: 'not-started',
        estimatedHours: 8,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'db-2-1', title: 'MongoDB', status: 'not-started', resources: ['https://docs.mongodb.com/manual/tutorial/'] },
          { id: 'db-2-2', title: 'Redis', status: 'not-started', resources: ['https://redis.io/documentation'] },
          { id: 'db-2-3', title: 'Cassandra', status: 'not-started', resources: ['https://cassandra.apache.org/doc/latest/cassandra/getting-started/index.html'] },
          { id: 'db-2-4', title: 'Firebase', status: 'not-started', resources: ['https://firebase.google.com/docs'] },
          { id: 'db-2-5', title: 'Document vs Key-Value vs Column', status: 'not-started', resources: ['https://www.mongodb.com/nosql-explained/nosql-vs-sql'] }
        ]
      }
    ]
  },
  'apis': {
    name: 'API Development',
    topics: [
      {
        id: 'api-1',
        title: 'RESTful APIs',
        description: 'Design and build RESTful web services',
        status: 'not-started',
        estimatedHours: 6,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'api-1-1', title: 'REST Principles', status: 'not-started', resources: ['https://restfulapi.net/'] },
          { id: 'api-1-2', title: 'HTTP Methods & Status Codes', status: 'not-started', resources: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods', 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status'] },
          { id: 'api-1-3', title: 'Authentication & Authorization', status: 'not-started', resources: ['https://auth0.com/blog/rest-api-authentication-best-practices/'] },
          { id: 'api-1-4', title: 'API Versioning', status: 'not-started', resources: ['https://restfulapi.net/versioning/'] },
          { id: 'api-1-5', title: 'Documentation (Swagger/OpenAPI)', status: 'not-started', resources: ['https://swagger.io/docs/specification/about/'] }
        ]
      }
    ]
  },
  'nodejs': {
    name: 'Node.js & Backend Essentials',
    topics: [
      {
        id: 'node-1',
        title: 'Starting with Node.js - The Beginning',
        description: 'Get started with Node.js, tools, and environment setup.',
        status: 'not-started',
        estimatedHours: 2,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'node-1-1', title: 'Introduction to Node.js and Getting Our Tools', status: 'not-started', resources: [] },
          { id: 'node-1-2', title: 'Setting up the Tools for our Environments', status: 'not-started', resources: [] },
          { id: 'node-1-3', title: 'Running script with nodejs - “Namaste Duniya”', status: 'not-started', resources: [] },
          { id: 'node-1-4', title: 'Understanding CommonJS vs ES6 Modules', status: 'not-started', resources: [] },
          { id: 'node-1-5', title: 'NPM Basics | Installing Packages', status: 'not-started', resources: [] },
          { id: 'node-1-6', title: 'Creating and Managing package.json', status: 'not-started', resources: [] },
          { id: 'node-1-7', title: 'Useful Core Modules (os, fs, path)', status: 'not-started', resources: [] },
          { id: 'node-1-8', title: 'Basic Terminal Commands and Working', status: 'not-started', resources: [] },
          { id: 'node-1-9', title: 'Understanding File System(fs) in Node.js', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'node-2',
        title: 'Creating Server - Writing Our First Server',
        description: 'Learn to create and run HTTP servers with Node.js.',
        status: 'not-started',
        estimatedHours: 2,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'node-2-1', title: 'What is Server and how it works?', status: 'not-started', resources: [] },
          { id: 'node-2-2', title: 'Setting Up Our First Node.js Server using HTTP', status: 'not-started', resources: [] },
          { id: 'node-2-3', title: 'Serving A Response to the Browser and Understanding Responses', status: 'not-started', resources: [] },
          { id: 'node-2-4', title: 'Serving First HTML Page Using Response', status: 'not-started', resources: [] },
          { id: 'node-2-5', title: 'Routing in HTTP Servers', status: 'not-started', resources: [] },
          { id: 'node-2-6', title: 'Understanding Status Code', status: 'not-started', resources: [] },
          { id: 'node-2-7', title: 'Installing Nodemon for Automatic Server Restarts', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'node-3',
        title: 'Some talk on Different Architectures',
        description: 'Explore backend architectures like MVC and SOA.',
        status: 'not-started',
        estimatedHours: 1,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'node-3-1', title: 'Different Architectures in backend like MVC and SOA', status: 'not-started', resources: [] },
          { id: 'node-3-2', title: 'Understanding MVC Architecture', status: 'not-started', resources: [] },
          { id: 'node-3-3', title: 'MVC in the context of REST APIs', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'node-4',
        title: 'Web Framework - Express.js',
        description: 'Learn Express.js and HTTP request handling.',
        status: 'not-started',
        estimatedHours: 2,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'node-4-1', title: 'What is Express.js and why to use it', status: 'not-started', resources: [] },
          { id: 'node-4-2', title: 'Setting Up Express Server', status: 'not-started', resources: [] },
          { id: 'node-4-3', title: 'Returning Response from the server', status: 'not-started', resources: [] },
          { id: 'node-4-4', title: 'Using Query Parameters and URL Parameters', status: 'not-started', resources: [] },
          { id: 'node-4-5', title: 'HTTP Request - Types of Requests', status: 'not-started', resources: [] },
          { id: 'node-4-6', title: 'Serving Static Files with express.static()', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'node-5',
        title: 'Template Engine - EJS',
        description: 'Work with EJS and template engines in Node.js.',
        status: 'not-started',
        estimatedHours: 1,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'node-5-1', title: 'What is Template Engine and What is the use of Template Engine', status: 'not-started', resources: [] },
          { id: 'node-5-2', title: 'Template Engine Option - Handlebars, EJS, Pug, jade', status: 'not-started', resources: [] },
          { id: 'node-5-3', title: 'Setting Up Template Engine - Installed EJS template engine', status: 'not-started', resources: [] },
          { id: 'node-5-4', title: 'Rendering Our First Page using EJS and Some important syntax', status: 'not-started', resources: [] },
          { id: 'node-5-5', title: 'Loop statement, Conditional statement and Locals in views - EJS', status: 'not-started', resources: [] },
          { id: 'node-5-6', title: 'Accessing the Static Files Inside EJS file', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'node-6',
        title: 'Middleware in Express.js',
        description: 'Understand and implement middleware in Express.js.',
        status: 'not-started',
        estimatedHours: 1,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'node-6-1', title: 'Understanding the middleware in express', status: 'not-started', resources: [] },
          { id: 'node-6-2', title: 'Implementing middleware with express', status: 'not-started', resources: [] },
          { id: 'node-6-3', title: 'Different types of middleware', status: 'not-started', resources: [] },
          { id: 'node-6-4', title: 'Different level of middleware', status: 'not-started', resources: [] },
          { id: 'node-6-5', title: 'Handeling Errors and Security with middleware', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'node-7',
        title: 'Handling file with Express',
        description: 'File uploads and static file handling in Express.',
        status: 'not-started',
        estimatedHours: 1,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'node-7-1', title: 'Understand Multer and its usecase', status: 'not-started', resources: [] },
          { id: 'node-7-2', title: 'Uploading file with multer', status: 'not-started', resources: [] },
          { id: 'node-7-3', title: 'Understanding Memory and Disk Storage', status: 'not-started', resources: [] },
          { id: 'node-7-4', title: 'Accessing uploaded file req.file', status: 'not-started', resources: [] },
          { id: 'node-7-5', title: 'Working with express.static', status: 'not-started', resources: [] },
          { id: 'node-7-6', title: 'Using Cloudinary or Imagekit for Real-time media processing', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'node-8',
        title: 'Beginning of Database Basics',
        description: 'Learn MongoDB, MySQL, and database relationships.',
        status: 'not-started',
        estimatedHours: 2,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'node-8-1', title: 'Relational and non-relational Databases : mongodb & mysql', status: 'not-started', resources: [] },
          { id: 'node-8-2', title: 'What is MongoDB? Why Use It?', status: 'not-started', resources: [] },
          { id: 'node-8-3', title: 'Installing Compass and Understand how to access DB using terminal', status: 'not-started', resources: [] },
          { id: 'node-8-4', title: 'Setting Up MongoDB Locally and in the Cloud', status: 'not-started', resources: [] },
          { id: 'node-8-5', title: 'Understanding Datatypes, Collections and Documents', status: 'not-started', resources: [] },
          { id: 'node-8-6', title: 'Connecting MongoDB to Node.js with Mongoose', status: 'not-started', resources: [] },
          { id: 'node-8-7', title: 'Database Relations', status: 'not-started', resources: [] },
          { id: 'node-8-8', title: 'Handling Relationships with Mongoose (populate)', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'node-9',
        title: 'API Development(REST)',
        description: 'Design and build RESTful APIs with Node.js.',
        status: 'not-started',
        estimatedHours: 2,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'node-9-1', title: 'What is a REST API?', status: 'not-started', resources: [] },
          { id: 'node-9-2', title: 'Designing RESTful APIs', status: 'not-started', resources: [] },
          { id: 'node-9-3', title: 'Understanding Stateless Communication', status: 'not-started', resources: [] },
          { id: 'node-9-4', title: 'Versioning in RESTful APIs', status: 'not-started', resources: [] },
          { id: 'node-9-5', title: 'Using Postman for API Testing and developing', status: 'not-started', resources: [] },
          { id: 'node-9-6', title: 'Understanding and Working With Status code', status: 'not-started', resources: [] },
          { id: 'node-9-7', title: 'Validating API Inputs Using libraries', status: 'not-started', resources: [] },
          { id: 'node-9-8', title: 'Security Handling - Rate Limiting, XSS, CSRF, DOS', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'node-10',
        title: 'Database Optimization for Fast response',
        description: 'Optimize MongoDB for performance and learn advanced features.',
        status: 'not-started',
        estimatedHours: 2,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'node-10-1', title: 'Indexing for Performance with MongoDB', status: 'not-started', resources: [] },
          { id: 'node-10-2', title: 'Best practice with Indexing explain()', status: 'not-started', resources: [] },
          { id: 'node-10-3', title: 'Learning MongoDB Aggregation', status: 'not-started', resources: [] },
          { id: 'node-10-4', title: 'Comparison Operators', status: 'not-started', resources: [] },
          { id: 'node-10-5', title: 'Logical Operators', status: 'not-started', resources: [] },
          { id: 'node-10-6', title: 'Array Operators', status: 'not-started', resources: [] },
          { id: 'node-10-7', title: 'Stages in Aggregation pipeline', status: 'not-started', resources: [] },
          { id: 'node-10-8', title: 'Creating Database on Local and Atlas', status: 'not-started', resources: [] },
          { id: 'node-10-9', title: 'Understanding concepts of Replication and Sharding', status: 'not-started', resources: [] },
          { id: 'node-10-10', title: 'Creating parallel pipeline with $facet', status: 'not-started', resources: [] },
          { id: 'node-10-11', title: 'Learning MongoDB Operators', status: 'not-started', resources: [] },
          { id: 'node-10-12', title: 'Understanding Different types of Operators', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'node-11',
        title: 'Logging Backend : Express.js',
        description: 'Set up logging and error handling in Express.js.',
        status: 'not-started',
        estimatedHours: 1,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'node-11-1', title: 'Why is Logging Important?', status: 'not-started', resources: [] },
          { id: 'node-11-2', title: 'Setting Up Logging with Libraries', status: 'not-started', resources: [] },
          { id: 'node-11-3', title: 'Different mode of morgan', status: 'not-started', resources: [] },
          { id: 'node-11-4', title: 'Error Handling and Logging', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'node-12',
        title: 'Production Wala Project Structure and Configuration',
        description: 'Learn project structure, configuration, and production best practices.',
        status: 'not-started',
        estimatedHours: 2,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'node-12-1', title: 'Understanding the Basic Structure of application', status: 'not-started', resources: [] },
          { id: 'node-12-2', title: 'Learning File Naming Conventions, Git Configuration', status: 'not-started', resources: [] },
          { id: 'node-12-3', title: 'Understanding Important Folders', status: 'not-started', resources: [] },
          { id: 'node-12-4', title: 'Role of package.json, ENV and .gitignore', status: 'not-started', resources: [] },
          { id: 'node-12-5', title: 'Production Environment - PM2, Error & Response Handling Configuration, CORS Configuration, async-handler.js', status: 'not-started', resources: [] },
          { id: 'node-12-6', title: 'Using and Configuring ESLint and Prettier for code formatting', status: 'not-started', resources: [] },
          { id: 'node-12-7', title: 'Testing APIs using Postman', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'node-13',
        title: 'Authentication and Authorization',
        description: 'Implement authentication, authorization, and security in Node.js.',
        status: 'not-started',
        estimatedHours: 2,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'node-13-1', title: 'Difference Between Authentication & Authorization', status: 'not-started', resources: [] },
          { id: 'node-13-2', title: 'Working with Passwords and Authentication', status: 'not-started', resources: [] },
          { id: 'node-13-3', title: 'Understanding Session and Token Authentication', status: 'not-started', resources: [] },
          { id: 'node-13-4', title: 'Implementing JWT Authentication', status: 'not-started', resources: [] },
          { id: 'node-13-5', title: 'Securing user password with bcrypt hashing salt', status: 'not-started', resources: [] },
          { id: 'node-13-6', title: 'Role-Based Access Control (RBAC)', status: 'not-started', resources: [] },
          { id: 'node-13-7', title: 'Authenticating user with Express middleware', status: 'not-started', resources: [] },
          { id: 'node-13-8', title: 'Understanding Passport.js and its usecase', status: 'not-started', resources: [] },
          { id: 'node-13-9', title: 'Setting up Passport.js', status: 'not-started', resources: [] },
          { id: 'node-13-10', title: 'express-sessions and using passport for authentication', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'node-14',
        title: 'Working Real time communication : WebSockets and socket.io',
        description: 'Learn real-time communication with WebSockets and socket.io.',
        status: 'not-started',
        estimatedHours: 1,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'node-14-1', title: 'Understanding WebSockets protocol for realtime applications', status: 'not-started', resources: [] },
          { id: 'node-14-2', title: 'Learning handshake, Persistent connection, Bidirectional communication, HTTP polling', status: 'not-started', resources: [] },
          { id: 'node-14-3', title: 'Understanding difference between WebSocket Vs Socket.io', status: 'not-started', resources: [] },
          { id: 'node-14-4', title: 'Working with socket.io for realtime applications', status: 'not-started', resources: [] },
          { id: 'node-14-5', title: 'Understanding usage of Rooms in Socket.io', status: 'not-started', resources: [] },
          { id: 'node-14-6', title: 'Understanding Middleware in Socket.io', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'node-15',
        title: 'Working With Caching - Local and Redis',
        description: 'Implement caching with Redis and local strategies.',
        status: 'not-started',
        estimatedHours: 1,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'node-15-1', title: 'What is Caching and How to cache data locally?', status: 'not-started', resources: [] },
          { id: 'node-15-2', title: 'What is Redis?', status: 'not-started', resources: [] },
          { id: 'node-15-3', title: 'Why Use Redis for Caching?', status: 'not-started', resources: [] },
          { id: 'node-15-4', title: 'Implementing Redis Caching in Node.js', status: 'not-started', resources: [] },
          { id: 'node-15-5', title: 'Advanced Redis Features', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'node-16',
        title: 'Error handling in express',
        description: 'Learn error handling strategies in Express.js.',
        status: 'not-started',
        estimatedHours: 1,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'node-16-1', title: 'Basic Error Handling in Express next()', status: 'not-started', resources: [] },
          { id: 'node-16-2', title: 'Catching Specific Errors try & catch', status: 'not-started', resources: [] },
          { id: 'node-16-3', title: 'Creating Util Class for Error Handling', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'node-17',
        title: 'Payment Gateway Integration with Razorpay',
        description: 'Integrate and manage payments with Razorpay.',
        status: 'not-started',
        estimatedHours: 1,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'node-17-1', title: 'Introduction to Payment Gateways and Razorpay', status: 'not-started', resources: [] },
          { id: 'node-17-2', title: 'Setting up Razorpay for your application', status: 'not-started', resources: [] },
          { id: 'node-17-3', title: 'Integrating Razorpay’s Checkout system', status: 'not-started', resources: [] },
          { id: 'node-17-4', title: 'Handling Payments: API Integration for Orders and Transactions', status: 'not-started', resources: [] },
          { id: 'node-17-5', title: 'Managing Webhooks for real-time payment status updates', status: 'not-started', resources: [] },
          { id: 'node-17-6', title: 'Ensuring Security and Best Practices for Payment Processing', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'node-18',
        title: 'Testing Tools',
        description: 'Learn about testing tools and strategies for backend apps.',
        status: 'not-started',
        estimatedHours: 1,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'node-18-1', title: 'Understanding Unit-Testing With Jest', status: 'not-started', resources: [] },
          { id: 'node-18-2', title: 'Cross Browser Testing and Why Is It Performed?', status: 'not-started', resources: [] },
          { id: 'node-18-3', title: 'What Is Web Testing? and How to Test a Website', status: 'not-started', resources: [] }
        ]
      }
    ]
  },
  'pwa': {
    name: 'Progressive Web App (PWA) Development',
    topics: [
      {
        id: 'pwa-1',
        title: 'Progressive Web App (PWA) Development',
        description: 'Learn about PWA, service workers, manifest, and performance.',
        status: 'not-started',
        estimatedHours: 2,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'pwa-1-1', title: 'Overview of Progressive Web Apps and their benefits', status: 'not-started', resources: [] },
          { id: 'pwa-1-2', title: 'Understanding Service Workers and their role in PWA', status: 'not-started', resources: [] },
          { id: 'pwa-1-3', title: 'Lifecycle of a Service Worker', status: 'not-started', resources: [] },
          { id: 'pwa-1-4', title: 'Understanding the Manifest File', status: 'not-started', resources: [] },
          { id: 'pwa-1-5', title: 'Creating a Manifest.json File', status: 'not-started', resources: [] },
          { id: 'pwa-1-6', title: 'Key Properties (name, short_name, icons, start_url, theme_color, background_color)', status: 'not-started', resources: [] },
          { id: 'pwa-1-7', title: 'Browser DevTools for PWA Debugging', status: 'not-started', resources: [] },
          { id: 'pwa-1-8', title: 'Implementing Lazy Loading and Code Splitting', status: 'not-started', resources: [] },
          { id: 'pwa-1-9', title: 'Exploring various testing techniques for PWAs', status: 'not-started', resources: [] },
          { id: 'pwa-1-10', title: 'Optimizing performance with advanced caching strategies', status: 'not-started', resources: [] }
        ]
      }
    ]
  },
  'microservices': {
    name: 'Building Microservices with Node.js',
    topics: [
      {
        id: 'ms-1',
        title: 'Building Microservices with Node.js',
        description: 'Learn microservices architecture, API gateway, and Docker.',
        status: 'not-started',
        estimatedHours: 2,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'ms-1-1', title: 'What are Microservices? Why Use Them?', status: 'not-started', resources: [] },
          { id: 'ms-1-2', title: 'Monolithic vs Microservices Architecture', status: 'not-started', resources: [] },
          { id: 'ms-1-3', title: 'Challenges of Microservices', status: 'not-started', resources: [] },
          { id: 'ms-1-4', title: 'Creating a Node.js Microservice', status: 'not-started', resources: [] },
          { id: 'ms-1-5', title: 'Designing a Microservice Architecture for a sample application', status: 'not-started', resources: [] },
          { id: 'ms-1-6', title: 'Role of package.json in Each Microservice', status: 'not-started', resources: [] },
          { id: 'ms-1-7', title: 'What is Inter-Service Communication?', status: 'not-started', resources: [] },
          { id: 'ms-1-8', title: 'Communication Patterns (Synchronous vs Asynchronous)', status: 'not-started', resources: [] },
          { id: 'ms-1-9', title: 'Role of an API Gateway in Microservices', status: 'not-started', resources: [] },
          { id: 'ms-1-10', title: 'Setting Up an API Gateway with Express.js', status: 'not-started', resources: [] },
          { id: 'ms-1-11', title: 'Microservices and Proxying Requests', status: 'not-started', resources: [] },
          { id: 'ms-1-12', title: 'Rate Limiting and Authentication in API Gateway', status: 'not-started', resources: [] },
          { id: 'ms-1-13', title: 'REST APIs for Communication', status: 'not-started', resources: [] },
          { id: 'ms-1-14', title: 'Understanding Message Brokers (e.g., Redis Pub/Sub)', status: 'not-started', resources: [] },
          { id: 'ms-1-15', title: 'Event-Driven Communication with Redis or RabbitMQ', status: 'not-started', resources: [] },
          { id: 'ms-1-16', title: 'OverView of Docker and Kubernetes', status: 'not-started', resources: [] },
          { id: 'ms-1-17', title: 'Using Docker for microservice', status: 'not-started', resources: [] }
        ]
      }
    ]
  }
};

export default backendRoadmapData;
