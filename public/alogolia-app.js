const algoliasearch = require('algoliasearch');
const dotenv = require('dotenv');
const firebase = require('firebase');

// load values from the .env file in this directory into process.env
dotenv.config();

// configure firebase
firebase.initializeApp({
  databaseURL: process.env.FIREBASE_DATABASE_URL2,
});
const database = firebase.database();

// configure algolia
const algolia = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY
);

const index = algolia.initIndex(process.env.ALGOLIA_INDEX_NAME);
const index2 = algolia.initIndex(process.env.ALGOLIA_INDEX_NAME2);

const foodsRef = database.ref('/foods');
foodsRef.on('child_added', addOrUpdateIndexRecord);
foodsRef.on('child_changed', addOrUpdateIndexRecord);
foodsRef.on('child_removed', deleteIndexRecord);

function addOrUpdateIndexRecord(food) {
  // Get Firebase object
  const record = food.val();
  // Specify Algolia's objectID using the Firebase object key
  record.objectID = food.key;
  // Add or update object
  index
    .saveObject(record)
    .then(() => {
      console.log('Firebase object indexed in Algolia', record.objectID);
    })
    .catch(error => {
      console.error('Error when indexing food into Algolia', error);
      process.exit(1);
    });
}

function deleteIndexRecord({key}) {
  // Get Algolia's objectID from the Firebase object key
  const objectID = key;
  // Remove the object from Algolia
  index
    .deleteObject(objectID)
    .then(() => {
      console.log('Firebase object deleted from Algolia', objectID);
    })
    .catch(error => {
      console.error('Error when deleting food from Algolia', error);
      process.exit(1);
    });
}

const exercisesRef = database.ref('/exercises');
exercisesRef.on('child_added', addOrUpdateIndexRecord2);
exercisesRef.on('child_changed', addOrUpdateIndexRecord2);
exercisesRef.on('child_removed', deleteIndexRecord2);

function addOrUpdateIndexRecord2(exercise) {
  // Get Firebase object
  const record = exercise.val();
  // Specify Algolia's objectID using the Firebase object key
  record.objectID = exercise.key;
  // Add or update object
  index2
    .saveObject(record)
    .then(() => {
      console.log('Firebase object indexed in Algolia', record.objectID);
    })
    .catch(error => {
      console.error('Error when indexing food into Algolia', error);
      process.exit(1);
    });
}

function deleteIndexRecord2({key}) {
  // Get Algolia's objectID from the Firebase object key
  const objectID = key;
  // Remove the object from Algolia
  index2
    .deleteObject(objectID)
    .then(() => {
      console.log('Firebase object deleted from Algolia', objectID);
    })
    .catch(error => {
      console.error('Error when deleting food from Algolia', error);
      process.exit(1);
    });
}

