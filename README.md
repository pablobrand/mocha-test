# Project Title

POC for AWS + Mocha local dev 

## Description

This is an local aws simulation using ARC[https://arc.codes/docs/en/get-started/why-architect] and mocha + mochawesome (reporting) for the purpose of local development and initial poc setup of test suite.

## Overview

### General Setup
arc details[https://arc.codes/docs/en/get-started/project-manifest]
```bash
.
├── public .......... # Static assets (js, css, svg, images, etc.)
├── src
│   ├── shared ...... # Code shared by all Lambda functions
│   ├── views ....... # Code shared by HTTP GET Lambda functions
│   ├── plugins ..... # Modify anything Architect does; including generated CloudFormation
│   ├── http ........ # @http Lambda functions
│   ├── events ...... # @event Lambda functions
│   ├── queues ...... # @queue Lambda functions
│   ├── scheduled ... # @scheduled Lambda functions
│   ├── tables ...... # @table stream Lambda functions
│   └── ws .......... # @ws Lambda functions
└── app.arc
└── tests 
│   ├──  ......
```

### Preconditions

* Nodejs

### Installing

```bash
    npm install 
```

```bash
    npm run test 
```
* Note that the test will run arc automatically, then execute the given lambda function (in this case, under http folder)

If you want arc to run on seperate instance, outside of the test, run following commmand 
```bash
    npm start 
```


### Docker setup?? CI setup??

