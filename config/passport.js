var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var findOrCreate = require('mongoose-findorcreate');
var mongoose = require('mongoose');

module.exports = function() {
	
	var Usuario = mongoose.model('Usuario');
	
	if (process.env.OPENSHIFT_NODEJS_PORT) {
	passport.use(new GitHubStrategy({
		clientID: 'ae2ae332ca5550afd9cf',
		clientSecret: '22a6551fcc5a746181375995062373dd437c04c1',
		callbackURL: 'http://web-contatoooh.rhcloud.com/auth/github/callback'
	}
	passport.use(new GitHubStrategy({
		clientID: 'ae2ae332ca5550afd9cf',
		clientSecret: '22a6551fcc5a746181375995062373dd437c04c1',
		callbackURL: 'http://localhost:3000/auth/github/callback'
	}, function(accessToken, refreshToken, profile, done) {
		
		Usuario.findOrCreate(
			{ "login" : profile.username}, 
			{ "nome" : profile.username},  
			function(erro, usuario) {
				if(erro) {
					return done(erro);
				} 
				return done(null, usuario);
			}
		);
	}));

	passport.serializeUser(function(usuario, done) {
	  done(null, usuario._id);
	});

	passport.deserializeUser(function(id, done) {
	  Usuario.findById(id).exec()
	  .then(function(usuario) {
	  	done(null, usuario);	
	  });
	});
};
