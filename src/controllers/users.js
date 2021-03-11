const { User } = require('../models');

const create = async (req, res) => {
  const user = new User(req.body);

  if(ageIsValid(user.age) && dniIsValid(user.dni)) {
    const data = await user.save();

    const response = {
      status: 'success',
      data: {
        users: [data]
      }
    };
    res.json(response);
  }
  else if(!ageIsValid(user.age) && !dniIsValid(user.dni)){
    const response = {
      status: 'error',
      error: {
        message: 'Age must be a number and invalid DNI'
      }
    };
    res.json(response);
  }
  else if(!ageIsValid(user.age)){
    const response = {
      status: 'error',
      error: {
        message: 'Age must be a number'
      }
    };
    res.json(response);
  }
  else if(!dniIsValid(user.dni)){
    const response = {
      status: 'error',
      error: {
        message: 'Invalid DNI'
      }
    };
    res.json(response);
  }
}

const all = async (req, res) => {
  const users = await User.find();
  const response = {
    status: 'success',
    data: {
      users
    }
  };
  res.json(response);
}

const get = async (req, res) => {
  const dni = req.params.dni;
  try {
    const user = await User.findOne({"dni": dni});
    const response = {
      status: 'success',
      data: {
        users: [user]
      }
    };
    res.json(response);
  }
  catch (e){
    const response = {
      status: 'error',
      error: {
        message: 'DNI not found'
      }
    };
    res.json(response);
  }
}

const update = async (req, res) => {
  const dni = req.params.dni;
  const data = req.body;
  const user = await User.findOne({"dni": dni});
  if (ageIsValid(data.age) && dniIsValid(data.dni)) {

    user.name = data.name;
    user.age = data.age;
    user.dni = data.dni;
    const userData = await user.save();

    const response = {
      status: 'success',
      data: {
        users: [userData]
      }
    };

    res.json(response);
  } else if (!ageIsValid(user.age) && !dniIsValid(user.dni)) {
    const response = {
      status: 'error',
      error: {
        message: 'Age must be a number and invalid DNI'
      }
    };
    res.json(response);
  } else if (!ageIsValid(user.age)) {
    const response = {
      status: 'error',
      error: {
        message: 'Age must be a number'
      }
    };
    res.json(response);
  } else if (!dniIsValid(user.dni)) {
    const response = {
      status: 'error',
      error: {
        message: 'Invalid DNI'
      }
    };
    res.json(response);
  }
}

const remove = async (req, res) => {
  const dni = req.params.dni;
  try {
    const user = await User.findOne({"dni": dni});
    await User.remove({_id: user._id});

    const response = {
      status: 'success',
      data: {}
    };

    res.json(response);
  }
  catch (e){
    const response = {
      status: 'error',
      error: {
        message: 'DNI not found'
      }
    };
    res.json(response);
  }
}

function ageIsValid(age) {
  const isANumber = typeof(age) === "number";
  return isANumber
}

function dniIsValid(dni) {
  const regexDNI = /^[A-Z][A-Z][A-Z][0-9][0-9][a-z][0-9]/;
  const isAValidDNI = regexDNI.test(dni)
  return isAValidDNI
}

module.exports = {
  create,
  all,
  get,
  update,
  remove
}