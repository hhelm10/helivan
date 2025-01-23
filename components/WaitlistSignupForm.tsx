"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const WaitlistSignupForm = () => {
  const router = useRouter();
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
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          width: "100%",
          fontSize: "20px",
          marginBottom: "12px",
          color: "white",
        }}
      >
        join waitlist
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            color: "white",
          }}
        >
          <p>email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              height: "34px",
              width: "300px",
              borderRadius: "4px",
              paddingLeft: "8px",
              color: "black",
            }}
            required
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            color: "white",
          }}
        >
          <p>org/affiliation</p>
          <input
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
            style={{
              height: "34px",
              width: "300px",
              borderRadius: "4px",
              paddingLeft: "8px",
              color: "black",
            }}
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
              borderRadius: "4px",
              color: "white",
            }}
            disabled={status === "loading"}
            onClick={() => router.push("/")}
          >
            back
          </button>
          <button
            style={{
              padding: "6px",
              borderRadius: "4px",
              color: "#213C66",
              backgroundColor: "white",
            }}
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "joining..." : "join"}
          </button>
        </div>
        {status === "success" && (
          <p style={{ color: "white" }}>you are on the waitlist! 🤙</p>
        )}
        {status === "error" && <p>something went wrong. please try again.</p>}
      </div>
    </form>
  );
};
