const express = require('express');
const router = express.Router();
const metricsService = require('../services/metrics');
router.get('/', (req, res) => {
  metricsService.getMetrics((err, metrics) => {
    if (err) {
      res.status(500).send({ message: 'Error fetching metrics' });
    } else {
      res.send(metrics);
    }
  });
});
module.exports = router;