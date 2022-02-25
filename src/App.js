import React, { useState } from "react";
import "./styles.css";

import "./App.css";
import PlayerForm from "./components/PlayerForm";
import * as yup from "yup";
import formSchema from "./validation/formSchema";
import axios from "axios";

const initialsValues = {
  name: "",
  email: "",
  password: "",
  tos: "",
};

const initialFormErros = {
  name: "",
  email: "",
  password: "",
  terms: "",
  tos: "",
};

function App() {
  const [playerValue, setPlayerValue] = useState(initialsValues);

  const [formErrors, setFormErrors] = useState(initialFormErros);
  const [users, setUsers] = useState([]);

  const handleSubmit = () => {
    axios.post("https://reqres.in/api/users", playerValue).then((res) => {
      setUsers([res.data, ...users])
        .catch((err) => console.erros(err))
        .finally(() => setPlayerValue(initialsValues));
    });
  };

  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const handleChange = (name, value) => {
    validate(name, value);
    setPlayerValue({ ...playerValue, [name]: value });
  };

  return (
    <div className="App">
      <h1>Hello World!!!</h1>

      <PlayerForm
        values={initialsValues}
        change={handleChange}
        submit={handleSubmit}
        erros={formErrors}
      />

      {users.map((element, index) => {
        return (
          <div key={index} className='playersinf'>
            <p>{element.name}</p>
            <p>{element.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
