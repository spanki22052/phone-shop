import { Phone, Resolvers, Brands } from '../../generated/graphql';
import PhoneModel from '../../models/phone';
import BrandModel from '../../models/brand';

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
    showbrands: async (): Promise<any> => {
      return await BrandModel.find({});
    },
    clearBrands: async (): Promise<boolean> => {
      await BrandModel.deleteMany({});
      return true;
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

    addBrand: async (parent, args): Promise<Brands> => {
      const fullBrandsList = await BrandModel.find({});
      const dataPicker =
        fullBrandsList === undefined ? fullBrandsList[0].brandslist : [];

      const newBrands = new BrandModel({
        brandslist: [...dataPicker, args.title],
      });

      await BrandModel.deleteMany({});
      await newBrands.save();

      return { brandslist: ['working'] };
    },
  },
};
