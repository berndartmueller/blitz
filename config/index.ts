export const APP_CONFIG = {
  version: process.env.FH_VERSION,
  baseUrl: process.env.FH_BASE_URL || 'https://api.findheim.at',
  port: process.env.PORT || 8080,
};
