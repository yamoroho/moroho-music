const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Track = sequelize.define( 'track', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING},
  artist: {type: DataTypes.STRING},
  text: {type: DataTypes.STRING},
  listens: {type: DataTypes.INTEGER},
  picture: {type: DataTypes.STRING, allowNull: false},
  audio: {type: DataTypes.STRING, allowNull: false},
  //Comments: {type: DataTypes.ARRAY(DataTypes.STRING)}
})

const Album = sequelize.define( 'album', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING},
  author: {type: DataTypes.STRING},
  text: {type: DataTypes.STRING},
  picture: {type: DataTypes.STRING, allowNull: false},
  Tracks: {type: DataTypes.ARRAY(DataTypes.STRING)}
})

const Comment = sequelize.define( 'comment', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  track_id: {type: DataTypes.INTEGER},
  username: {type: DataTypes.STRING},
  text: {type: DataTypes.STRING}
})

Album.hasMany(Track);
Track.belongsTo(Album);

Track.hasMany(Comment);
Comment.belongsTo(Track);

module.exports = {
  Track, 
  Album,
  Comment
}