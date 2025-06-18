//  Backend Roadmap Data
// Backend Roadmap Data with Complete Resources
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
          { id: 'prog-1-1', title: 'JavaScript/Node.js', status: 'not-started', resources: ['https://nodejs.dev/learn', 'https://www.freecodecamp.org/news/the-definitive-node-js-handbook-6912378afc6e/', 'https://nodejs.org/en/docs/guides/', 'https://www.youtube.com/watch?v=TlB_eWDSMt4', 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs'] },
          { id: 'prog-1-2', title: 'Python', status: 'not-started', resources: ['https://docs.python.org/3/tutorial/', 'https://www.learnpython.org/', 'https://realpython.com/', 'https://automatetheboringstuff.com/', 'https://www.codecademy.com/learn/learn-python-3'] },
          { id: 'prog-1-3', title: 'Java', status: 'not-started', resources: ['https://dev.java/learn/', 'https://docs.oracle.com/javase/tutorial/', 'https://www.codecademy.com/learn/learn-java', 'https://www.geeksforgeeks.org/java/', 'https://spring.io/guides'] },
          { id: 'prog-1-4', title: 'C#/.NET', status: 'not-started', resources: ['https://dotnet.microsoft.com/learn', 'https://docs.microsoft.com/en-us/dotnet/', 'https://www.codecademy.com/learn/learn-c-sharp', 'https://www.tutorialspoint.com/csharp/', 'https://channel9.msdn.com/Series/CSharp-Fundamentals-for-Absolute-Beginners'] },
          { id: 'prog-1-5', title: 'PHP', status: 'not-started', resources: ['https://www.php.net/manual/en/intro-whatis.php', 'https://www.w3schools.com/php/', 'https://phptherightway.com/', 'https://laracasts.com/series/php-for-beginners', 'https://www.codecademy.com/learn/learn-php'] },
          { id: 'prog-1-6', title: 'Go', status: 'not-started', resources: ['https://go.dev/doc/tutorial/getting-started', 'https://tour.golang.org/', 'https://gobyexample.com/', 'https://www.golang-book.com/books/intro', 'https://www.codecademy.com/learn/learn-go'] },
          { id: 'prog-1-7', title: 'Ruby', status: 'not-started', resources: ['https://www.ruby-lang.org/en/documentation/quickstart/', 'https://www.codecademy.com/learn/learn-ruby', 'https://rubykoans.com/', 'https://guides.rubyonrails.org/', 'https://www.tutorialspoint.com/ruby/'] }
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
          { id: 'prog-2-1', title: 'Arrays & Strings', status: 'not-started', resources: ['https://www.geeksforgeeks.org/array-data-structure/', 'https://leetcode.com/explore/learn/card/array-and-string/', 'https://www.hackerrank.com/domains/data-structures', 'https://www.coursera.org/learn/data-structures', 'https://visualgo.net/en/array'] },
          { id: 'prog-2-2', title: 'Linked Lists', status: 'not-started', resources: ['https://www.geeksforgeeks.org/data-structures/linked-list/', 'https://leetcode.com/explore/learn/card/linked-list/', 'https://visualgo.net/en/list', 'https://www.hackerrank.com/domains/data-structures', 'https://www.programiz.com/dsa/linked-list'] },
          { id: 'prog-2-3', title: 'Stacks & Queues', status: 'not-started', resources: ['https://www.geeksforgeeks.org/stack-data-structure/', 'https://www.geeksforgeeks.org/queue-data-structure/', 'https://leetcode.com/explore/learn/card/queue-stack/', 'https://visualgo.net/en/list', 'https://www.programiz.com/dsa/stack'] },
          { id: 'prog-2-4', title: 'Hash Tables', status: 'not-started', resources: ['https://www.geeksforgeeks.org/hashing-data-structure/', 'https://leetcode.com/explore/learn/card/hash-table/', 'https://visualgo.net/en/hashtable', 'https://www.hackerrank.com/domains/data-structures', 'https://www.programiz.com/dsa/hash-table'] },
          { id: 'prog-2-5', title: 'Trees & Graphs', status: 'not-started', resources: ['https://www.geeksforgeeks.org/binary-tree-data-structure/', 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/', 'https://leetcode.com/explore/learn/card/data-structure-tree/', 'https://visualgo.net/en/bst', 'https://www.programiz.com/dsa/trees'] },
          { id: 'prog-2-6', title: 'Sorting & Searching', status: 'not-started', resources: ['https://www.geeksforgeeks.org/sorting-algorithms/', 'https://visualgo.net/en/sorting', 'https://leetcode.com/explore/learn/card/sorting/', 'https://www.hackerrank.com/domains/algorithms', 'https://www.programiz.com/dsa/sorting-algorithm'] },
          { id: 'prog-2-7', title: 'Dynamic Programming', status: 'not-started', resources: ['https://www.geeksforgeeks.org/dynamic-programming/', 'https://leetcode.com/explore/learn/card/dynamic-programming/', 'https://www.hackerrank.com/domains/algorithms', 'https://www.topcoder.com/community/competitive-programming/tutorials/dynamic-programming-from-novice-to-advanced/', 'https://www.programiz.com/dsa/dynamic-programming'] },
          { id: 'prog-2-8', title: 'Big O Notation', status: 'not-started', resources: ['https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/', 'https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-o-notation', 'https://www.geeksforgeeks.org/analysis-algorithms-big-o-analysis/', 'https://www.coursera.org/learn/algorithms-part1', 'https://bigocheatsheet.com/'] }
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
          { id: 'db-1-1', title: 'SQL Basics', status: 'not-started', resources: ['https://www.w3schools.com/sql/', 'https://www.codecademy.com/learn/learn-sql', 'https://sqlbolt.com/', 'https://www.khanacademy.org/computing/computer-programming/sql', 'https://mode.com/sql-tutorial/'] },
          { id: 'db-1-2', title: 'MySQL', status: 'not-started', resources: ['https://dev.mysql.com/doc/refman/8.0/en/tutorial.html', 'https://www.mysqltutorial.org/', 'https://www.w3schools.com/mysql/', 'https://www.codecademy.com/learn/learn-sql', 'https://mysql.com/why-mysql/'] },
          { id: 'db-1-3', title: 'PostgreSQL', status: 'not-started', resources: ['https://www.postgresql.org/docs/current/tutorial.html', 'https://www.postgresqltutorial.com/', 'https://www.codecademy.com/learn/learn-sql', 'https://www.freecodecamp.org/news/postgresql-full-course/', 'https://pgexercises.com/'] },
          { id: 'db-1-4', title: 'Database Design & Normalization', status: 'not-started', resources: ['https://www.guru99.com/database-normalization.html', 'https://www.geeksforgeeks.org/database-normalization-normal-forms/', 'https://www.studytonight.com/dbms/database-normalization.php', 'https://www.tutorialspoint.com/dbms/database_normalization.htm', 'https://www.ibm.com/topics/database-normalization'] },
          { id: 'db-1-5', title: 'Indexing & Performance', status: 'not-started', resources: ['https://use-the-index-luke.com/', 'https://www.postgresql.org/docs/current/indexes.html', 'https://dev.mysql.com/doc/refman/8.0/en/optimization-indexes.html', 'https://www.geeksforgeeks.org/indexing-in-databases-set-1/', 'https://www.tutorialspoint.com/dbms/dbms_indexing.htm'] },
          { id: 'db-1-6', title: 'Transactions & ACID Properties', status: 'not-started', resources: ['https://www.geeksforgeeks.org/acid-properties-in-dbms/', 'https://www.tutorialspoint.com/dbms/dbms_transaction.htm', 'https://www.postgresql.org/docs/current/tutorial-transactions.html', 'https://dev.mysql.com/doc/refman/8.0/en/mysql-acid.html', 'https://www.ibm.com/topics/acid-properties'] }
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
          { id: 'db-2-1', title: 'MongoDB', status: 'not-started', resources: ['https://docs.mongodb.com/manual/tutorial/', 'https://university.mongodb.com/', 'https://www.codecademy.com/learn/learn-mongodb', 'https://www.tutorialspoint.com/mongodb/', 'https://www.freecodecamp.org/news/mongodb-tutorial/'] },
          { id: 'db-2-2', title: 'Redis', status: 'not-started', resources: ['https://redis.io/documentation', 'https://try.redis.io/', 'https://www.tutorialspoint.com/redis/', 'https://redislabs.com/redis-best-practices/', 'https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-redis-on-ubuntu-20-04'] },
          { id: 'db-2-3', title: 'Cassandra', status: 'not-started', resources: ['https://cassandra.apache.org/doc/latest/cassandra/getting-started/index.html', 'https://university.datastax.com/', 'https://www.tutorialspoint.com/cassandra/', 'https://www.geeksforgeeks.org/introduction-to-apache-cassandra/', 'https://docs.datastax.com/en/cassandra-oss/3.0/'] },
          { id: 'db-2-4', title: 'Firebase', status: 'not-started', resources: ['https://firebase.google.com/docs', 'https://firebase.google.com/docs/firestore', 'https://www.youtube.com/playlist?list=PLl-K7zZEsYLluG5MCVEzXAQ7ACZBCuZgZ', 'https://www.freecodecamp.org/news/firebase-firestore-tutorial/', 'https://www.tutorialspoint.com/firebase/'] },
          { id: 'db-2-5', title: 'Document vs Key-Value vs Column', status: 'not-started', resources: ['https://www.mongodb.com/nosql-explained/nosql-vs-sql', 'https://www.geeksforgeeks.org/types-of-nosql-databases/', 'https://www.tutorialspoint.com/dbms/nosql.htm', 'https://www.ibm.com/cloud/learn/nosql-databases', 'https://blog.couchbase.com/nosql-database-types/'] }
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
          { id: 'api-1-1', title: 'REST Principles', status: 'not-started', resources: ['https://restfulapi.net/', 'https://www.redhat.com/en/topics/api/what-is-a-rest-api', 'https://www.codecademy.com/article/what-is-rest', 'https://medium.com/@stsonushubham/understanding-rest-architectural-style-6da77cfdc9e4', 'https://www.tutorialspoint.com/restful/'] },
          { id: 'api-1-2', title: 'HTTP Methods & Status Codes', status: 'not-started', resources: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods', 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status', 'https://httpstatuses.com/', 'https://www.restapitutorial.com/httpstatuscodes.html', 'https://www.w3schools.com/tags/ref_httpmessages.asp'] },
          { id: 'api-1-3', title: 'Authentication & Authorization', status: 'not-started', resources: ['https://auth0.com/blog/rest-api-authentication-best-practices/', 'https://blog.restcase.com/4-most-used-rest-api-authentication-methods/', 'https://www.okta.com/identity-101/authentication-vs-authorization/', 'https://nordicapis.com/authentication-vs-authorization/', 'https://medium.com/@sherryhsu/session-vs-token-based-authentication-11a6c5ac45e4'] },
          { id: 'api-1-4', title: 'API Versioning', status: 'not-started', resources: ['https://restfulapi.net/versioning/', 'https://www.freecodecamp.org/news/how-to-version-a-rest-api/', 'https://blog.postman.com/api-versioning-best-practices/', 'https://nordicapis.com/api-versioning-methods-a-brief-reference/', 'https://medium.com/@mwaysolutions/api-versioning-strategies-2e4dcf0b35b8'] },
          { id: 'api-1-5', title: 'Documentation (Swagger/OpenAPI)', status: 'not-started', resources: ['https://swagger.io/docs/specification/about/', 'https://www.openapis.org/', 'https://swagger.io/tools/swagger-ui/', 'https://blog.postman.com/intro-to-apis-what-is-swagger/', 'https://nordicapis.com/top-specification-formats-for-rest-apis/'] }
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
          { id: 'node-1-1', title: 'Introduction to Node.js and Getting Our Tools', status: 'not-started', resources: ['https://nodejs.org/en/about/', 'https://nodejs.dev/learn/introduction-to-nodejs', 'https://www.freecodecamp.org/news/what-exactly-is-node-js-ae36e97449f5/', 'https://www.youtube.com/watch?v=TlB_eWDSMt4', 'https://www.w3schools.com/nodejs/nodejs_intro.asp'] },
          { id: 'node-1-2', title: 'Setting up the Tools for our Environments', status: 'not-started', resources: ['https://nodejs.org/en/download/', 'https://code.visualstudio.com/docs/nodejs/nodejs-tutorial', 'https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04', 'https://github.com/nvm-sh/nvm', 'https://nodejs.dev/learn/how-to-install-nodejs'] },
          { id: 'node-1-3', title: 'Running script with nodejs - "Namaste Duniya"', status: 'not-started', resources: ['https://nodejs.dev/learn/run-nodejs-scripts-from-the-command-line', 'https://www.freecodecamp.org/news/how-to-create-and-run-node-js-scripts/', 'https://www.tutorialspoint.com/nodejs/nodejs_first_application.htm', 'https://www.geeksforgeeks.org/nodejs-first-hello-world-application/', 'https://medium.com/@adnanrahic/hello-world-app-with-node-js-and-express-c1eb7cfa8a30'] },
          { id: 'node-1-4', title: 'Understanding CommonJS vs ES6 Modules', status: 'not-started', resources: ['https://nodejs.org/api/esm.html', 'https://blog.logrocket.com/commonjs-vs-es-modules-node-js/', 'https://www.freecodecamp.org/news/modules-in-javascript/', 'https://nodejs.dev/learn/differences-between-nodejs-and-the-browser', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules'] },
          { id: 'node-1-5', title: 'NPM Basics | Installing Packages', status: 'not-started', resources: ['https://docs.npmjs.com/about-npm', 'https://www.freecodecamp.org/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/', 'https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager', 'https://www.tutorialspoint.com/nodejs/nodejs_npm.htm', 'https://www.geeksforgeeks.org/node-js-npm-node-package-manager/'] },
          { id: 'node-1-6', title: 'Creating and Managing package.json', status: 'not-started', resources: ['https://docs.npmjs.com/creating-a-package-json-file', 'https://nodejs.dev/learn/the-package-json-guide', 'https://www.freecodecamp.org/news/what-is-the-package-json-file/', 'https://www.tutorialspoint.com/nodejs/nodejs_package_json.htm', 'https://heynode.com/tutorial/what-packagejson-file/'] },
          { id: 'node-1-7', title: 'Useful Core Modules (os, fs, path)', status: 'not-started', resources: ['https://nodejs.org/api/fs.html', 'https://nodejs.org/api/path.html', 'https://nodejs.org/api/os.html', 'https://www.tutorialspoint.com/nodejs/nodejs_file_system.htm', 'https://www.geeksforgeeks.org/node-js-file-system/'] },
          { id: 'node-1-8', title: 'Basic Terminal Commands and Working', status: 'not-started', resources: ['https://www.freecodecamp.org/news/command-line-for-beginners/', 'https://www.codecademy.com/learn/learn-the-command-line', 'https://www.digitalocean.com/community/tutorials/an-introduction-to-the-linux-terminal', 'https://linuxcommand.org/lc3_learning_the_shell.php', 'https://www.tutorialspoint.com/unix_commands/index.htm'] },
          { id: 'node-1-9', title: 'Understanding File System(fs) in Node.js', status: 'not-started', resources: ['https://nodejs.org/api/fs.html', 'https://www.tutorialspoint.com/nodejs/nodejs_file_system.htm', 'https://www.geeksforgeeks.org/node-js-file-system/', 'https://nodejs.dev/learn/the-nodejs-fs-module', 'https://www.freecodecamp.org/news/node-js-file-system-module-explained/'] }
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
          { id: 'node-2-1', title: 'What is Server and how it works?', status: 'not-started', resources: ['https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server', 'https://www.tutorialspoint.com/internet_technologies/web_servers.htm', 'https://www.geeksforgeeks.org/web-server-and-its-type/', 'https://www.cloudflare.com/learning/serverless/glossary/what-is-a-server/', 'https://www.freecodecamp.org/news/what-is-a-server-types-of-servers/'] },
          { id: 'node-2-2', title: 'Setting Up Our First Node.js Server using HTTP', status: 'not-started', resources: ['https://nodejs.org/api/http.html', 'https://nodejs.dev/learn/build-an-http-server', 'https://www.tutorialspoint.com/nodejs/nodejs_web_server.htm', 'https://www.geeksforgeeks.org/node-js-http-module/', 'https://www.freecodecamp.org/news/how-to-create-a-server-in-node-js/'] },
          { id: 'node-2-3', title: 'Serving A Response to the Browser and Understanding Responses', status: 'not-started', resources: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages', 'https://nodejs.org/api/http.html#http_class_http_serverresponse', 'https://www.tutorialspoint.com/nodejs/nodejs_response_object.htm', 'https://www.geeksforgeeks.org/node-js-response-object/', 'https://nodejs.dev/learn/get-http-request-body-data-using-nodejs'] },
          { id: 'node-2-4', title: 'Serving First HTML Page Using Response', status: 'not-started', resources: ['https://nodejs.dev/learn/serve-html-pages-with-nodejs', 'https://www.tutorialspoint.com/nodejs/nodejs_web_server.htm', 'https://www.geeksforgeeks.org/how-to-serve-html-and-css-files-using-express-js/', 'https://medium.com/@adnanrahic/hello-world-app-with-node-js-and-express-c1eb7cfa8a30', 'https://www.freecodecamp.org/news/build-a-simple-http-server-with-nodejs/'] },
          { id: 'node-2-5', title: 'Routing in HTTP Servers', status: 'not-started', resources: ['https://nodejs.dev/learn/routes-in-nodejs', 'https://www.tutorialspoint.com/nodejs/nodejs_routing.htm', 'https://www.geeksforgeeks.org/routing-in-node-js/', 'https://medium.com/@ericnograles/basic-routing-in-node-js-with-the-http-module-d61c8c50ba8', 'https://blog.logrocket.com/creating-a-crud-api-with-node-express-and-grpc/'] },
          { id: 'node-2-6', title: 'Understanding Status Code', status: 'not-started', resources: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status', 'https://httpstatuses.com/', 'https://www.restapitutorial.com/httpstatuscodes.html', 'https://www.tutorialspoint.com/http/http_status_codes.htm', 'https://www.geeksforgeeks.org/http-status-codes/'] },
          { id: 'node-2-7', title: 'Installing Nodemon for Automatic Server Restarts', status: 'not-started', resources: ['https://nodemon.io/', 'https://www.npmjs.com/package/nodemon', 'https://www.freecodecamp.org/news/how-to-install-nodemon/', 'https://www.geeksforgeeks.org/node-js-nodemon-module/', 'https://medium.com/@adnanrahic/how-to-use-nodemon-to-restart-your-node-js-server-automatically-8b2e7c4c6be'] }
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
          { id: 'node-3-1', title: 'Different Architectures in backend like MVC and SOA', status: 'not-started', resources: ['https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm', 'https://www.geeksforgeeks.org/mvc-design-pattern/', 'https://medium.com/@bansalshubham/understanding-mvc-architecture-in-node-js-87bc6b5de09c', 'https://developer.mozilla.org/en-US/docs/Glossary/MVC', 'https://www.freecodecamp.org/news/model-view-controller-mvc-explained-through-ordering-drinks-at-the-bar/'] },
          { id: 'node-3-2', title: 'Understanding MVC Architecture', status: 'not-started', resources: ['https://www.codecademy.com/article/mvc', 'https://www.tutorialspoint.com/design_pattern/mvc_pattern.htm', 'https://blog.codinghorror.com/understanding-model-view-controller/', 'https://www.geeksforgeeks.org/benefit-of-using-mvc/', 'https://medium.com/@ankit.sinhal/mvc-architecture-in-node-js-eb0d460c7e4a'] },
          { id: 'node-3-3', title: 'MVC in the context of REST APIs', status: 'not-started', resources: ['https://medium.com/@ericnograles/restful-api-design-step-by-step-guide-2f2084b02f6e', 'https://blog.logrocket.com/organizing-express-js-project-structure-better-productivity/', 'https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/', 'https://scotch.io/tutorials/keeping-api-routing-clean-using-express-routers', 'https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm'] }
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
          { id: 'node-4-1', title: 'What is Express.js and why to use it', status: 'not-started', resources: ['https://expressjs.com/', 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction', 'https://www.tutorialspoint.com/expressjs/expressjs_overview.htm', 'https://www.geeksforgeeks.org/express-js/', 'https://www.freecodecamp.org/news/express-js-fundamentals/'] },
          { id: 'node-4-2', title: 'Setting Up Express Server', status: 'not-started', resources: ['https://expressjs.com/en/starter/installing.html', 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction', 'https://www.tutorialspoint.com/expressjs/expressjs_first_application.htm', 'https://www.geeksforgeeks.org/express-js-introduction/', 'https://www.freecodecamp.org/news/how-to-set-up-an-express-server-in-node-js/'] },          { id: 'node-4-3', title: 'Returning Response from the server', status: 'not-started', resources: ['https://expressjs.com/en/guide/routing.html', 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes', 'https://www.tutorialspoint.com/expressjs/expressjs_response.htm', 'https://www.geeksforgeeks.org/express-js-response-object/', 'https://blog.logrocket.com/organizing-express-js-project-structure-better-productivity/'] },
          { id: 'node-4-4', title: 'Using Query Parameters and URL Parameters', status: 'not-started', resources: ['https://expressjs.com/en/guide/routing.html#route-parameters', 'https://www.geeksforgeeks.org/express-js-req-query-property/', 'https://www.tutorialspoint.com/expressjs/expressjs_url_building.htm', 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes', 'https://www.freecodecamp.org/news/express-explained-with-examples-installation-routing-middleware-and-more/'] },
          { id: 'node-4-5', title: 'HTTP Request - Types of Requests', status: 'not-started', resources: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods', 'https://expressjs.com/en/guide/routing.html#routing', 'https://www.tutorialspoint.com/http/http_methods.htm', 'https://restfulapi.net/http-methods/', 'https://www.geeksforgeeks.org/http-request-methods/'] },
          { id: 'node-4-6', title: 'Serving Static Files with express.static()', status: 'not-started', resources: ['https://expressjs.com/en/starter/static-files.html', 'https://www.tutorialspoint.com/expressjs/expressjs_static_files.htm', 'https://www.geeksforgeeks.org/express-js-express-static-function/', 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes', 'https://blog.logrocket.com/express-static-middleware-tutorial/'] }
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
        notes: '',        subtopics: [
          { id: 'node-5-1', title: 'What is Template Engine and What is the use of Template Engine', status: 'not-started', resources: ['https://expressjs.com/en/guide/using-template-engines.html', 'https://www.geeksforgeeks.org/template-engines-in-node-js/', 'https://blog.logrocket.com/comparing-templating-engines-node/', 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data', 'https://www.tutorialspoint.com/nodejs/nodejs_templating.htm'] },
          { id: 'node-5-2', title: 'Template Engine Option - Handlebars, EJS, Pug, jade', status: 'not-started', resources: ['https://ejs.co/', 'https://handlebarsjs.com/', 'https://pugjs.org/', 'https://blog.logrocket.com/comparing-templating-engines-node/', 'https://www.geeksforgeeks.org/template-engines-in-node-js/'] },
          { id: 'node-5-3', title: 'Setting Up Template Engine - Installed EJS template engine', status: 'not-started', resources: ['https://ejs.co/#install', 'https://expressjs.com/en/guide/using-template-engines.html', 'https://www.tutorialspoint.com/nodejs/nodejs_templating.htm', 'https://www.geeksforgeeks.org/use-ejs-as-template-engine-in-node-js/', 'https://www.freecodecamp.org/news/how-to-use-ejs-templating-in-a-node-js-application/'] },
          { id: 'node-5-4', title: 'Rendering Our First Page using EJS and Some important syntax', status: 'not-started', resources: ['https://ejs.co/#docs', 'https://www.geeksforgeeks.org/use-ejs-as-template-engine-in-node-js/', 'https://www.tutorialspoint.com/nodejs/nodejs_templating.htm', 'https://blog.logrocket.com/how-to-use-ejs-template-node-js-application/', 'https://www.freecodecamp.org/news/how-to-use-ejs-templating-in-a-node-js-application/'] },
          { id: 'node-5-5', title: 'Loop statement, Conditional statement and Locals in views - EJS', status: 'not-started', resources: ['https://ejs.co/#docs', 'https://www.geeksforgeeks.org/use-ejs-as-template-engine-in-node-js/', 'https://blog.logrocket.com/how-to-use-ejs-template-node-js-application/', 'https://www.tutorialspoint.com/nodejs/nodejs_templating.htm', 'https://github.com/mde/ejs/wiki'] },
          { id: 'node-5-6', title: 'Accessing the Static Files Inside EJS file', status: 'not-started', resources: ['https://ejs.co/#includes', 'https://www.geeksforgeeks.org/use-ejs-as-template-engine-in-node-js/', 'https://blog.logrocket.com/how-to-use-ejs-template-node-js-application/', 'https://expressjs.com/en/starter/static-files.html', 'https://www.freecodecamp.org/news/how-to-use-ejs-templating-in-a-node-js-application/'] }
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
        notes: '',        subtopics: [
          { id: 'node-6-1', title: 'Understanding the middleware in express', status: 'not-started', resources: ['https://expressjs.com/en/guide/using-middleware.html', 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction', 'https://www.tutorialspoint.com/expressjs/expressjs_middleware.htm', 'https://www.geeksforgeeks.org/middleware-in-express-js/', 'https://blog.logrocket.com/express-middleware-a-complete-guide/'] },
          { id: 'node-6-2', title: 'Implementing middleware with express', status: 'not-started', resources: ['https://expressjs.com/en/guide/writing-middleware.html', 'https://www.geeksforgeeks.org/middleware-in-express-js/', 'https://blog.logrocket.com/express-middleware-a-complete-guide/', 'https://www.tutorialspoint.com/expressjs/expressjs_middleware.htm', 'https://medium.com/@agoiabeladeyemi/a-simple-explanation-of-express-middleware-c68ea839f498'] },
          { id: 'node-6-3', title: 'Different types of middleware', status: 'not-started', resources: ['https://expressjs.com/en/guide/using-middleware.html#middleware.types', 'https://www.geeksforgeeks.org/types-of-middleware-in-express-js/', 'https://blog.logrocket.com/express-middleware-a-complete-guide/', 'https://www.tutorialspoint.com/expressjs/expressjs_middleware.htm', 'https://medium.com/@selvaganesh93/how-node-js-middleware-works-d8e02a936113'] },
          { id: 'node-6-4', title: 'Different level of middleware', status: 'not-started', resources: ['https://expressjs.com/en/guide/using-middleware.html', 'https://www.geeksforgeeks.org/middleware-in-express-js/', 'https://blog.logrocket.com/express-middleware-a-complete-guide/', 'https://medium.com/@agoiabeladeyemi/a-simple-explanation-of-express-middleware-c68ea839f498', 'https://www.tutorialspoint.com/expressjs/expressjs_middleware.htm'] },
          { id: 'node-6-5', title: 'Handeling Errors and Security with middleware', status: 'not-started', resources: ['https://expressjs.com/en/guide/error-handling.html', 'https://www.geeksforgeeks.org/error-handling-middleware-in-express-js/', 'https://blog.logrocket.com/express-error-handling/', 'https://expressjs.com/en/advanced/best-practice-security.html', 'https://www.npmjs.com/package/helmet'] }
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
        notes: '',        subtopics: [
          { id: 'node-7-1', title: 'Understand Multer and its usecase', status: 'not-started', resources: ['https://www.npmjs.com/package/multer', 'https://www.geeksforgeeks.org/upload-and-retrieve-file-on-mongodb-using-mongoose/', 'https://blog.logrocket.com/multer-nodejs-express-upload-file/', 'https://www.tutorialspoint.com/nodejs/nodejs_file_system.htm', 'https://medium.com/@svibodh05/file-upload-with-multer-in-node-js-and-express-js-9c6e1b3a8b47'] },
          { id: 'node-7-2', title: 'Uploading file with multer', status: 'not-started', resources: ['https://www.npmjs.com/package/multer', 'https://blog.logrocket.com/multer-nodejs-express-upload-file/', 'https://www.geeksforgeeks.org/upload-and-retrieve-file-on-mongodb-using-mongoose/', 'https://medium.com/@svibodh05/file-upload-with-multer-in-node-js-and-express-js-9c6e1b3a8b47', 'https://www.freecodecamp.org/news/how-to-upload-files-with-node-js/'] },
          { id: 'node-7-3', title: 'Understanding Memory and Disk Storage', status: 'not-started', resources: ['https://www.npmjs.com/package/multer#storage', 'https://blog.logrocket.com/multer-nodejs-express-upload-file/', 'https://www.geeksforgeeks.org/upload-and-retrieve-file-on-mongodb-using-mongoose/', 'https://medium.com/@svibodh05/file-upload-with-multer-in-node-js-and-express-js-9c6e1b3a8b47', 'https://github.com/expressjs/multer#diskstorage'] },
          { id: 'node-7-4', title: 'Accessing uploaded file req.file', status: 'not-started', resources: ['https://www.npmjs.com/package/multer#file-information', 'https://blog.logrocket.com/multer-nodejs-express-upload-file/', 'https://www.geeksforgeeks.org/upload-and-retrieve-file-on-mongodb-using-mongoose/', 'https://medium.com/@svibodh05/file-upload-with-multer-in-node-js-and-express-js-9c6e1b3a8b47', 'https://expressjs.com/en/resources/middleware/multer.html'] },
          { id: 'node-7-5', title: 'Working with express.static', status: 'not-started', resources: ['https://expressjs.com/en/starter/static-files.html', 'https://www.tutorialspoint.com/expressjs/expressjs_static_files.htm', 'https://www.geeksforgeeks.org/express-js-express-static-function/', 'https://blog.logrocket.com/express-static-middleware-tutorial/', 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes'] },
          { id: 'node-7-6', title: 'Using Cloudinary or Imagekit for Real-time media processing', status: 'not-started', resources: ['https://cloudinary.com/documentation/node_integration', 'https://docs.imagekit.io/api-reference/upload-file-api/server-side-file-upload', 'https://blog.logrocket.com/handling-images-with-cloudinary-in-node-js/', 'https://www.geeksforgeeks.org/file-uploading-in-node-js/', 'https://medium.com/@maheshkumawat_83392/image-upload-using-cloudinary-in-node-js-eb4fb2b0b4a5'] }
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
        notes: '',        subtopics: [
          { id: 'node-8-1', title: 'Relational and non-relational Databases : mongodb & mysql', status: 'not-started', resources: ['https://www.mongodb.com/nosql-explained/nosql-vs-sql', 'https://www.geeksforgeeks.org/difference-between-sql-and-nosql/', 'https://blog.logrocket.com/sql-vs-nosql-differences/', 'https://www.tutorialspoint.com/mongodb/mongodb_overview.htm', 'https://dev.mysql.com/doc/'] },
          { id: 'node-8-2', title: 'What is MongoDB? Why Use It?', status: 'not-started', resources: ['https://www.mongodb.com/what-is-mongodb', 'https://docs.mongodb.com/manual/introduction/', 'https://www.tutorialspoint.com/mongodb/mongodb_overview.htm', 'https://www.geeksforgeeks.org/mongodb-an-introduction/', 'https://blog.logrocket.com/why-you-should-use-mongodb/'] },
          { id: 'node-8-3', title: 'Installing Compass and Understand how to access DB using terminal', status: 'not-started', resources: ['https://docs.mongodb.com/compass/current/install/', 'https://docs.mongodb.com/manual/mongo/', 'https://www.tutorialspoint.com/mongodb/mongodb_environment.htm', 'https://www.geeksforgeeks.org/mongodb-compass/', 'https://docs.mongodb.com/manual/tutorial/getting-started/'] },
          { id: 'node-8-4', title: 'Setting Up MongoDB Locally and in the Cloud', status: 'not-started', resources: ['https://docs.mongodb.com/manual/installation/', 'https://docs.atlas.mongodb.com/getting-started/', 'https://www.tutorialspoint.com/mongodb/mongodb_environment.htm', 'https://www.geeksforgeeks.org/how-to-install-mongodb-on-windows/', 'https://blog.logrocket.com/how-to-use-mongodb-atlas/'] },
          { id: 'node-8-5', title: 'Understanding Datatypes, Collections and Documents', status: 'not-started', resources: ['https://docs.mongodb.com/manual/core/document/', 'https://docs.mongodb.com/manual/core/databases-and-collections/', 'https://www.tutorialspoint.com/mongodb/mongodb_data_types.htm', 'https://www.geeksforgeeks.org/mongodb-datatypes/', 'https://blog.logrocket.com/mongodb-data-types/'] },
          { id: 'node-8-6', title: 'Connecting MongoDB to Node.js with Mongoose', status: 'not-started', resources: ['https://mongoosejs.com/docs/index.html', 'https://www.geeksforgeeks.org/mongoose-module-introduction/', 'https://blog.logrocket.com/mongoose-mongodb-object-modeling-node-js/', 'https://www.tutorialspoint.com/nodejs/nodejs_mongodb.htm', 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose'] },
          { id: 'node-8-7', title: 'Database Relations', status: 'not-started', resources: ['https://docs.mongodb.com/manual/applications/data-models-relationships/', 'https://mongoosejs.com/docs/populate.html', 'https://www.geeksforgeeks.org/mongoose-virtual-populate/', 'https://blog.logrocket.com/mongoose-relationships-embedding-vs-referencing/', 'https://www.tutorialspoint.com/mongodb/mongodb_relationships.htm'] },
          { id: 'node-8-8', title: 'Handling Relationships with Mongoose (populate)', status: 'not-started', resources: ['https://mongoosejs.com/docs/populate.html', 'https://www.geeksforgeeks.org/mongoose-populate-method/', 'https://blog.logrocket.com/mongoose-relationships-embedding-vs-referencing/', 'https://medium.com/@nicknauert/mongooses-model-populate-b844ae6d1ee7', 'https://www.tutorialspoint.com/mongodb/mongodb_relationships.htm'] }
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
        notes: '',        subtopics: [
          { id: 'node-9-1', title: 'What is a REST API?', status: 'not-started', resources: ['https://restfulapi.net/', 'https://developer.mozilla.org/en-US/docs/Glossary/REST', 'https://www.geeksforgeeks.org/rest-api-introduction/', 'https://www.tutorialspoint.com/restful/index.htm', 'https://blog.logrocket.com/what-is-rest-api/'] },
          { id: 'node-9-2', title: 'Designing RESTful APIs', status: 'not-started', resources: ['https://restfulapi.net/rest-api-design-tutorial-with-example/', 'https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design', 'https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/', 'https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/', 'https://www.geeksforgeeks.org/rest-api-architectural-constraints/'] },
          { id: 'node-9-3', title: 'Understanding Stateless Communication', status: 'not-started', resources: ['https://restfulapi.net/statelessness/', 'https://www.geeksforgeeks.org/restful-web-services/', 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview', 'https://blog.logrocket.com/what-is-rest-api/', 'https://www.tutorialspoint.com/restful/restful_statelessness.htm'] },
          { id: 'node-9-4', title: 'Versioning in RESTful APIs', status: 'not-started', resources: ['https://restfulapi.net/versioning/', 'https://blog.logrocket.com/api-versioning-strategies/', 'https://www.freecodecamp.org/news/how-to-version-a-rest-api/', 'https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design#versioning-a-restful-web-api', 'https://www.geeksforgeeks.org/rest-api-versioning/'] },
          { id: 'node-9-5', title: 'Using Postman for API Testing and developing', status: 'not-started', resources: ['https://learning.postman.com/', 'https://www.geeksforgeeks.org/introduction-postman-api-development/', 'https://blog.logrocket.com/how-to-use-postman-to-manage-and-execute-your-apis/', 'https://www.tutorialspoint.com/postman/index.htm', 'https://www.freecodecamp.org/news/how-to-use-postman-to-test-apis/'] },
          { id: 'node-9-6', title: 'Understanding and Working With Status code', status: 'not-started', resources: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status', 'https://restfulapi.net/http-status-codes/', 'https://www.geeksforgeeks.org/http-status-codes/', 'https://httpstatuses.com/', 'https://blog.logrocket.com/http-status-codes-nodejs/'] },
          { id: 'node-9-7', title: 'Validating API Inputs Using libraries', status: 'not-started', resources: ['https://www.npmjs.com/package/joi', 'https://express-validator.github.io/docs/', 'https://www.geeksforgeeks.org/form-validation-using-express-validator/', 'https://blog.logrocket.com/handle-data-validation-node-js-joi/', 'https://medium.com/@itswadesh/nodejs-express-data-validation-with-joi-446eb1476cbc'] },
          { id: 'node-9-8', title: 'Security Handling - Rate Limiting, XSS, CSRF, DOS', status: 'not-started', resources: ['https://expressjs.com/en/advanced/best-practice-security.html', 'https://www.npmjs.com/package/helmet', 'https://www.npmjs.com/package/express-rate-limit', 'https://blog.logrocket.com/securing-node-js-apps/', 'https://www.geeksforgeeks.org/node-js-security-best-practices/'] }
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
        notes: '',        subtopics: [
          { id: 'node-10-1', title: 'Indexing for Performance with MongoDB', status: 'not-started', resources: ['https://docs.mongodb.com/manual/indexes/', 'https://www.mongodb.com/blog/post/performance-best-practices-indexing', 'https://www.geeksforgeeks.org/indexing-in-mongodb/', 'https://blog.logrocket.com/mongodb-indexing-strategies/', 'https://www.tutorialspoint.com/mongodb/mongodb_indexing.htm'] },
          { id: 'node-10-2', title: 'Best practice with Indexing explain()', status: 'not-started', resources: ['https://docs.mongodb.com/manual/reference/method/cursor.explain/', 'https://www.mongodb.com/blog/post/performance-best-practices-query-patterns-and-profiling', 'https://www.geeksforgeeks.org/mongodb-explain/', 'https://blog.logrocket.com/mongodb-indexing-strategies/', 'https://medium.com/@karanbhanot/query-optimization-in-mongodb-199d500d54a3'] },
          { id: 'node-10-3', title: 'Learning MongoDB Aggregation', status: 'not-started', resources: ['https://docs.mongodb.com/manual/aggregation/', 'https://www.mongodb.com/docs/manual/tutorial/aggregation-pipeline/', 'https://www.geeksforgeeks.org/mongodb-aggregation-pipeline/', 'https://blog.logrocket.com/mongodb-aggregation-framework/', 'https://www.tutorialspoint.com/mongodb/mongodb_aggregation.htm'] },
          { id: 'node-10-4', title: 'Comparison Operators', status: 'not-started', resources: ['https://docs.mongodb.com/manual/reference/operator/query-comparison/', 'https://www.geeksforgeeks.org/mongodb-comparison-query-operators/', 'https://blog.logrocket.com/mongodb-aggregation-framework/', 'https://www.tutorialspoint.com/mongodb/mongodb_query_document.htm', 'https://mongoosejs.com/docs/queries.html'] },
          { id: 'node-10-5', title: 'Logical Operators', status: 'not-started', resources: ['https://docs.mongodb.com/manual/reference/operator/query-logical/', 'https://www.geeksforgeeks.org/mongodb-logical-query-operators/', 'https://blog.logrocket.com/mongodb-aggregation-framework/', 'https://www.tutorialspoint.com/mongodb/mongodb_query_document.htm', 'https://mongoosejs.com/docs/queries.html'] },
          { id: 'node-10-6', title: 'Array Operators', status: 'not-started', resources: ['https://docs.mongodb.com/manual/reference/operator/query-array/', 'https://www.geeksforgeeks.org/mongodb-array-query-operators/', 'https://blog.logrocket.com/mongodb-aggregation-framework/', 'https://www.tutorialspoint.com/mongodb/mongodb_query_document.htm', 'https://mongoosejs.com/docs/schematypes.html#arrays'] },
          { id: 'node-10-7', title: 'Stages in Aggregation pipeline', status: 'not-started', resources: ['https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/', 'https://www.mongodb.com/docs/manual/tutorial/aggregation-pipeline/', 'https://www.geeksforgeeks.org/mongodb-aggregation-pipeline/', 'https://blog.logrocket.com/mongodb-aggregation-framework/', 'https://www.tutorialspoint.com/mongodb/mongodb_aggregation.htm'] },
          { id: 'node-10-8', title: 'Creating Database on Local and Atlas', status: 'not-started', resources: ['https://docs.atlas.mongodb.com/getting-started/', 'https://docs.mongodb.com/manual/installation/', 'https://www.geeksforgeeks.org/how-to-install-mongodb-on-windows/', 'https://blog.logrocket.com/how-to-use-mongodb-atlas/', 'https://www.tutorialspoint.com/mongodb/mongodb_environment.htm'] },
          { id: 'node-10-9', title: 'Understanding concepts of Replication and Sharding', status: 'not-started', resources: ['https://docs.mongodb.com/manual/replication/', 'https://docs.mongodb.com/manual/sharding/', 'https://www.geeksforgeeks.org/mongodb-replication/', 'https://blog.logrocket.com/mongodb-replication-sharding/', 'https://www.tutorialspoint.com/mongodb/mongodb_replication.htm'] },
          { id: 'node-10-10', title: 'Creating parallel pipeline with $facet', status: 'not-started', resources: ['https://docs.mongodb.com/manual/reference/operator/aggregation/facet/', 'https://www.geeksforgeeks.org/mongodb-facet-aggregation-stage/', 'https://blog.logrocket.com/mongodb-aggregation-framework/', 'https://medium.com/@karanbhanot/query-optimization-in-mongodb-199d500d54a3', 'https://www.mongodb.com/docs/manual/reference/operator/aggregation/facet/'] },
          { id: 'node-10-11', title: 'Learning MongoDB Operators', status: 'not-started', resources: ['https://docs.mongodb.com/manual/reference/operator/', 'https://www.geeksforgeeks.org/mongodb-operators/', 'https://blog.logrocket.com/mongodb-aggregation-framework/', 'https://www.tutorialspoint.com/mongodb/mongodb_query_document.htm', 'https://mongoosejs.com/docs/queries.html'] },
          { id: 'node-10-12', title: 'Understanding Different types of Operators', status: 'not-started', resources: ['https://docs.mongodb.com/manual/reference/operator/', 'https://www.geeksforgeeks.org/mongodb-operators/', 'https://blog.logrocket.com/mongodb-aggregation-framework/', 'https://www.tutorialspoint.com/mongodb/mongodb_operators.htm', 'https://mongoosejs.com/docs/queries.html'] }
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
        notes: '',        subtopics: [
          { id: 'node-11-1', title: 'Why is Logging Important?', status: 'not-started', resources: ['https://www.loggly.com/ultimate-guide/node-logging-basics/', 'https://blog.logrocket.com/node-js-logging-best-practices-essential-guide/', 'https://www.geeksforgeeks.org/logging-in-node-js/', 'https://medium.com/@tobydigz/logging-in-a-node-express-app-56dd5d3f5bb9', 'https://www.tutorialspoint.com/nodejs/nodejs_logging.htm'] },
          { id: 'node-11-2', title: 'Setting Up Logging with Libraries', status: 'not-started', resources: ['https://www.npmjs.com/package/winston', 'https://www.npmjs.com/package/morgan', 'https://blog.logrocket.com/node-js-logging-best-practices-essential-guide/', 'https://www.geeksforgeeks.org/logging-in-node-js-with-winston/', 'https://medium.com/@tobydigz/logging-in-a-node-express-app-56dd5d3f5bb9'] },
          { id: 'node-11-3', title: 'Different mode of morgan', status: 'not-started', resources: ['https://www.npmjs.com/package/morgan', 'https://expressjs.com/en/resources/middleware/morgan.html', 'https://www.geeksforgeeks.org/morgan-logger-format-in-node-js/', 'https://blog.logrocket.com/node-js-logging-best-practices-essential-guide/', 'https://medium.com/@tobydigz/logging-in-a-node-express-app-56dd5d3f5bb9'] },
          { id: 'node-11-4', title: 'Error Handling and Logging', status: 'not-started', resources: ['https://expressjs.com/en/guide/error-handling.html', 'https://www.geeksforgeeks.org/error-handling-in-node-js/', 'https://blog.logrocket.com/express-error-handling/', 'https://medium.com/@tobydigz/logging-in-a-node-express-app-56dd5d3f5bb9', 'https://www.npmjs.com/package/winston'] }
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
        notes: '',        subtopics: [
          { id: 'node-12-1', title: 'Understanding the Basic Structure of application', status: 'not-started', resources: ['https://blog.logrocket.com/organizing-express-js-project-structure-better-productivity/', 'https://www.geeksforgeeks.org/express-js-project-structure/', 'https://medium.com/@diogo.fg.pinheiro/simple-to-understand-folder-structure-for-react-node-js-projects-c95fae21749e', 'https://dev.to/mr_frontend/folder-structure-for-nodejs-expressjs-project-435l', 'https://github.com/goldbergyoni/nodebestpractices'] },
          { id: 'node-12-2', title: 'Learning File Naming Conventions, Git Configuration', status: 'not-started', resources: ['https://github.com/goldbergyoni/nodebestpractices', 'https://blog.logrocket.com/organizing-express-js-project-structure-better-productivity/', 'https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/', 'https://docs.github.com/en/get-started/getting-started-with-git/set-up-git', 'https://www.conventionalcommits.org/'] },
          { id: 'node-12-3', title: 'Understanding Important Folders', status: 'not-started', resources: ['https://blog.logrocket.com/organizing-express-js-project-structure-better-productivity/', 'https://www.geeksforgeeks.org/express-js-project-structure/', 'https://medium.com/@diogo.fg.pinheiro/simple-to-understand-folder-structure-for-react-node-js-projects-c95fae21749e', 'https://dev.to/mr_frontend/folder-structure-for-nodejs-expressjs-project-435l', 'https://github.com/goldbergyoni/nodebestpractices'] },
          { id: 'node-12-4', title: 'Role of package.json, ENV and .gitignore', status: 'not-started', resources: ['https://docs.npmjs.com/cli/v7/configuring-npm/package-json', 'https://www.npmjs.com/package/dotenv', 'https://www.geeksforgeeks.org/environment-variables-in-node-js/', 'https://git-scm.com/docs/gitignore', 'https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/'] },
          { id: 'node-12-5', title: 'Production Environment - PM2, Error & Response Handling Configuration, CORS Configuration, async-handler.js', status: 'not-started', resources: ['https://pm2.keymetrics.io/docs/', 'https://www.npmjs.com/package/cors', 'https://expressjs.com/en/guide/error-handling.html', 'https://www.geeksforgeeks.org/pm2-process-manager-for-nodejs-applications/', 'https://blog.logrocket.com/pm2-tutorial/'] },
          { id: 'node-12-6', title: 'Using and Configuring ESLint and Prettier for code formatting', status: 'not-started', resources: ['https://eslint.org/docs/user-guide/getting-started', 'https://prettier.io/docs/en/install.html', 'https://www.geeksforgeeks.org/how-to-use-eslint-and-prettier-in-a-react-typescript-project/', 'https://blog.logrocket.com/using-prettier-eslint-automate-formatting-fixing-javascript/', 'https://medium.com/@uistephen/style-guides-for-linting-ecmascript-6-eslint-6377315e8e1c'] },
          { id: 'node-12-7', title: 'Testing APIs using Postman', status: 'not-started', resources: ['https://learning.postman.com/', 'https://www.geeksforgeeks.org/introduction-postman-api-development/', 'https://blog.logrocket.com/how-to-use-postman-to-manage-and-execute-your-apis/', 'https://www.tutorialspoint.com/postman/index.htm', 'https://www.freecodecamp.org/news/how-to-use-postman-to-test-apis/'] }
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
        notes: '',        subtopics: [
          { id: 'node-13-1', title: 'Difference Between Authentication & Authorization', status: 'not-started', resources: ['https://auth0.com/docs/get-started/identity-fundamentals/authentication-and-authorization', 'https://www.geeksforgeeks.org/difference-between-authentication-and-authorization/', 'https://blog.logrocket.com/node-js-authentication-guide/', 'https://www.tutorialspoint.com/nodejs/nodejs_authentication.htm', 'https://medium.com/@sherryhsu/note-authentication-vs-authorization-4fdd33317adf'] },
          { id: 'node-13-2', title: 'Working with Passwords and Authentication', status: 'not-started', resources: ['https://www.npmjs.com/package/bcrypt', 'https://blog.logrocket.com/node-js-authentication-guide/', 'https://www.geeksforgeeks.org/node-js-password-hashing-crypto-module/', 'https://medium.com/@mridu.sh92/a-quick-guide-for-authentication-using-bcrypt-on-express-nodejs-1d8791bb418f', 'https://auth0.com/blog/hashing-in-action-understanding-bcrypt/'] },
          { id: 'node-13-3', title: 'Understanding Session and Token Authentication', status: 'not-started', resources: ['https://auth0.com/blog/cookies-vs-tokens-definitive-guide/', 'https://blog.logrocket.com/jwt-authentication-node-js/', 'https://www.geeksforgeeks.org/session-vs-token-based-authentication/', 'https://medium.com/@sherryhsu/session-vs-token-based-authentication-11a6c5ac45e4', 'https://www.tutorialspoint.com/nodejs/nodejs_sessions.htm'] },
          { id: 'node-13-4', title: 'Implementing JWT Authentication', status: 'not-started', resources: ['https://jwt.io/introduction/', 'https://www.npmjs.com/package/jsonwebtoken', 'https://blog.logrocket.com/jwt-authentication-node-js/', 'https://www.geeksforgeeks.org/json-web-token-jwt/', 'https://medium.com/@danieljimgarcia/dont-store-secrets-in-local-storage-use-httponly-cookies-instead-e7f7e791b9e2'] },
          { id: 'node-13-5', title: 'Securing user password with bcrypt hashing salt', status: 'not-started', resources: ['https://www.npmjs.com/package/bcrypt', 'https://auth0.com/blog/hashing-in-action-understanding-bcrypt/', 'https://blog.logrocket.com/node-js-authentication-guide/', 'https://www.geeksforgeeks.org/node-js-password-hashing-crypto-module/', 'https://medium.com/@mridu.sh92/a-quick-guide-for-authentication-using-bcrypt-on-express-nodejs-1d8791bb418f'] },
          { id: 'node-13-6', title: 'Role-Based Access Control (RBAC)', status: 'not-started', resources: ['https://auth0.com/intro-to-iam/what-is-role-based-access-control-rbac/', 'https://blog.logrocket.com/implementing-role-based-access-control-node-js/', 'https://www.geeksforgeeks.org/role-based-access-control/', 'https://medium.com/@mr_frontend/role-based-authentication-using-react-context-api-and-react-hooks-994a6b3d0293', 'https://www.npmjs.com/package/rbac'] },
          { id: 'node-13-7', title: 'Authenticating user with Express middleware', status: 'not-started', resources: ['https://expressjs.com/en/guide/using-middleware.html', 'https://blog.logrocket.com/express-middleware-a-complete-guide/', 'https://www.geeksforgeeks.org/middleware-in-express-js/', 'https://medium.com/@agoiabeladeyemi/a-simple-explanation-of-express-middleware-c68ea839f498', 'https://auth0.com/blog/developing-restful-apis-with-node-js-and-express/'] },
          { id: 'node-13-8', title: 'Understanding Passport.js and its usecase', status: 'not-started', resources: ['http://www.passportjs.org/docs/', 'https://www.geeksforgeeks.org/node-js-passport-authentication/', 'https://blog.logrocket.com/node-js-authentication-guide/', 'https://medium.com/@prashantramnyc/authenticate-using-passport-js-74d3352b5b5c', 'https://www.tutorialspoint.com/nodejs/nodejs_authentication.htm'] },
          { id: 'node-13-9', title: 'Setting up Passport.js', status: 'not-started', resources: ['http://www.passportjs.org/docs/configure/', 'https://www.geeksforgeeks.org/node-js-passport-authentication/', 'https://blog.logrocket.com/node-js-authentication-guide/', 'https://medium.com/@prashantramnyc/authenticate-using-passport-js-74d3352b5b5c', 'https://github.com/jaredhanson/passport'] },
          { id: 'node-13-10', title: 'express-sessions and using passport for authentication', status: 'not-started', resources: ['https://www.npmjs.com/package/express-session', 'http://www.passportjs.org/docs/authenticate/', 'https://www.geeksforgeeks.org/node-js-passport-authentication/', 'https://blog.logrocket.com/node-js-authentication-guide/', 'https://medium.com/@prashantramnyc/authenticate-using-passport-js-74d3352b5b5c'] }
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
        notes: '',        subtopics: [
          { id: 'node-14-1', title: 'Understanding WebSockets protocol for realtime applications', status: 'not-started', resources: ['https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API', 'https://www.geeksforgeeks.org/what-is-web-socket-and-how-it-is-different-from-the-http/', 'https://blog.logrocket.com/websockets-tutorial-how-to-go-real-time-with-node-and-react-8e4693fbf843/', 'https://www.tutorialspoint.com/websockets/index.htm', 'https://medium.com/@dominik.t/what-are-web-sockets-what-about-rest-apis-b9c15fd72aac'] },
          { id: 'node-14-2', title: 'Learning handshake, Persistent connection, Bidirectional communication, HTTP polling', status: 'not-started', resources: ['https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers', 'https://www.geeksforgeeks.org/what-is-web-socket-and-how-it-is-different-from-the-http/', 'https://blog.logrocket.com/websockets-tutorial-how-to-go-real-time-with-node-and-react-8e4693fbf843/', 'https://medium.com/@dominik.t/what-are-web-sockets-what-about-rest-apis-b9c15fd72aac', 'https://www.tutorialspoint.com/websockets/websockets_overview.htm'] },
          { id: 'node-14-3', title: 'Understanding difference between WebSocket Vs Socket.io', status: 'not-started', resources: ['https://socket.io/docs/v4/', 'https://blog.logrocket.com/websocket-vs-socket-io/', 'https://www.geeksforgeeks.org/difference-between-websocket-and-socket-io/', 'https://medium.com/@martin.sikora/websockets-vs-socket-io-311a0cdc3f6f', 'https://stackoverflow.com/questions/10112178/differences-between-socket-io-and-websockets'] },
          { id: 'node-14-4', title: 'Working with socket.io for realtime applications', status: 'not-started', resources: ['https://socket.io/docs/v4/', 'https://socket.io/get-started/chat', 'https://www.geeksforgeeks.org/socket-io-introduction/', 'https://blog.logrocket.com/websockets-tutorial-how-to-go-real-time-with-node-and-react-8e4693fbf843/', 'https://www.tutorialspoint.com/socket.io/index.htm'] },
          { id: 'node-14-5', title: 'Understanding usage of Rooms in Socket.io', status: 'not-started', resources: ['https://socket.io/docs/v4/rooms/', 'https://www.geeksforgeeks.org/socket-io-rooms/', 'https://blog.logrocket.com/websockets-tutorial-how-to-go-real-time-with-node-and-react-8e4693fbf843/', 'https://medium.com/@noufel.gouirhate/create-a-simple-chat-app-with-node-js-and-socket-io-ea716c093088', 'https://www.tutorialspoint.com/socket.io/socket.io_rooms.htm'] },
          { id: 'node-14-6', title: 'Understanding Middleware in Socket.io', status: 'not-started', resources: ['https://socket.io/docs/v4/middlewares/', 'https://www.geeksforgeeks.org/socket-io-middleware/', 'https://blog.logrocket.com/websockets-tutorial-how-to-go-real-time-with-node-and-react-8e4693fbf843/', 'https://medium.com/@noufel.gouirhate/create-a-simple-chat-app-with-node-js-and-socket-io-ea716c093088', 'https://socket.io/docs/v4/server-api/#socketuse'] }
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
        notes: '',        subtopics: [
          { id: 'node-15-1', title: 'What is Caching and How to cache data locally?', status: 'not-started', resources: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching', 'https://www.geeksforgeeks.org/caching-in-node-js/', 'https://blog.logrocket.com/caching-node-js-optimize-app-performance/', 'https://medium.com/@danielsternlicht/caching-like-a-boss-in-nodejs-9bccbbc71b9b', 'https://www.tutorialspoint.com/nodejs/nodejs_caching.htm'] },
          { id: 'node-15-2', title: 'What is Redis?', status: 'not-started', resources: ['https://redis.io/documentation', 'https://www.geeksforgeeks.org/introduction-to-redis/', 'https://blog.logrocket.com/guide-to-fully-understanding-redis/', 'https://medium.com/@stockholmux/introduction-to-redis-c6f03da02ab7', 'https://www.tutorialspoint.com/redis/index.htm'] },
          { id: 'node-15-3', title: 'Why Use Redis for Caching?', status: 'not-started', resources: ['https://redis.io/topics/use-cases', 'https://www.geeksforgeeks.org/redis-caching/', 'https://blog.logrocket.com/guide-to-fully-understanding-redis/', 'https://medium.com/@stockholmux/introduction-to-redis-c6f03da02ab7', 'https://aws.amazon.com/redis/'] },
          { id: 'node-15-4', title: 'Implementing Redis Caching in Node.js', status: 'not-started', resources: ['https://www.npmjs.com/package/redis', 'https://redis.io/docs/clients/nodejs/', 'https://blog.logrocket.com/caching-node-js-optimize-app-performance/', 'https://www.geeksforgeeks.org/nodejs-caching-using-redis/', 'https://medium.com/@danielsternlicht/caching-like-a-boss-in-nodejs-9bccbbc71b9b'] },
          { id: 'node-15-5', title: 'Advanced Redis Features', status: 'not-started', resources: ['https://redis.io/commands', 'https://redis.io/topics/data-types', 'https://blog.logrocket.com/guide-to-fully-understanding-redis/', 'https://www.geeksforgeeks.org/redis-data-types/', 'https://medium.com/@stockholmux/introduction-to-redis-c6f03da02ab7'] }
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
        notes: '',        subtopics: [
          { id: 'node-16-1', title: 'Basic Error Handling in Express next()', status: 'not-started', resources: ['https://expressjs.com/en/guide/error-handling.html', 'https://www.geeksforgeeks.org/error-handling-in-node-js/', 'https://blog.logrocket.com/express-error-handling/', 'https://medium.com/@SigniorGratiano/express-error-handling-674bfdd86139', 'https://www.tutorialspoint.com/nodejs/nodejs_error_handling.htm'] },
          { id: 'node-16-2', title: 'Catching Specific Errors try & catch', status: 'not-started', resources: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch', 'https://www.geeksforgeeks.org/error-handling-in-node-js/', 'https://blog.logrocket.com/express-error-handling/', 'https://medium.com/@SigniorGratiano/express-error-handling-674bfdd86139', 'https://nodejs.org/api/errors.html'] },
          { id: 'node-16-3', title: 'Creating Util Class for Error Handling', status: 'not-started', resources: ['https://expressjs.com/en/guide/error-handling.html', 'https://blog.logrocket.com/express-error-handling/', 'https://www.geeksforgeeks.org/error-handling-middleware-in-express-js/', 'https://medium.com/@SigniorGratiano/express-error-handling-674bfdd86139', 'https://github.com/goldbergyoni/nodebestpractices#-21-use-async-await-or-promises-for-async-error-handling'] }
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
          {
            id: 'node-17-1',
            title: 'Introduction to Payment Gateways and Razorpay',
            status: 'not-started',
            resources: [
              'https://razorpay.com/docs/',
              'https://www.geeksforgeeks.org/what-is-payment-gateway/',
              'https://razorpay.com/blog/what-is-a-payment-gateway/',
              'https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API',
              'https://stripe.com/docs/payments'
            ]
          },
          {
            id: 'node-17-2',
            title: 'Setting up Razorpay for your application',
            status: 'not-started',
            resources: [
              'https://razorpay.com/docs/payments/server-integration/nodejs/',
              'https://github.com/razorpay/razorpay-node',
              'https://www.youtube.com/watch?v=B3NAkMw6n4s',
              'https://razorpay.com/docs/api/',
              'https://razorpay.com/docs/payments/payment-gateway/web-integration/'
            ]
          },
          {
            id: 'node-17-3',
            title: 'Integrating Razorpay\'s Checkout system',
            status: 'not-started',
            resources: [
              'https://razorpay.com/docs/checkout/',
              'https://razorpay.com/docs/checkout/integration/',
              'https://github.com/razorpay/razorpay-checkout',
              'https://codepen.io/razorpay/pen/JjGGzVQ',
              'https://razorpay.com/docs/checkout/custom/'
            ]
          },
          {
            id: 'node-17-4',
            title: 'Handling Payments: API Integration for Orders and Transactions',
            status: 'not-started',
            resources: [
              'https://razorpay.com/docs/orders/',
              'https://razorpay.com/docs/api/orders/',
              'https://razorpay.com/docs/payments/',
              'https://razorpay.com/docs/api/payments/',
              'https://github.com/razorpay/razorpay-node/blob/master/documents/order.md'
            ]
          },
          {
            id: 'node-17-5',
            title: 'Managing Webhooks for real-time payment status updates',
            status: 'not-started',
            resources: [
              'https://razorpay.com/docs/webhooks/',
              'https://razorpay.com/docs/webhooks/validate/',
              'https://github.com/razorpay/razorpay-node/blob/master/documents/webhook.md',
              'https://razorpay.com/docs/webhooks/setup/',
              'https://ngrok.com/docs'
            ]
          },
          {
            id: 'node-17-6',
            title: 'Ensuring Security and Best Practices for Payment Processing',
            status: 'not-started',
            resources: [
              'https://razorpay.com/docs/security/',
              'https://razorpay.com/docs/payments/pci-compliance/',
              'https://www.owasp.org/index.php/Payment_Card_Industry_Data_Security_Standard',
              'https://razorpay.com/docs/api/authentication/',
              'https://developer.mozilla.org/en-US/docs/Web/Security'
            ]
          }
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
          {
            id: 'node-18-1',
            title: 'Understanding Unit-Testing With Jest',
            status: 'not-started',
            resources: [
              'https://jestjs.io/docs/getting-started',
              'https://www.freecodecamp.org/news/testing-react-hooks/',
              'https://github.com/facebook/jest',
              'https://testing-library.com/docs/',
              'https://www.youtube.com/watch?v=7r4xVDI2vho'
            ]
          },
          {
            id: 'node-18-2',
            title: 'Cross Browser Testing and Why Is It Performed?',
            status: 'not-started',
            resources: [
              'https://www.browserstack.com/guide/cross-browser-testing',
              'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing',
              'https://www.selenium.dev/documentation/',
              'https://playwright.dev/',
              'https://caniuse.com/'
            ]
          },
          {
            id: 'node-18-3',
            title: 'What Is Web Testing? and How to Test a Website',
            status: 'not-started',
            resources: [
              'https://www.guru99.com/web-application-testing.html',
              'https://www.softwaretestinghelp.com/web-application-testing/',
              'https://www.postman.com/api-testing/',
              'https://insomnia.rest/',
              'https://owasp.org/www-project-web-security-testing-guide/'
            ]
          }
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
          {
            id: 'pwa-1-1',
            title: 'Overview of Progressive Web Apps and their benefits',
            status: 'not-started',
            resources: [
              'https://web.dev/progressive-web-apps/',
              'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps',
              'https://www.freecodecamp.org/news/what-are-progressive-web-apps/',
              'https://developers.google.com/web/progressive-web-apps',
              'https://www.smashingmagazine.com/2016/08/a-beginners-guide-to-progressive-web-apps/'
            ]
          },
          {
            id: 'pwa-1-2',
            title: 'Understanding Service Workers and their role in PWA',
            status: 'not-started',
            resources: [
              'https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API',
              'https://web.dev/service-workers-cache/',
              'https://developers.google.com/web/fundamentals/primers/service-workers',
              'https://serviceworke.rs/',
              'https://www.youtube.com/watch?v=ksXwaWHCW6k'
            ]
          },
          {
            id: 'pwa-1-3',
            title: 'Lifecycle of a Service Worker',
            status: 'not-started',
            resources: [
              'https://web.dev/service-worker-lifecycle/',
              'https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker',
              'https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle',
              'https://github.com/GoogleChrome/samples/tree/gh-pages/service-worker',
              'https://www.youtube.com/watch?v=jVfXiv03y5c'
            ]
          },
          {
            id: 'pwa-1-4',
            title: 'Understanding the Manifest File',
            status: 'not-started',
            resources: [
              'https://web.dev/add-manifest/',
              'https://developer.mozilla.org/en-US/docs/Web/Manifest',
              'https://developers.google.com/web/fundamentals/web-app-manifest',
              'https://manifest-validator.appspot.com/',
              'https://realfavicongenerator.net/'
            ]
          },
          {
            id: 'pwa-1-5',
            title: 'Creating a Manifest.json File',
            status: 'not-started',
            resources: [
              'https://web.dev/add-manifest/',
              'https://developer.mozilla.org/en-US/docs/Web/Manifest',
              'https://github.com/GoogleChrome/samples/blob/gh-pages/web-application-manifest/manifest.json',
              'https://app-manifest.firebaseapp.com/',
              'https://www.pwabuilder.com/generate'
            ]
          },
          {
            id: 'pwa-1-6',
            title: 'Key Properties (name, short_name, icons, start_url, theme_color, background_color)',
            status: 'not-started',
            resources: [
              'https://web.dev/add-manifest/',
              'https://developer.mozilla.org/en-US/docs/Web/Manifest',
              'https://developers.google.com/web/fundamentals/web-app-manifest',
              'https://www.w3.org/TR/appmanifest/',
              'https://github.com/w3c/manifest/wiki'
            ]
          },
          {
            id: 'pwa-1-7',
            title: 'Browser DevTools for PWA Debugging',
            status: 'not-started',
            resources: [
              'https://developers.google.com/web/tools/chrome-devtools/progressive-web-apps',
              'https://web.dev/debug-pwas-with-devtools/',
              'https://developer.chrome.com/docs/devtools/',
              'https://firefox-source-docs.mozilla.org/devtools-user/',
              'https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/'
            ]
          },
          {
            id: 'pwa-1-8',
            title: 'Implementing Lazy Loading and Code Splitting',
            status: 'not-started',
            resources: [
              'https://web.dev/code-splitting-suspense/',
              'https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading',
              'https://webpack.js.org/guides/code-splitting/',
              'https://web.dev/reduce-javascript-payloads-with-code-splitting/',
              'https://reactjs.org/docs/code-splitting.html'
            ]
          },
          {
            id: 'pwa-1-9',
            title: 'Exploring various testing techniques for PWAs',
            status: 'not-started',
            resources: [
              'https://web.dev/pwa-testing/',
              'https://developers.google.com/web/tools/lighthouse',
              'https://github.com/GoogleChrome/lighthouse',
              'https://web.dev/lighthouse-pwa/',
              'https://www.webpagetest.org/'
            ]
          },
          {
            id: 'pwa-1-10',
            title: 'Optimizing performance with advanced caching strategies',
            status: 'not-started',
            resources: [
              'https://web.dev/offline-cookbook/',
              'https://jakearchibald.com/2014/offline-cookbook/',
              'https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook',
              'https://web.dev/service-workers-cache/',
              'https://github.com/GoogleChrome/workbox'
            ]
          }
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
          {
            id: 'ms-1-1',
            title: 'What are Microservices? Why Use Them?',
            status: 'not-started',
            resources: [
              'https://microservices.io/',
              'https://martinfowler.com/articles/microservices.html',
              'https://aws.amazon.com/microservices/',
              'https://www.nginx.com/blog/introduction-to-microservices/',
              'https://www.redhat.com/en/topics/microservices'
            ]
          },
          {
            id: 'ms-1-2',
            title: 'Monolithic vs Microservices Architecture',
            status: 'not-started',
            resources: [
              'https://martinfowler.com/bliki/MonolithFirst.html',
              'https://microservices.io/patterns/monolithic.html',
              'https://aws.amazon.com/compare/the-difference-between-monolithic-and-microservices-architecture/',
              'https://www.atlassian.com/microservices/microservices-architecture/microservices-vs-monolith',
              'https://blog.dreamfactory.com/microservices-vs-monolithic-architecture/'
            ]
          },
          {
            id: 'ms-1-3',
            title: 'Challenges of Microservices',
            status: 'not-started',
            resources: [
              'https://martinfowler.com/articles/microservice-trade-offs.html',
              'https://microservices.io/patterns/microservices.html',
              'https://www.nginx.com/blog/microservices-at-netflix-architectural-best-practices/',
              'https://medium.com/@naveenkarippai/microservices-challenges-6b32b00c5de8',
              'https://dzone.com/articles/challenges-in-implementing-microservices'
            ]
          },
          {
            id: 'ms-1-4',
            title: 'Creating a Node.js Microservice',
            status: 'not-started',
            resources: [
              'https://nodejs.org/en/docs/guides/nodejs-docker-webapp/',
              'https://www.freecodecamp.org/news/how-to-build-a-microservice-with-node-js/',
              'https://github.com/goldbergyoni/nodebestpractices',
              'https://expressjs.com/en/starter/hello-world.html',
              'https://www.youtube.com/watch?v=XUSHH0E-7zk'
            ]
          },
          {
            id: 'ms-1-5',
            title: 'Designing a Microservice Architecture for a sample application',
            status: 'not-started',
            resources: [
              'https://microservices.io/patterns/decomposition/decompose-by-business-capability.html',
              'https://docs.microsoft.com/en-us/azure/architecture/microservices/',
              'https://www.nginx.com/blog/building-microservices-using-an-api-gateway/',
              'https://github.com/sqshq/PiggyMetrics',
              'https://medium.com/design-microservices-architecture-with-patterns'
            ]
          },
          {
            id: 'ms-1-6',
            title: 'Role of package.json in Each Microservice',
            status: 'not-started',
            resources: [
              'https://docs.npmjs.com/cli/v8/configuring-npm/package-json',
              'https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/',
              'https://github.com/npm/cli/blob/latest/docs/content/configuring-npm/package-json.md',
              'https://www.freecodecamp.org/news/package-json-explained/',
              'https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/'
            ]
          },
          {
            id: 'ms-1-7',
            title: 'What is Inter-Service Communication?',
            status: 'not-started',
            resources: [
              'https://microservices.io/patterns/communication-style/messaging.html',
              'https://docs.microsoft.com/en-us/dotnet/architecture/microservices/architect-microservice-container-applications/communication-in-microservice-architecture',
              'https://martinfowler.com/articles/microservices.html#DecentralizedGovernance',
              'https://www.nginx.com/blog/building-microservices-inter-process-communication/',
              'https://medium.com/microservices-architecture/inter-service-communication-in-microservices-8b84c2d83d5e'
            ]
          },
          {
            id: 'ms-1-8',
            title: 'Communication Patterns (Synchronous vs Asynchronous)',
            status: 'not-started',
            resources: [
              'https://microservices.io/patterns/communication-style/request-response.html',
              'https://microservices.io/patterns/communication-style/messaging.html',
              'https://docs.microsoft.com/en-us/azure/architecture/microservices/design/interservice-communication',
              'https://martinfowler.com/articles/microservices.html#SynchronousCallsConsideredHarmful',
              'https://blog.christianposta.com/microservices/the-hardest-part-about-microservices-data/'
            ]
          },
          {
            id: 'ms-1-9',
            title: 'Role of an API Gateway in Microservices',
            status: 'not-started',
            resources: [
              'https://microservices.io/patterns/apigateway.html',
              'https://www.nginx.com/blog/building-microservices-using-an-api-gateway/',
              'https://aws.amazon.com/api-gateway/',
              'https://konghq.com/learning-center/api-gateway/',
              'https://docs.microsoft.com/en-us/azure/architecture/microservices/design/gateway'
            ]
          },
          {
            id: 'ms-1-10',
            title: 'Setting Up an API Gateway with Express.js',
            status: 'not-started',
            resources: [
              'https://expressjs.com/en/guide/routing.html',
              'https://github.com/expressjs/express',
              'https://www.npmjs.com/package/http-proxy-middleware',
              'https://github.com/chimurai/http-proxy-middleware',
              'https://www.youtube.com/watch?v=6w6VaLbFcgI'
            ]
          },
          {
            id: 'ms-1-11',
            title: 'Microservices and Proxying Requests',
            status: 'not-started',
            resources: [
              'https://www.npmjs.com/package/http-proxy-middleware',
              'https://github.com/nodejitsu/node-http-proxy',
              'https://nginx.org/en/docs/http/ngx_http_proxy_module.html',
              'https://traefik.io/traefik/',
              'https://docs.envoyproxy.io/en/latest/'
            ]
          },
          {
            id: 'ms-1-12',
            title: 'Rate Limiting and Authentication in API Gateway',
            status: 'not-started',
            resources: [
              'https://www.npmjs.com/package/express-rate-limit',
              'https://github.com/animir/node-rate-limiter-flexible',
              'https://jwt.io/introduction/',
              'https://www.passportjs.org/',
              'https://auth0.com/docs/quickstarts'
            ]
          },
          {
            id: 'ms-1-13',
            title: 'REST APIs for Communication',
            status: 'not-started',
            resources: [
              'https://restfulapi.net/',
              'https://developer.mozilla.org/en-US/docs/Glossary/REST',
              'https://www.redhat.com/en/topics/api/what-is-a-rest-api',
              'https://github.com/microsoft/api-guidelines',
              'https://swagger.io/specification/'
            ]
          },
          {
            id: 'ms-1-14',
            title: 'Understanding Message Brokers (e.g., Redis Pub/Sub)',
            status: 'not-started',
            resources: [
              'https://redis.io/topics/pubsub',
              'https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html',
              'https://kafka.apache.org/documentation/',
              'https://github.com/NodeRedis/node-redis',
              'https://aws.amazon.com/sqs/'
            ]
          },
          {
            id: 'ms-1-15',
            title: 'Event-Driven Communication with Redis or RabbitMQ',
            status: 'not-started',
            resources: [
              'https://redis.io/topics/pubsub',
              'https://www.rabbitmq.com/getstarted.html',
              'https://github.com/squaremo/amqp.node',
              'https://microservices.io/patterns/data/event-driven-architecture.html',
              'https://martinfowler.com/articles/201701-event-driven.html'
            ]
          },
          {
            id: 'ms-1-16',
            title: 'OverView of Docker and Kubernetes',
            status: 'not-started',
            resources: [
              'https://docs.docker.com/get-started/',
              'https://kubernetes.io/docs/tutorials/kubernetes-basics/',
              'https://www.docker.com/resources/what-container',
              'https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/',
              'https://www.youtube.com/watch?v=fqMOX6JJhGo'
            ]
          },
          {
            id: 'ms-1-17',
            title: 'Using Docker for microservice',
            status: 'not-started',
            resources: [
              'https://docs.docker.com/language/nodejs/',
              'https://nodejs.org/en/docs/guides/nodejs-docker-webapp/',
              'https://github.com/nodejs/docker-node',
              'https://docs.docker.com/compose/',
              'https://www.youtube.com/watch?v=gAkwW2tuIqE'
            ]
          }
        ]
      }
    ]
  }
};

export default backendRoadmapData;