module.exports = (_, options) => {
  // An id is passed long with webpack configuration options
  // Removing it so that it only contains options valid to webpack-merge
  delete options.id;

  return {
    name: 'custom-docusaurus-plugin',
    configureWebpack: () => {
      return options;
    },
  };
};