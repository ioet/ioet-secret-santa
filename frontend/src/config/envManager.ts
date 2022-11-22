const EnvManager = {
  AUTH_URL: import.meta.env.VITE_AUTH_SERVICE_BACKEND_URL || '',
  BACKEND_URL: import.meta.env.VITE_BACKEND_URL || '',
  APP_NAME: import.meta.env.VITE_NAME || '',
  REGISTRATION_DEADLINE: import.meta.env.VITE_REGISTER_DEADLINE || '',
  GAME_DEADLINE: import.meta.env.VITE_GAME_DEADLINE || '',
};

export default Object.freeze(EnvManager);
