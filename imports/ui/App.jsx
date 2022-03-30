import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { LinksCollection } from '../api/links';

export const App = () => {
  console.log('RENDER');

  const data = useTracker(() => {
    let links;
    const handle = Meteor.subscribe('allLinks');
    const loading = !handle.ready();
    
    if (!loading) {
      links = LinksCollection.find().fetch();
    }
  
    return {
      links,
      loading,
    };
  });

  return (
    <div>
      <h2>Learn Meteor!</h2>
      {
        data.loading ? <div>Loading...</div> : (
          <ul>
            {data.links.map(
              link => <li key={link._id}>
                <a href={link.url} target="_blank">{link.title}</a>
              </li>
            )}
          </ul>
        )
      }
    </div>
  )
};