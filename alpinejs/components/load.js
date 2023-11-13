export default () => {
  return {
    datas: null,
    init() {
      setInterval(() => {
        this.load();
      }, 3000);
    },
    load() {
      axios
        .get("https://viacep.com.br/ws/RS/Porto%20Alegre/Domingos/json/")
        .then((result) => {
          if (result.status === 200) {
            this.datas = result.data;
          } else {
            this.data = [];
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  };
};
