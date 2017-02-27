module.exports = function(app, express) {
  app.post('/api/submit', (req, res, next) => {
    if (req.body) {
      console.log('submission received', req.body);
      res.status(201).send({ success: 'Submission received!' });
    }
  });
};