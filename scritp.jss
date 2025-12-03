document.getElementById("go-btn").onclick = () => {
    const url = document.getElementById("url-input").value.trim();

    if (!url) return;

    document.querySelector(".center").style.display = "none";
    const iframe = document.getElementById("webframe");

    // Only normal iframe load – NO bypass
    iframe.src = url.startsWith("http") ? url : "https://" + url;
    iframe.style.display = "block";
};

document.getElementById("accept-rules").onclick = () => {
    document.getElementById("rules-overlay").style.display = "none";
};
