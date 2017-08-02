import express from 'express';
import { Article } from '../model';

const articles = express.Router();

// get specific article
articles.get('/:articleId', async (req, res) => {
	try {
		const article = Article.findOne({ _id: req.params.articleId });
		res.json(await article);
	}
	catch(e) {
		console.warn('articles', e);
		res.status(400).json({ message: 'wrong id format' });
	}
});
// get all articles
articles.get('/', async (req, res) => {
	res.json(await Article.find({}, { limit: 12 }));
});
// articles.get('/byTags/:tagList', (req, res) => res.json(req.params.tagList.split(',')) );


// // define the home page route
// apiRouter.get('/articles/:articleId?', async (req, res) => {
// 	// console.log(req.params);
// 	const { articleId } = req.params;
// 	// res.json(['dataed', articleId]);
// 	if (articleId)
// 		try {
// 			const article = Article.findOne({ _id: articleId });
// 			res.json(await article);
// 		}
// 		catch(e) {
// 			console.warn(e);
// 			res.status(400).json({ message: 'wrong id format' });
// 		}
// 	else
// 		res.json(await Article.find({}, { limit: 12 }));
// });

export default articles;
