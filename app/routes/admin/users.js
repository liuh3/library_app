import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.findAll('user');
	},

	actions: {
		deleteUser(user){
			user.destroyRecord();
		},
		editUser(user){
			this.transitionTo('profile');
		}
	}
});

