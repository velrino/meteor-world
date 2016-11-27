import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Products = new Mongo.Collection('Products');

Meteor.startup(() => {
    return Products.find();
});
