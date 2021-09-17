const { Router } = require('express');
const { user } = require('../../models/index.js').sequelize.models;

const router = Router();

router.delete('/todo/:id', (req, res) => {
  const { id } = req.params;

  const deletedTodo = user.destroy({
    where: {
      id,
    },
  });

  if (!deletedTodo) {
    return res.status(404).send({
      message: 'id not defined',
    });
  }

  res.send(deletedTodo)
});

module.exports = router;
