const express = require('express');
const router = express.Router();

const {
  createBootcamp,
  getBootcamp,
  deleteBootcamps,
  getBootcamps,
  updateBootcamp,
  getBootcampsInRadius,
} = require('../controllers/bootcamps');

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

router.route('/').get(getBootcamps).post(createBootcamp);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamps);

module.exports = router;

// router.get('/', (req, res) => {
//   res.status(200).json({ success: true, msg: 'Show all bootcamps' });
// });

// module.exports = router;