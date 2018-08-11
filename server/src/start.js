import {MongoClient, ObjectId} from 'mongodb'
import express from 'express'
import bodyParser from 'body-parser'
import {graphqlExpress, graphiqlExpress} from 'graphql-server-express'
import {makeExecutableSchema} from 'graphql-tools'
import cors from 'cors'

const URL = 'http://localhost'
const PORT = 3001
const MONGO_URL = 'mongodb://localhost:27017/bandmeter'

const prepare = (o) => {
  o._id = o._id.toString()
  return o
}

export const start = async () => {
  try {
    const db = await MongoClient.connect(MONGO_URL)

    const Users = db.collection('users')
    const Bands = db.collection('bands')
    const Albums = db.collection('albums')
    const Songs = db.collection('songs')
    const Tracks = db.collection('tracks')

    const typeDefs = [`
      type Query {
        users: [User]
        user(_id: String): User
        userByFB(fbId: String): User
        userByGo(goId: String): User
        albums: [Album]
        album(_id: String): Album
        bands: [Band]
        songs: [Song]
        tracks: [Track]
      }

      type User {
        _id: String
        name: String!
        email: String!
        password: String!
        fbId: String
        goId: String
        bands: [Band]
        picture:String
        country: String
        city: String
        created_at: String
      }

      type Band {
        _id: String
        name: String!
        picture: String
        administrator: [User]
        members: [User]
        collaborators: [User]
        albums: [Album]
        created_at: String
      }

      type Album {
        _id: String
        name: String!
        songs: [Song]
        created_at: String
      }

      type Song {
        _id: String
        name: String!
        tracks: [Track]
        created_at: String
      }

      type Track {
        _id: String
        file: String!
      }

      type Mutation {
        createUser(name: String, email: String, password: String): User
      }

      schema {
        query: Query
        mutation: Mutation
      }
    `];

    const resolvers = {
      Query: {
        user: async (root, {_id}) => {
          return prepare(await Users.findOne(ObjectId(_id)))
        },
        userByFB: async (root, {fbId}) =>{
          return prepare(await Users.findOne({fbId:fbId}));
        },
        userByGo: async (root, {goId}) => {
          return prepare (await Users.findOne({goId:goId}));
        },
        users: async () => {
          return (await Users.find({}).toArray()).map(prepare)
        },
      },
      User: {
        bands: async ({_id}) => {
          return (await Bands.find({postId: _id}).toArray()).map(prepare)
        }
      },
      Mutation: {
        createUser: async (root, args, context, info) => {
          const res = await Posts.insert(args)
          return prepare(await Posts.findOne({_id: res.insertedIds[1]}))
        },
      },
    }

    const schema = makeExecutableSchema({
      typeDefs,
      resolvers
    })

    const app = express()

    app.use(cors())

    app.use('/graphql', bodyParser.json(), graphqlExpress({schema}))

    const homePath = '/graphiql'

    app.use(homePath, graphiqlExpress({
      endpointURL: '/graphql'
    }))

    app.listen(PORT, () => {
      console.log(`Visit ${URL}:${PORT}${homePath}`)
    })

  } catch (e) {
    console.log(e)
  }

}
