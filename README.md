# ack-aws-s3-playground
A package with tests and examples for learning how aws s3 connections are handled in NodeJs and Javascript

This documentation is written as if you have never installed NodeJs previously.

### Table of Contents
- [Resources](#resources)
- [Installation](#installation)
    - [Installation Summary](#installation-summary)
    - [Step-by-Step](#stepbystep)
        - [OS Install Dependencies](#os-install-dependencies)
        - [Install ack-aws-s3-playground Code Package](#install-ack-aws-s3-playground-code-package)
        - [Install Browser Testing Dependencies](#install-browser-testing-dependencies)
        - [Install Local Folder Dependencies](#install-local-folder-dependencies)
- [Usage](#usage)
    - [Run Tests via Scripts](#run-tests-via-scripts)

## Resources
- [aws-sdk](https://www.npmjs.com/package/aws-sdk) - Used for node aws S3 communications
- [public test](https://ackerapple.github.io/ack-aws-s3-universal/) - Test your credentials and the underlining code this package depends upon
- [node-s3-encryption-client](#https://github.com/gilt/node-s3-encryption-client) Public code used to perform most KMS translations
- [ack-aws-s3-universal](#https://github.com/AckerApple/ack-aws-s3-universal) Package by Acker Apple that wraps KMS and S3 communications together

## Installation

### Installation Summary
The following steps will need to be, or have been performed before running scripts in this package

- Install NodeJs 6+
- Save ack-aws-s3-playground to a folder via GIT Check-out or via [download link](https://github.com/AckerApple/ack-aws-s3-playground)
- Use command terminal to have npm install the local dependencies of ack-aws-s3-playground

### Step-by-Step

#### OS Install Dependencies
Downloading NodeJs 6+ is required

[Tap here to download NodeJs](https://nodejs.org/)

#### Install ack-aws-s3-playground Code Package
Open a command terminal interface and navigate to a desired folder path to install files locally

> Please choose one of the following install methods

- Install via GIT
```
git clone "https://github.com/AckerApple/ack-aws-s3-playground.git"
```
- Install via Download
  - Goto [ack-aws-s3-playground](https://github.com/AckerApple/ack-aws-s3-playground) and find download button

#### Install Browser Testing Dependencies
(optional-browser-install) If you intend to test javascript S3 requests, in the browser, install the following dependencies

> In command terminal, type the following command

```
npm install -g ionic jspm
```
> The above command will globally install command line interface functionality for [jspm](https://www.npmjs.com/package/jspm) and [ionic](https://www.npmjs.com/package/ionic)

#### Install Local Folder Dependencies
At this point, you should have a command terminal open within a folder named "ack-aws-s3-playground"

> In command terminal, type the following command

```
npm install
```
>> be sure that you are targeted WITH-IN the ack-aws-s3-playground folder, when running the above command

(optional-browser-install) You will need to perform the following for browser testing

> In command terminal, type the following command

```
jspm install
```
> be sure that you installed the previous [above mentioned global installs](#install-browser-testing-dependencies)

## Usage
This is a stand-alone package and is not intended to be included in other projects. The objective is to run simple tests to confirm functionality and then possibly tweak code based on past results.

### Run Tests via Scripts
The terminology "test", here is to manually invoke a use-case rather than to run a set of unit-tests. Run any of the following commands to deduce the results.

> To understand what code files are run by terminal scripts, GOTO ./package.json and view the key "scripts".

#### Test AWS and S3Params Test Scripts
Use the following command to establish and test your keys, bucket, and such

> In command terminal, type the following command

```
npm run test:params
```

#### Run All Scripts
After a script runs, watch the console for instructions on success or failure

> In command terminal, type the following command

```
npm run all
```

#### Run a Selected Script
After a script runs, watch the console for instructions on success or failure

> In command terminal, type ONE of the following commands
>> An error is expected for atleast the first TWO times you run any script below, follow the onscreen instructions to set aws & s3 access credentials

```
npm run listBuckets
```
```
npm run putJson
```
```
npm run getJson
```
```
npm run putText
```
```
npm run getText
```
```
npm run putImage
```
```
npm run getImage
```