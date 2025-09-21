// PendingApproval.tsx
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PendingApproval() {
  const navigate = useNavigate();
  const location = useLocation() as { state?: { username?: string } };

  const [loginUsername, setLoginUsername] = useState(
    location.state?.username ?? ""
  );
  const [loginPassword, setLoginPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: loginUsername,
        password: loginPassword,
      }),
      credentials: "include", // IMPORTANT if backend sets HttpOnly cookie
    });

    const data = await res.json().catch(() => ({}));

    if (res.status === 403) {
      alert("Your account is still awaiting approval.");
      return;
    }
    if (!res.ok) {
      alert(data.message || "Login failed.");
      return;
    }
    navigate("/main", { replace: true });
  };

  return (
    <div className="min-h-[60vh] grid place-items-center p-8 text-center">
      <form onSubmit={handleLogin} className="max-w-sm w-full space-y-3">
        <h1 className="text-2xl font-semibold">Waiting for Admin Approval</h1>
        <p className="opacity-80">
          You’ll get access as soon as you’re approved.
        </p>

        <input
          type="text"
          placeholder="Username"
          value={loginUsername}
          onChange={(e) => setLoginUsername(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />

        <button
          type="submit"
          className="cursor-pointer mt-2 px-4 py-2 rounded bg-black text-white w-full"
        >
          Check again
        </button>
      </form>
    </div>
  );
}
