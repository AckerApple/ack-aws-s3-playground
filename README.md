# ack-aws-s3-playground
A package with tests and examples for learning how aws s3 connections are handled in NodeJs and Javascript

### Table of Contents
- [OS Install Dependencies](#os-install-dependencies)
- [Installation](#installation)
- [Install Local Folder Dependencies](#install-local-folder-dependencies)
- [Run Tests and Scripts](#run-tests-and-scripts)


## OS Install Dependencies
Downloading NodeJs 6+ is required

[Tap here to download NodeJs](https://nodejs.org/)

## Installation
Open a command terminal interface and navigate to a desired folder path to install files locally

> Please choose one of the following install methods

- Install via GIT
```
git clone "https://github.com/AckerApple/ack-aws-s3-playground.git"
```
- Install via Download
  - Goto [ack-aws-s3-playground](https://github.com/AckerApple/ack-aws-s3-playground) and find download button

## Install Local Folder Dependencies
At this point, you should have a command terminal open to a folder named "ack-aws-s3-playground"
> In command terminal, type the following command

```
npm install
```
>> be sure that you are targeted WITH-IN the ack-aws-s3-playground folder, when running the above command

## Run Tests and Scripts
Currently, only manual scripts exists, no tests have been created to test the expectations of this package

### Run All Scripts
After a script runs, watch the console for instructions on success or failure

> In command terminal, type the following command
>> An error is expected for atleast the first TWO times you run this script, follow the onscreen instructions to set aws & s3 access credentials

```
npm run all
```

### Run Selected Script
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