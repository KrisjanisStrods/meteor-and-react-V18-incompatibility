import { Meteor } from 'meteor/meteor';
import { publishComposite } from 'meteor/reywood:publish-composite';
import { LinksCollection } from '/imports/api/links.js';

publishComposite('allLinks', function () {
  return {
    find() {
      return LinksCollection.find({});
    },
  };
});
