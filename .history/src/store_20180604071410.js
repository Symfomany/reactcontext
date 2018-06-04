const Store = {
  data: {
    title: "Je suis Julien"
  },
  get(key) {
    return this.data[key];
  },
  register(key, value) {
    this.data[key] = value;
  }
};

export default Store;
