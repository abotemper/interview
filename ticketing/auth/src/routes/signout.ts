import express from 'express';

const router = express.Router();

router.get('/api/users/signout', (req, res) => {
  res.send('HI TIAN BO');
});

export { router as signoutRouter };