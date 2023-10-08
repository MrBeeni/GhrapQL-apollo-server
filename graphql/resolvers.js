const User = require("../model/userModel");
const resolvers = {
  Query: {
    hello: () => {
      return "hello";
    },
    getUser: async () => {
      return await User.find();
    },
    getUserById: async (parent, { id }, context, info) => {
      return await User.findById(id);
    },
  },
  Mutation: {
    createUser: async (parent, args, context, info) => {
      const { name, email } = args.user;
      const user = new User({ name, email });
      await user.save();
      return user;
    },
    deleteUser: async (parent, { id }, context, info) => {
      await User.findByIdAndDelete(id);
      return "Deleted!!!!!";
    },
    updateUser: async (parent, args, context, info) => {
      const { id } = args;
      const { name, email } = args.user;
      const result = await User.findByIdAndUpdate(
        id,
        { name, email },
        { new: true }
      );
      return result;
    },
  },
};
module.exports = resolvers;
