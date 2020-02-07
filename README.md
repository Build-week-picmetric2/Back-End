# Endpoint Documentation

## https://picmetric-demo.herokuapp.com/api/register

### POST request

```
{
email: 'emailHere',
username: 'usernameHere',
password: 'passwordHere',
}
```

## https://picmetric-demo.herokuapp.com/api/login

### POST request

```
{
username: 'usernameHere',
password: 'passwordHere'
}
```

## https://picmetric-demo.herokuapp.com/api/logout

### GET request

## https://picmetric-demo.herokuapp.com/api/photos

### GET request

```
headers: {
Authorization: token,
}
```

## https://picmetric-demo.herokuapp.com/api/photos/:id

### GET request

#### image_id should be added to end of URL

```
headers: {
Authorization: token,
}
```

// Returns data science information for a photo.

## https://picmetric-demo.herokuapp.com/api/photos

### POST request

```
headers: {
Authorization: token,
}
```

```
// Example of how to structure the image upload using fetch

const formdata = new FormData();
formdata.append("image", fileInput.files[0], "workplace-1245776_1920.jpg");

const requestOptions = {
method: 'POST',
headers: myHeaders,
body: formdata,
redirect: 'follow'
};

fetch("https://picmetric-demo.herokuapp.com/api/photos", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
```

## https://picmetric-demo.herokuapp.com/api/photos/:id

### PUT request

```
headers: {
Authorization: token,
}
//Must contain one or any combination of the following fields:
{
name: 'optional',
category: 'optional',
description: 'optional',
}
```

## https://picmetric-demo.herokuapp.com/api/photos/:id

### DELETE request

```
headers: {
Authorization: token,
}
```
