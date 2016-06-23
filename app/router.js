import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');

  this.route('admin', function() {
    this.route('invitations');
    this.route('contacts');
    this.route('seeder');
    this.route('users', function(){
      this.route('edit',{path:'/:user_id/edit'});
    });
  });

  this.route('libraries', function(){
  	this.route('new');
    this.route('edit', {path:'/:library_id/edit'});
  });

  this.route('authors');
  this.route('books');
  this.route('login');
  this.route('signUp');
  this.route('profile');
});

export default Router;
