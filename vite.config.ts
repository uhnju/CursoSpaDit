import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'
import { env } from 'process';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react(), basicSsl()],
    resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js'], },
    base: `${env.VITE_URL_NATIVA_SPADIT}${env.VITE_BUILD_OURTDIR}`,
    server: {
     
      host: env.VITE_HOST,
      port: Number(env.VITE_PORT),
      https: env.VITE_PROTOCOL.startsWith("https") ? {} : false,
    }
  }
})
