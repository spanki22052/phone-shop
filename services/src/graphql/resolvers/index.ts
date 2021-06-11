import { Phone, Resolvers } from '../../generated/graphql';
import PhoneModel from '../../models/phone';

interface phoneInterface {
  title: string;
  description: string;
  price: number;
  photos: string[];
  brand: string;
}

export const resolvers: Resolvers<phoneInterface> = {
  Query: {
    hello: () => {
      return 'Hello';
    },
    phoneid: async (_: any, { id }): Promise<any> => {
      return await PhoneModel.findOne({ _id: id });
    },
  },

  Mutation: {
    addPhone: async (parent, args, context): Promise<Phone> => {
      const newPhone = new PhoneModel({
        ...args,
      });
      await newPhone.save();
      return args;
    },
  },
};
