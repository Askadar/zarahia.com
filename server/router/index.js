import express from 'express';

const apiRouter = express.Router();

import articles from './articles';
apiRouter.use('/articles', articles);


export { apiRouter };
