import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    base: '/',
    optimizeDeps: {
        include: ['@minions-content-plans/sdk'],
    },
    build: {
        commonjsOptions: {
            include: [/content-plans/, /node_modules/],
        },
    },
});
