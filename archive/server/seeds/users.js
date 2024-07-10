/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      firstname: "Frank",
      lastname: "Martin",
      username: "martymart",
      password: "password1",
    },
    {
      id: 2,
      firstname: "Sasha",
      lastname: "Grayson",
      username: "sashy1234",
      password: "password2",
    },
    {
      id: 3,
      firstname: "Kevin",
      lastname: "Murray",
      username: "sirmurr",
      password: "password3",
    },
  ]);
};
