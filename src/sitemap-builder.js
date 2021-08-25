require("babel-register")({
    presets: ["es2015", "react"]
  });

  require.extensions['.css'] = function () {
    return null;
  };
  require.extensions['.png'] = function () {
    return null;
  };
  require.extensions['.jpg'] = function () {
    return null;
  };
  
  const router = require('../router').default;
  const Sitemap = require('react-router-sitemap').default;
  
  (
      new Sitemap(router)
          .build('https://www.pechemelba.fr')
          .save('./public/sitemap.xml')
  );

  