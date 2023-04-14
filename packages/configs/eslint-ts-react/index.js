// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@dry/configs-eslint-ts');

module.exports = {
  extends: ['@rushstack/eslint-config/mixins/react'],

  settings: {
    react: {
      version: 'detect'
    }
  }
};
