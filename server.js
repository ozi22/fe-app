const express = require('express');
const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware').default;
const nextI18next = require('./i18n');
const { parse } = require('url');
const cookieParser = require('cookie-parser');
const dotEnvLoad = require('dotenv-load');

dotEnvLoad();

const port = process.env.NEXT_PUBLIC_PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  nextI18next.initPromise.then(() => {
    server.use(cookieParser());
    server.use(nextI18NextMiddleware(nextI18next));
    server.use('/public', express.static('public'));

    server.get(`*`, (req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;

      if (!pathname.startsWith('/_next') && !/\..{1,4}$/.test(pathname)) {
        app.render(req, res, `${pathname}`, parsedUrl.query);
      } else {
        handle(req, res, `/${parsedUrl.path}`);
      }
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${port}`);
    });
  });
});
