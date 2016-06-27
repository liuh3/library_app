import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		deleteUser(currentUser){
			let confirmation = confirm("Are you sure you want to delete user?");
			if (confirmation){
				currentUser.destroyRecord().then(()=>
					this.transitionTo('admin.users'));
			}
		}
	}

});