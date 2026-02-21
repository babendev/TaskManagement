const validateTask = (req, res, next) => {
  const { title, status } = req.body;
  
  if (title && typeof title !== 'string') {
    return res.status(400).json({ message: 'Le titre doit être une chaîne de caractères' });
  }
  
  if (status && !['À faire', 'En cours', 'Terminé'].includes(status)) {
    return res.status(400).json({ message: 'Statut invalide' });
  }
  
  next();
};

module.exports = validateTask;
