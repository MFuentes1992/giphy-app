import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

serviceWorkerRegistration.register({
	onUpdate: async (registration) => {
		if (registration && registration.waiting) {
			registration.waiting.postMessage({ type: "SKIP_WAITING" });
			console.log("Cleaning cache");
			console.log("Cache:" + (await caches.keys()).toString());
			const keys = await caches.keys();
			keys.map(async (cache) => {
				console.log("Service Worker: Removing old cache: " + cache);
				return await caches.delete(cache);
			});
			window.location.reload();
		}
	},
});
