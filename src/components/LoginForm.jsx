import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [activeTab, setActiveTab] = React.useState("signIn");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [vat, setVat] = useState("");

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: loginUsername,
        password: loginPassword,
      }),
    });

    const data = await res.json();

    if (res.status === 403) {
      navigate("/pending-approval", {
        replace: true,
        state: { username: loginUsername },
      });
      return;
    }
    if (!res.ok) {
      alert(data.message || "Login failed");
      return;
    }
    navigate("/main", { replace: true });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrors({});

    let res, data;
    try {
      res = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          confirmPassword,
          name,
          surname,
          email,
          tel,
          address,
          country,
          vat,
        }),
      });
      try {
        data = await res.json();
      } catch {
        data = {};
      }
    } catch (err) {
      console.error(err);
      alert("Network error");
      return;
    }

    if (res.status === 409) {
      const code = data.code || "";
      const msg = (data.message || "").toLowerCase();

      if (code === "USERNAME_TAKEN" || msg.includes("username")) {
        setErrors({
          username:
            "That username is already in use. Please choose a different one.",
        });
        return;
      }
      if (code === "EMAIL_TAKEN" || msg.includes("email")) {
        setErrors({
          email: "That email is already registered. Try another email address.",
        });
        return;
      }
      alert(data.message || "Conflict");
      return;
    }

    if (res.status === 400) {
      alert(data.message || "Please review your inputs.");
      return;
    }

    if (!res.ok) {
      alert(data.message || "Unexpected error");
      return;
    }

    alert(data.message || "Account created.");
    // clear form…
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setName("");
    setSurname("");
    setEmail("");
    setTel("");
    setAddress("");
    setCountry("");
    setVat("");
    setErrors({});
    setActiveTab("signIn");
  };

  return (
    <div className="mt-20 flex items-center justify-center px-4">
      <div className="max-w-sm bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-sky-500 text-center ">
          Welcome Back!
        </h2>
        <h2 className="text-sm text-gray-500 text-center ">
          Sign in to your account
        </h2>
        <div className="mt-3 flex bg-gray-100 rounded-sm h-10 justify-around items-center ">
          <button
            className={`ml-1 cursor-pointer text-sm font-medium w-1/2 h-8 flex items-center justify-center rounded-sm transition ${
              activeTab === "signIn"
                ? "bg-white text-black"
                : "bg-transparent text-gray-500"
            }`}
            onClick={() => setActiveTab("signIn")}
          >
            Sign in
          </button>
          <button
            className={`mr-1 cursor-pointer text-sm font-medium w-1/2 h-8 flex items-center justify-center rounded-sm transition ${
              activeTab === "register"
                ? "bg-white text-black"
                : "bg-transparent text-gray-500"
            }`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        {activeTab === "signIn" ? (
          <form onSubmit={handleLogin} className="mt-3 space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            />
            <div className="flex justify-between">
              <div>
                <label>
                  <input className="border-gray-300" type="checkbox" />
                  <span className="ml-1 text-gray-600">Remember me</span>
                </label>
              </div>
              <div className="text-gray-600">
                <Link to="/forgotpass">Forgot password?</Link>
              </div>
            </div>
            <button
              type="submit"
              className="cursor-pointer w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Sign In
            </button>
          </form>
        ) : activeTab === "register" ? (
          <form onSubmit={handleRegister} className="mt-3 space-y-3">
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (errors.username)
                    setErrors((p) => ({ ...p, username: undefined }));
                }}
                className={`w-full border p-2 rounded ${
                  errors.username ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-600">{errors.username}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border border-gray-300 p-2 rounded"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="First name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                className="border border-gray-300 p-2 rounded"
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email)
                    setErrors((p) => ({ ...p, email: undefined }));
                }}
                className={`w-full border p-2 rounded ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2">
              <input
                type="tel"
                placeholder="Telephone"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                placeholder="VAT"
                value={vat}
                onChange={(e) => setVat(e.target.value)}
                className="border border-gray-300 p-2 rounded"
              />
            </div>

            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            />

            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Create Account
            </button>
          </form>
        ) : null}
      </div>
    </div>
  );
};

export default LoginForm;
