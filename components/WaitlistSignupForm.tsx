import { useState } from "react";

export const WaitlistSignupForm = ({ onCancel }: { onCancel: () => void }) => {
  const [email, setEmail] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/waitlist-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, organizationName }),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      setStatus("success");
      setEmail("");
      setOrganizationName("");
    } catch (error) {
      setStatus("error");
      console.error("Signup error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <p>Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ height: "34px", width: "300px", borderRadius: "4px" }}
            required
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <p>Organization name</p>
          <input
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
            style={{ height: "34px", width: "300px", borderRadius: "4px" }}
            required
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <button
            style={{
              padding: "6px",
              color: "#213C66",
              borderRadius: "4px",
            }}
            type="submit"
            disabled={status === "loading"}
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            style={{
              padding: "6px",
              color: "white",
              borderRadius: "4px",
              backgroundColor: "#213C66",
            }}
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Signing up..." : "Sign up"}
          </button>
        </div>
        {status === "success" && <p>You are on the waitlist!</p>}
        {status === "error" && <p>Something went wrong. Please try again.</p>}
      </div>
    </form>
  );
};
