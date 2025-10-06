const SpacingDemo = () => {
  const spacingTokens = [
    { token: "xs", value: "4px", usage: "Tight spacing, small gaps" },
    { token: "sm", value: "8px", usage: "Small spacing, button padding" },
    { token: "md", value: "12px", usage: "Medium spacing, form elements" },
    { token: "lg", value: "16px", usage: "Large spacing, card padding" },
    { token: "xl", value: "20px", usage: "Extra large spacing" },
    { token: "2xl", value: "24px", usage: "Section spacing" },
    { token: "3xl", value: "32px", usage: "Page-level spacing" },
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
        Spacing Scale Visualization
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {spacingTokens.map(({ token, value, usage }) => (
          <div
            key={token}
            style={{ display: "flex", alignItems: "center", gap: "16px" }}
          >
            <div
              style={{
                width: "60px",
                height: "20px",
                backgroundColor: "#3b82f6",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "12px",
                fontWeight: "500",
                minWidth: "60px",
              }}
            >
              {token}
            </div>
            <div
              style={{
                width: value,
                height: "20px",
                backgroundColor: "#6b7280",
                borderRadius: "2px",
                position: "relative",
              }}
            />

            <div
              style={{
                fontSize: "11px",
                color: "#6b7280",
                fontWeight: "500",
              }}
            >
              {value}
            </div>
            <div style={{ flex: 1, fontSize: "14px", color: "#6b7280" }}>
              {usage}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpacingDemo;
