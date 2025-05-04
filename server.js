import { createServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url to __dirname equivalent in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create a Vite dev server
async function startServer() {
  const server = await createServer({
    // Base directory containing your Vite configuration
    configFile: path.resolve(__dirname, 'vite.config.ts'),
    // Server options
    server: {
      port: 5000,
      host: '0.0.0.0',
    },
    // Enable HMR
    optimizeDeps: {
      force: true
    }
  });

  await server.listen();
  
  console.log(`Server running at http://localhost:5000`);
  console.log('Press Ctrl+C to stop');
}

startServer().catch(e => {
  console.error('Error starting dev server:', e);
  process.exit(1);
});