const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = `
    type User {
        id: ID!
        email: String!
        password: String!
    }
    type Profile {
        id: ID!
        name: String!
        picture: String
        city: City
        instruments: [Instrument]
        Bands: [Band]
    }

    type City {
        id: ID!
        name: String!
    }

    type Instrument {
        id: ID!
        name: String!
    }

    type Band {
        id: ID!
        name: String!
        description: String
        picture: String
        owner: User!
        members: [User]
        collaborators: [User]
        albums: [Album]
        events: [Event]
    }

    type Album {
        id: ID!
        name: String!
        cover: String
        songs: [Song]
        band: Band
    }

    type Song {
        id: ID!
        name: String!
        album: Album
        band: Band
        composer: [User]
        tracks: [Track]
    }

    type Track {
        id: ID!
        song: Song
        instrument: Instrument
        file: String
    }

    type Event {
        id: ID!
        name: String!
        date: String
    }

    type Query {
        users: [User]
        city: [City]
        instruments: [Instrument]
        bands: [Band]
        albums: [Album]
        events: [Event]
    }
`

const schema = makeExecutableSchema({
    typeDefs
});

module.exports = schema
