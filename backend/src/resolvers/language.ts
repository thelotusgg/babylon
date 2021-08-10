export default {
  Language: {
    countryCode: async (parent: any) => {
      const countryCode = parent.code.split('-');
      return countryCode[countryCode.length - 1].toLowerCase();
    },
  },
};
