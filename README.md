# CRUD ME_N API
Using MongoDB, Express & Node

## Description

User is composed by name, age and dni

DNI must have this format: 3 capital, 2 numbers, 1 lowercase letter & a number

Examples:   EEE85a2
            AGH01d0
            PPL00z9

### Create:

method: POST

route: /user

### Read:

method: GET

route#0: /users

route#1: /users/:dni

### Update:

method: PUT

route: /user/:dni

### Delete:

method: DELETE

route: /user/:dni
