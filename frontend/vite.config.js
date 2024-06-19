import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Existing configuration
const baseConfig = defineConfig({
  plugins: [react()],
});

// Merge additional configuration
export default {
  ...baseConfig,
  build: {
    outDir: 'build', // Specify the output directory
  },
  // Other configurations as needed
};
