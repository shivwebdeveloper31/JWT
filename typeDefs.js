const { gql } = require('apollo-server');
//Queries
const typeDefs = gql`
  type tenantregisters {
    id: ID!
            fName: String
            lName: String
            occupation: String
            email: String
            gender: String
            contact: String!
            city: String
            state: String
            pincode: String
            password: String
            avatar: String
            emailVerify:String!
            contactVerify:String!
            identityType: String
            identityId: String
            status: String!
  }

  input tenantregistersInput {
    contact:String
    emailverify:String
    contactverify:String
    status: String
    city:String
    email:String
    fName:String
    gender:String
    identityNo:String
    identityType:String
    lName:String
    occupation:String
    pincode:String
    state:String
   }


   type rooms {
    id: ID!
            roomType: String
            roomAddress: String
            price: String
            capacity: String
            bathroomAttach: String
            area: String!
            kitchenAvailable: String
            waterBillInclude: String
            electricBillInclude: String
            remark: String
            imageId: [String]
            uploadDate:String!
            uploadTime:String!
            status: String!
            city: String
  }

  input roomsInput {
    roomType: String
            roomAddress: String
            price: String
            capacity: String
            bathroomAttach: String
            area: String
            kitchenAvailable: String
            waterBillInclude: String
            electricBillInclude: String
            remark: String
            imageId: [String]
            uploadDate:String
            uploadTime:String
            status: String!
            city: String
   }


   type adminAuth {
     adminId: ID!
     adminToken: String!
     adminTokenExpiration: String!
   }

  type Query {
    hello: String
    getAll: [tenantregisters]!
    getAllRoom : [rooms]!
  }

 type Mutation {
  
    #  updateTenantregisters (id: String, Tenantregisters: TenantregistersInput) Tenantregisters
       
       adminOtpLogin (contact: String ) :adminAuth
   }
`;

module.exports = { typeDefs };
