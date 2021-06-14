import { Phone, Resolvers, Brands, News } from '../../generated/graphql';
import PhoneModel from '../../models/phone';
import BrandModel from '../../models/brand';
import NewsSchema from '../../models/news';
import { news } from '../../interfaces/news';

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
    showphones: async (): Promise<phoneInterface[]> => {
      return await PhoneModel.find();
    },
    shownews: async (): Promise<news[]> => {
      return await NewsSchema.find();
    },
    lastnew: async (): Promise<News> => {
      const newElement: [News] = await NewsSchema.find();
      const lastNew = newElement.splice(-1)[0];
      return await lastNew;
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
    addNew: async (parent, args, context): Promise<News> => {
      const newNew = new NewsSchema({
        ...args,
      });
      await newNew.save();
      return args;
    },

    addBrand: async (parent, args): Promise<Brands> => {
      const fullBrandsList = await BrandModel.find({});
      const dataPicker =
        fullBrandsList !== undefined ? fullBrandsList[0].brandslist : [];

      const newBrands = new BrandModel({
        brandslist: [...dataPicker, args.title],
      });

      await BrandModel.deleteMany({});
      await newBrands.save();

      return { brandslist: ['working'] };
    },
  },
};
