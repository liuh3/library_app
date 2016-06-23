import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  senderEmail: attr('string'),
  receiverEmail: attr('string'),
  emailSubject: attr('string'),
  message: attr('string')
});
