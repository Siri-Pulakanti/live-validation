import { useState } from "react";
function Form() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(true);
  const [enableSubmit, setEnableSubmit] = useState(false);

  function handleNameChange(e) {
    const value = e.target.value;
    setUserName(value);

    if (value.length < 3) {
      setError("Name must be at least 3 characters long");
      setEnableSubmit(false);
    } else {
      setError("");
    }
    setEnableSubmit(value.length >= 3 && password.length >= 6);
  }

  function handlePwdChange(e) {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 6) {
      setError("Password must be at least 6 characters long");
    } else {
      setError("");
    }
    setEnableSubmit(userName.length >= 3 && value.length >= 6);
  }
  function handleBtnClick() {
    if (userName.length >= 3 && password.length >= 6) {
      setEnableSubmit(false);
      setUserName("");
      setPassword("");
      alert("Form Submitted");
    }
  }

  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={(e) => handleNameChange(e)}
        placeholder="Enter username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => handlePwdChange(e)}
        placeholder="Enter password"
        required
      />
      <button onClick={handleBtnClick} disabled={!enableSubmit}>
        Login
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Form;
