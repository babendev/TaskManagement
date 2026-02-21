const errorHandler = (err, req, res, next) => {
  console.error(err);
  
  if (err.name === 'ValidationError') {
    return res.status(400).json({ message: 'Erreur de validation', errors: err.message });
  }
  
  if (err.name === 'CastError') {
    return res.status(400).json({ message: 'ID invalide' });
  }
  
  res.status(500).json({ message: 'Erreur serveur' });
};

module.exports = errorHandler;
