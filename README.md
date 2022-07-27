<body style="scroll-behaviour:'smooth'">
<p align="center">
  <a href="" rel="noopener">
 <img style="border-radius:100%;" width=200px height=200px src="https://play-lh.googleusercontent.com/1nfAdJs2Ep2q1skM7QwJ1uHooWSbpFkbIBHhAX6EmdzEKmtk42713TiTU28mWlkcFKPA" alt="Project logo"></a>
</p>

<h3 align="center">file-manipulations-sdk</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/mugishap/file-manipulations-sdk.svg)](https://github.com/mugishap/file-manipulations-sdk/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/mugishap/file-manipulations-sdk.svg)](https://github.com/mugishap/file-manipulations-sdk/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Few lines describing your project.
    <br>
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Built Using](#built_using)
- [Contributing](#deployment)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a id = "about"></a>

This is a simple API that allows you to manipulate files. This is mostly for excel file where you can manipulate the data using mysql database. It is currently under construction

## 🏁 Getting Started <a id = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

## 🚀 Demo <a id = "demo"></a>
This is a demo of how the API works
[![Watch the video](https://res.cloudinary.com/precieux/image/upload/v1658834296/Screenshot_from_2022-07-26_13-16-27_a6mwsz.png)](https://res.cloudinary.com/precieux/video/upload/v1658833288/file-manipulations-sdk_preview_qxnj4s.webm)

### Prerequisites

What things you need to test of use the API and how to install prerequisites.

```
Great API tester such as Postman, Thunder Client or Postcode.
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Say what the step will be

```
Go to the '/getauthentication' to get Authorization key
```

And then

```
you can use the key to get the data and manipulate any data
```

# Example

    ```
    curl -X GET -H "Authorization: Bearer <your_key>" https://xcel-db-manager.herokuapp.com/getalldata
    ```

## 🔧 Running the tests <a id = "tests"></a>

How to run the automated tests for this system.

    ```
    curl -X GET -H https://xcel-db-manager.herokuapp.com/getauthentication
    ```

## 🎈 Usage <a id="usage"></a>

You can use the API to manipulate the data. BaseURL is https://xcel-db-manager.herokuapp.com/

## 📝 Endpoints <a id="endpoints"></a>
Get authentication key
```
curl -X GET https://xcel-db-manager.herokuapp.com/getauthentication
```
Get all data

    ```
    curl -X GET -H "Authorization: Bearer <your_key>" https://xcel-db-manager.herokuapp.com/getalldata
    ```
Upload excel file
    ```
    curl -X POST -H "Authorization: Bearer <your_key>" -F "file=@<path_to_file>" https://xcel-db-manager.herokuapp.com/uploadexcel
    ```
## 🚀 Deployment <a id = "deployment"></a>

This API is not currently not available for public contributions.

## ⛏️ Built Using <a id = "built_using"></a>

- [MySQL](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [XLSX](https://nodejs.org/en/) - File Parsing

## ✍️ Authors <a id = "authors"></a>

- [@mugishap](https://github.com/mugishap) - Idea & Initial work

See also the list of [contributors](https://github.com/mugishap/file-manipulations-sdk/contributors) who participated in this project.

## 🎉 Acknowledgements <a id = "acknowledgement"></a>

- Easy excel file manipulation for businesses.
- Inspiration
- References
</body>
