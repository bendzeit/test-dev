const ShadowDemo = () => {
  const shadowTokens = [
    {
      token: "sm",
      value: "0 1px 2px rgba(0, 0, 0, 0.05)",
      usage: "Subtle elevation",
      description: "For subtle depth and separation",
    },
    {
      token: "md",
      value: "0 4px 6px rgba(0, 0, 0, 0.1)",
      usage: "Cards, dropdowns",
      description: "For cards and interactive elements",
    },
    {
      token: "lg",
      value: "0 10px 15px rgba(0, 0, 0, 0.1)",
      usage: "Modals, overlays",
      description: "For elevated content and modals",
    },
    {
      token: "xl",
      value: "0 20px 25px rgba(0, 0, 0, 0.1)",
      usage: "High elevation",
      description: "For maximum depth and focus",
    },
  ];

  return (
    <div
      style={{
        padding: "24px",
        backgroundColor: "#f9fafb",
        borderRadius: "8px",
      }}
    >
      <h3 style={{ marginBottom: "24px", color: "#111827" }}>
        Shadow Elevation System
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "24px",
        }}
      >
        {shadowTokens.map(({ token, value, usage, description }) => (
          <div key={token} style={{ textAlign: "center" }}>
            <div
              style={{
                width: "120px",
                height: "80px",
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: value,
                margin: "0 auto 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#111827",
                fontSize: "14px",
                fontWeight: "500",
                position: "relative",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    marginBottom: "4px",
                  }}
                >
                  {token}
                </div>
                <div style={{ fontSize: "10px", color: "#6b7280" }}>
                  {usage}
                </div>
              </div>
            </div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: "600",
                color: "#111827",
                marginBottom: "4px",
              }}
            >
              {token}
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "#6b7280",
                marginBottom: "8px",
                fontFamily: "monospace",
              }}
            >
              {value}
            </div>
            <div style={{ fontSize: "12px", color: "#6b7280" }}>
              {description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShadowDemo;
