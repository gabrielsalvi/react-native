module.exports = app => {
    app.get('/signup', app.api.user.list)
    app.post('/signup', app.api.user.save)
}