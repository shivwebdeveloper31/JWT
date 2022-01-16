const Tenantregisters = require("./modal/tenantregister");
const Room = require("./modal/room");
const Admin = require("./modal/admin")
const jwt = require("jsonwebtoken")


//Resolvers
const resolvers = {
  Query: {
    hello: () => {
      return "Hello World";
    },
    getAll: async () => {
      return await Tenantregisters.find();
    },

    getAllRoom: async () => {
      return await Room.find();
    },

    
  },
  //   Mutation: {
//     updateTenantregisters: async (parent, args, context, info) => {
//       const { id } = args;
//       const { contact, emailverify, contactverify, status, city, email, fName, gender, identityNo, identityType, lName, occupation, pincode, status } = args.Tenantregisters;
//       const Tenantregisters = await  Tenantregisters.findByIdAndUpdate(
//         id,
//         { contact, emailverify, contactverify, status, city, email, fName, gender, identityNo, identityType, lName, occupation, pincode, status },
//         { new: true }
//       );
//       return Tenantregisters;
//     },
  
//  },
 Mutation : {
adminOtpLogin: async (parent, { contact }) => {
  const contactNo = await Admin.findOne({ contact: contact });
  if (!contactNo) {
      throw Error('Admin not found!!!')
  }
  else {
      const token = jwt.sign({ adminId: contactNo.id, contact: contactNo.contact, status: contactNo.status }, 'adminOtpLoginSecretKey', {
          expiresIn: '1h'
      })
      return landlordAuthData = {
          adminId: contactNo.id,
          adminToken: token,
          adminTokenExpiration: '1h'
      }
  }

},
 }
}
module.exports = {resolvers};
