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
			var currentUser = '';
			var store = this.get('store');
			var _self = this;
			var message = '';

			this.store.query('user',{}).then(function(users){
				users.forEach(function (user){
					if(user.get('email') === email && user.get('password') === password){
						exist = true;
					}
				});
			}).then(function() {
				if(exist===true){
					currentUser = {email: email, password: password, firstName: '', lastName:'', summary:''};
					message = 'You have logged in';
					store.query('current-user',{}).then(function (current){
						console.log(current);		
					});
					
				}else{
					currentUser = null;
					message = 'Incorrect information';
				}
				store.createRecord('current-user', currentUser).save();
				_self.set('responseMessage', message);
			});
		},
		logOut(){
				//set current user to empty
				//redirect to signin page
				store.
				this.transitionToRoute('login');
			}
		}

	});
