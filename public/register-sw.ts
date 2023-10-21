if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.ts", { scope: "/" })
        .then((registration) => {
          console.log("Service worker registration succeeded:", registration);
        })
        .catch((error) => {
          console.error(`Service worker registration failed: ${error}`);
        });
    });
  
    // Handle when the page is offline
    window.addEventListener("offline", () => {
      const offlinePage = document.createElement("div");
      offlinePage.innerHTML = `
      <div className="flex items-center justify-center h-screen mx-auto bg-black">
        <h1 className="text-xl font-bold text-gray-700">You are offline</h1>
        <p className="text-lg font-bold text-gray-300">Please check your internet connection. Larn Code Platform only work online for now, Thank you</p>
        </div>
      `;
      document.body.appendChild(offlinePage);
    });
  
    // Handle when the page is online again
    window.addEventListener("online", () => {
      const offlinePage = document.querySelector("#offline-page");
      if (offlinePage) {
        offlinePage.remove();
      }
    });
  } else {
    console.error("Service workers are not supported.");
  }