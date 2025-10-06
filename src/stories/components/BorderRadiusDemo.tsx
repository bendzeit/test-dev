const BorderRadiusDemo = () => {
  const radiusTokens = [
    { token: "sm", value: "2px", usage: "Small elements, badges" },
    { token: "md", value: "4px", usage: "Buttons, inputs, cards" },
    { token: "lg", value: "8px", usage: "Larger containers" },
    { token: "xl", value: "12px", usage: "Modal dialogs" },
    { token: "full", value: "9999px", usage: "Circular elements" },
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
        Border Radius Examples
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "24px",
        }}
      >
        {radiusTokens.map(({ token, value, usage }) => (
          <div key={token} style={{ textAlign: "center" }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                backgroundColor: "#3b82f6",
                borderRadius: value === "9999px" ? "50%" : value,
                margin: "0 auto 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              {token}
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#111827",
                marginBottom: "4px",
              }}
            >
              {token}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#6b7280",
                marginBottom: "4px",
              }}
            >
              {value}
            </div>
            <div style={{ fontSize: "12px", color: "#6b7280" }}>{usage}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BorderRadiusDemo;
