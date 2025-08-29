// সব Love বাটন সিলেক্ট করবো
const loveBtns = document.querySelectorAll(".loveBtn");
const loveCount = document.getElementById("loveCount");
loveBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let current = parseInt(loveCount.innerText);
    loveCount.innerText = current + 1;
  });
});
const callBtns = document.querySelectorAll(".callBtn");
const coinCount = document.getElementById("coinCount");

callBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let current = parseInt(coinCount.innerText);
    if (current > 0) {
      coinCount.innerText = current - 20;
      alert("Calling service...");
    } else {
      alert("Not enough coins!");
    }
  });
});

const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const textToCopy = document.getElementById(targetId).innerText;

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert("Copied: " + textToCopy);
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  });
});
let copyCounter = 0;
const copyCountElement = document.getElementById("copyCount");

copyButtons.forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const textToCopy = document.getElementById(targetId).innerText;

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        copyCounter++;
        copyCountElement.innerText = copyCounter;
        alert("Copied: " + textToCopy);
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  });
});

const callButtons = document.querySelectorAll(".call-btn");
const callHistoryList = document.getElementById("callHistory");
const clearBtn = document.getElementById("clearBtn");

callButtons.forEach(button => {
  button.addEventListener("click", () => {
    const userName = button.getAttribute("data-user");
    const currentTime = new Date().toLocaleTimeString();

    alert("Calling " + userName);

  
    if (callHistoryList.querySelector("p")) {
      callHistoryList.innerHTML = "";
    }

    
    const div = document.createElement("div");
    div.className = "flex justify-between p-2 border rounded";
    div.innerHTML = `
      <span>${userName}</span>
      <span class="text-gray-500">${currentTime}</span>
    `;

    callHistoryList.appendChild(div);
  });
});

clearBtn.addEventListener("click", () => {
  callHistoryList.innerHTML = `<p class="text-gray-400">No calls yet.</p>`;
});

