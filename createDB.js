var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./data/scoreboard.sqlite"
  },
  useNullAsDefault: true
});


knex.schema.dropTableIfExists('scores').then(function (resp) {
  return knex.schema.dropTableIfExists('users')
})
.then(function (resp) {
  return knex.schema.createTableIfNotExists('users', function(table) {
      table.string('id')
      table.string('name')
      table.string('email')
  })
})
.then(function (resp) {
  return knex.schema.createTableIfNotExists('scores', function(table) {
      table.string('userId')
      table.string('id')
      table.integer('score')
  })
}).then(function (resp) {
	process.exit()
})