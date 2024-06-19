import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


const baseConfig = defineConfig({
  plugins: [react()],
});


export default {
  ...baseConfig,
  build: {
    outDir: 'build', // Specify the output directory
  },
  // Other configurations as needed
};
