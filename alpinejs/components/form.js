export default () => {
  return {
    submit(e) {
      e.preventDefault();
      console.log(this.data);
      axios.get("https://viacep.com.br/ws/01001000/json/").then((result) => console.log(result));
    },
    data: {
      name: "",
      email: "",
      date: "",
      value: "",
    },
  };
};
