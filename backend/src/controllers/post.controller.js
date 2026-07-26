const getAllPosts = (req, res) => {
  const posts = [
    {
      id: 1,
      title: "My First ForgeFlow Post",
    },
    {
      id: 2,
      title: "Learning Express",
    },
  ];

  res.json(posts);
};

module.exports = {
  getAllPosts,
};