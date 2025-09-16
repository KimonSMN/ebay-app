import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

    if (res.status === 403) return alert("Your account is awaiting approval.");
    if (!res.ok) return alert(data.message || "Login failed.");
    navigate("/main", { replace: true });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/signup", {
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

      const data = await res.json();

      if (res.status === 409) {
        alert("Username already exists");
        return;
      }
      if (res.status === 400) {
        alert(data.message);
        return;
      }
      if (!res.ok) {
        alert(data.message || "Unexpected error");
        return;
      }

      // Success
      alert(data.message);
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setActiveTab("signIn");
    } catch (err) {
      console.error(err);
      alert("Network error");
    }
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
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />

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

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />

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
