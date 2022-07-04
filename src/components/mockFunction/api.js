export const getNameFormApi = async () => {
    return await fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        if (res.status === 200) return res.json();
        else throw new Error("Invalid response");
      });
}
