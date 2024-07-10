/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("items").del();
  await knex("items").insert([
    {
      id: 1,
      users_id: 3,
      itemname: "Table Salt",
      description: "makes that bland meal just a bit tastier",
      quantity: 10,
    },
    {
      id: 2,
      users_id: 3,
      itemname: "Chili Flakes",
      description: "Hot. Use with caution",
      quantity: 10,
    },
    {
      id: 3,
      users_id: 3,
      itemname: "Coconut Water",
      description: "nature's gatorade",
      quantity: 10,
    },
  ]);
};
