/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
  watchSchema: {
    url: 'http://martinakocht.test/api',
    headers: {
      Authentication(env) {
        return `Bearer ${env.GQL_TOKEN}`;
      }
    }
  },
  plugins: {
    'houdini-svelte': {}
  }
};

export default config;
