import axios from "axios";

export const getentry = user => {
  return axios
    .get("http://localhost:5000/listings/getentry", {
      headers: { "Content-Type": "application/json" }
    })
    .then(res => {
      return res.data;
    });
  /*.then(data => {
      console.log(data);
    });*/
};

export const setentry = user => {
  return axios
    .post(
      "http://localhost:5000/listings/setentry",
      {
        name: user.name,
        price:user.price,
        photo:user.photo,
        description:user.description,
        expiry_date:user.expiry_date,
        isDone: false
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(function(response) {
      console.log(response);
    });
};

export const deleteentry = user => {
  axios
    .delete(`http://localhost:5000/listings/deleteentry`, {
      headers: { "Content-Type": "application/json" }
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const updateentry = (user, id) => {
  return axios
    .put(
      `http://localhost:5000/listings/updateentry/${id}`,
      {
        name: user.name,
        price:user.price,
        photo:user.photo,
        description:user.description,
        expiry_date:user.expiry_date,
        isDone: false
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(function(response) {
      console.log(response);
    });
};