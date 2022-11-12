# Node
Multithreading in Node.js
Set up application: npm install (Install all required package)

#Case1: Work with promise to avoid blocking but did't work
node promise.js
#After server is ready open http://localhost:3000/blocking in one tab of the browser and in open http://localhost:3000/non-blocking in another tab(It will take 20sec to complete)

#Case 2: Fix the issue of blocking thread using worker thread
node index.js

#Case 2: Fix the issue of blocking thread using multiple worker thread. It will reduce 70% of the execution time.
node index_four_workers.js
