import React from "react";
import '../styles.css'

const PlayerForm = (props) => {
	const {change, submit} = props;


  const onSubmit = (event) => {
    event.preventDefault();
	submit();
  };

  const onChange = (event) =>{
	  const {name, value, checked, type} = event.target;
	  const newVal = type === 'checkbox' ? checked : value;
	  change(name, newVal)
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="basic-inf">
        <label>
          {" "}
          Name
          <input  id="nameInput" value = {props.name} name="name" type="text" onChange={onChange}/>
        </label>

        <label>
          {" "}
          Email
          <input id="emailInput" value={props.email} name="email" type="email" onChange={onChange}/>
        </label>

        <label>
          {" "}
          Password
          <input id="passwordInput" value={props.password} name="password" type="password" onChange={onChange}/>
        </label>
      </div>

      <div className="role">
        <label> Terms Of Service:
		<input
      id="checkboxInput"
			type='checkbox'
			name='tos'
			values = {props.values.tos}
			onChange={onChange}
		/>
        </label>
        
      </div>

      <input  id='submit' className="submit" type="submit" value="Submit" onSubmit={onSubmit} />
    </form>
  );
};

export default PlayerForm;
