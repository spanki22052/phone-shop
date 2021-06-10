import Phone from '../models/phone';

export default {
  Query: {
    hello: () => 'Hello world!',
  },

  Mutation: {
    addPhone: (_: any, title: string) => {
      return title;
    },
  },
};
