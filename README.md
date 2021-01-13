# Login Challenge  &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)
> Additional information or tag line

This project is a login form using ReactJs that aims to employ knowledge of testing, validation and componentization.

## Installing / Getting started

A quick introduction of the minimal setup you need to get a hello world up &
running.

```shell
npm i
npm start
```
or
```shell
yarn
yarn start
```

When executing the command all project dependencies will be installed and the program will be started

## Developing

### Built With
- "@reduxjs/toolkit": "^1.1.0",
- "@storybook/cli": "^6.1.11",
- "@testing-library/react": "^9.3.2",
- "date-fns": "^2.16.1",
- "formik": "^2.2.6",
- "polished": "^4.0.5",
- "prop-types": "^15.7.2",
- "react": "^17.0.1",
- "react-icons": "^4.1.0",
- "react-input-mask": "^2.0.4",
- "react-redux": "^7.1.3",
- "react-router-dom": "^5.2.0",
- "styled-components": "^5.2.1",
- "yup": "^0.32.8"

### Prerequisites
NodeJS: https://nodejs.org/en/

### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/flavioms/login-challenge
cd login-challenge/
packagemanager install
```

## Tests

To run the tests run the command below

```shell
npm test
```
or
```shell
yarn test
```
Input Test - Tests possible situations that may occur with the input components
Button Test - Tests possible situations that may occur with the button components
Confirm Test - Tests possible situations that may occur with the confirm component
Toast Test - Tests possible situations that may occur with the toast component
Form Test - Tests filling and sending the form completely


## Style guide

The styled components were used as a style pattern and as documentation it is possible to check in the storybook
```shell
npm storybook
```
or
```shell
yarn storybook
```
When executing this code the storybook page will be loaded with all the components defined
