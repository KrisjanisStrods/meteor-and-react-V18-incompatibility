import { Meteor } from 'meteor/meteor';
// import { publishComposite } from 'meteor/reywood:publish-composite';
import { LinksCollection } from '/imports/api/links.js';

Meteor.publish('allLinks', function () {
  return LinksCollection.find();
});
