module.exports = {
  extends: ['./base.js'],
  env: {
    node: true,
  },
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
  },
};
