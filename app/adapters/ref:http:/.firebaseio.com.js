import Firebase from 'firebase';
import FirebaseAdapter from 'emberfire/adapters/firebase';
export default FirebaseAdapter.extend({
  firebase: new Firebase('https://<YOUR-FIREBASE-APP>.firebaseio.com/')
});