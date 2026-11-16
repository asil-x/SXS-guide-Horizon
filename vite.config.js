import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Đường dẫn tuyệt đối: site dùng URL thường (/guides/...), không còn dấu #.
  base: '/',
  plugins: [react()],
  build: { chunkSizeWarningLimit: 1500 },
});
