import Ember from 'ember';

export default Ember.Controller.extend({
	senderEmail:'',
	receiverEmail: '',
	emailSubject: '',
	sendMessage: '',
	responseMessage: '',

	isValidSenderEmail: Ember.computed.match('senderEmail',  /^.+@.+\..+$/),
	isValidReceiverEmail: Ember.computed.match('receiverEmail',  /^.+@.+\..+$/),
	isValidEmail: Ember.computed.and('isValidSenderEmail','isValidReceiverEmail'),

	isValidSubject: Ember.computed.notEmpty('emailSubject'),

	isValidMessage: Ember.computed.notEmpty('sendMessage.length'),
	isValid: Ember.computed.and('isValidEmail', 'isValidMessage', 'isValidSubject'),

	actions: {
		sendMessage(){
			const receiverEmail = this.get('receiverEmail');
			const senderEmail = this.get('senderEmail');
			const emailSubject = this.get('emailSubject');
			const message = this.get('sendMessage');

			const newMessage = this.store.createRecord('contact',{receiverEmail: receiverEmail, senderEmail: senderEmail, emailSubject: emailSubject, message: message});
			newMessage.save().then((response) => {
				this.set('responseMessage', `Your message has been sent to ${this.get('receiverEmail')} with the following id: ${response.get('id')}`);
				this.set('senderEmail','');
				this.set('receiverEmail', '');
				this.set('emailSubject','');
				this.set('sendMessage', '');
			});			
		}
	}

});
