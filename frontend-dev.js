import { createServer } from 'vite';

async function startFrontendServer() {
  const server = await createServer({
    // This will use the vite.config.ts in the root directory
    server: {
      port: 5000,
      host: '0.0.0.0',
    }
  });

  await server.listen();
  console.log('Frontend server running on http://localhost:5000');
}

startFrontendServer().catch(err => {
  console.error('Error starting frontend server:', err);
  process.exit(1);
});