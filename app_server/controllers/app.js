module.exports.index = function(req, res, next) {
    res.render('index', { 
        title: 'Express',
        metaAuthor: 'Leonardo Felipa',
        metaDescription: 'Boilerplate',
        metaKeywords: 'Boilerplate, HTML5, CSS3, ExpressJS, NodeJS, Mongo, Mongoose, Angular'
    });
}