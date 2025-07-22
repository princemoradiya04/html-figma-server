document.getElementById("convert").onclick = async () => {
  const url = document.getElementById("url").value.trim();
  if (!url) {
    alert("Please enter a valid URL");
    return;
  }

  console.log(" Sending request to backend:", url);
  document.getElementById("convert").textContent = "Converting...";

  try {
    const res = await fetch("http://localhost:3001/convert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });

    const data = await res.json();
    console.log("✅ Backend response received:", data);

    console.log("📤 Sending data to Figma plugin:", data);

    parent.postMessage(
      { pluginMessage: { type: "html-nodes", nodes: data.children } },
      "*"
    );

    document.getElementById("convert").textContent = "Converted";
  } catch (err) {
    console.error(" Backend fetch failed:", err);
    alert("Conversion failed. Check Console and Backend.");
    document.getElementById("convert").textContent = "Try Again";
  }
};
