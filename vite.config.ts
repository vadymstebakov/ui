import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgUse from '@svg-use/vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), svgUse()],
    build: {
        assetsInlineLimit(filePath) {
            return !filePath.endsWith('.svg');
        },
    },
});
