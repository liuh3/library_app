import Ember from 'ember';

export default Ember.Controller.extend({
	loginEmail: '',
	loginPassword: '',	
	responseMessage:'',
	isValidEmail: Ember.computed.match('loginEmail',  /^.+@.+\..+$/),
	isInvalidEmail: Ember.computed.not('isValidEmail'),
	isInvalidPassword: Ember.computed.empty('loginPassword'),
	isInvalid: Ember.computed.and('isInvalidEmail', 'isInvalidPassword'),

	actions: {

		login(){
			const email = this.get('loginEmail');
			const password = this.get('loginPassword');
			var exist = false;
			var response = '';
			this.store.query('user',{}).then(function(users){
				users.forEach(function (user){
					if(user.get('email') === email && user.get('password') === password){
						exist = true;
						response = "User email does not exists";
					}else{
						response = "You have successfully logged in";
					}
				});
			});

			//set current user to emial, password
			this.set('responseMessage', response);
		},

		signUp(){
			this.transitionTo('signUp');
		},
		logOut(){
			//set current user to empty
			//redirect to signin page
			this.transitionTo('login');
		}
	}

});
