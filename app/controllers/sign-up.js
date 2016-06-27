import Ember from 'ember';

export default Ember.Controller.extend({
	signUpEmail: '',
	signUpPassword: '',	
	responseMessage:'',
	isValidEmail: Ember.computed.match('signUpEmail',  /^.+@.+\..+$/),
	isInvalidEmail: Ember.computed.not('isValidEmail'),
	isInvalidPassword: Ember.computed.empty('signUpPassword'),
	isInvalid: Ember.computed.and('isInvalidEmail', 'isInvalidPassword'),

	actions: {
		createAccount(){
			const email = this.get('signUpEmail');
			const password = this.get('signUpPassword');
			const newUser = this.store.createRecord('user',{email: email, password: password});
			newUser.save().then((response) =>{
				this.set('signUpEmail','');
				this.set('signUpPassword','');
				this.transitionToRoute('index');
			});
		}
	}

});
