// PM2 process configuration for the production server.
//
// Prerequisites:
//   npm install -g pm2      # once, if pm2 isn't installed
//   npm run build           # compile the production bundle (reads .env.local)
//
// Run it:
//   pm2 start ecosystem.config.js     # launch on port 3030
//   pm2 logs aditya-portfolio         # tail logs
//   pm2 restart aditya-portfolio      # restart after a rebuild
//   pm2 save && pm2 startup           # persist across reboots
//
// Port/env live here (not in .env.*) because `next start` resolves the port
// from the process environment before dotenv files are loaded.
module.exports = {
  apps: [
    {
      name: "aditya-portfolio",
      cwd: __dirname,
      // Invoke the Next.js binary directly so PM2 manages a single node process.
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3030",
      interpreter: "node",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 3030,
      },
      error_file: "logs/pm2-error.log",
      out_file: "logs/pm2-out.log",
      time: true,
    },
  ],
};
