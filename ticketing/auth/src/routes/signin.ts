import express from 'express';

const router = express.Router();

router.get('/api/users/signin', (req, res) => {
  res.send('HI TIAN BO');
});

export { router as signinRouter };