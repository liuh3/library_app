import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		return this.store.findRecord('user', params.user_id);
	},
	
	actions: {
		saveUser(newUser){
			newUser.save().then(() => 
				this.transitionTo('admin.users.profile', newUser.id));
		},
		willTransition(transition){
			let model = this. controller.get('model');

			// user modified something but did not save -> dirty checking
			if(model.get('hasDirtyAttributes')){
				let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");
				if (confirmation){
					model.rollbackAttributes();
				}else{
					transition.abort();
				}
			}
		}
	}
});