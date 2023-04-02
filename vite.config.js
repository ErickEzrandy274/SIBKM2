import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
		framework: "jest",
		setupFiles: ["./setupTests.js"],
		jest: {
			testEnvironment: "node",
			roots: ["<rootDir>/src"],
			testMatch: ["<rootDir>/src/**/*.test.js"],
			transform: {
				"^.+\\.jsx?$": "babel-jest",
			},
		},
	},
});
