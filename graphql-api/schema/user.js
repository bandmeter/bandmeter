module.exports = `
type User {
    id: ID!
    email: String!
    password: String!
    fbId: String
    goId: String
    name: String!
    picture: String
    country: String
    city: String
    instruments: String
    Bands: [Band]
}`