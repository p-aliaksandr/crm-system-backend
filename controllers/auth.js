module.exports.login = function(req, res) {
  res.status(200).json({ message: 'логин' })
}

module.exports.register = function(req, res) {
  res.status(200).json({ message: 'регистрация' })
}