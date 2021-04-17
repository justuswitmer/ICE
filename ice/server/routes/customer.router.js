const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
  axios({
    method: 'GET',
    url: "https://zuperpro.com/api/customers?count=<count_number>&page=<page_number>&sort=<sort_order>&sort_by=<sort_by_type>&filter.category=<category_uid>&filter.created_by=<created_user_uid>&filter.customer_tags=<customer_tags>&filter.from_date=<from_date>&filter.to_date=<to_date>&filter.from_no_of_jobs=<from_no_of_jobs>&filter.to_no_of_jobs=<to_number_of_jobs>&filter.is_active=<is_active_flag>&filter.keyword=<keyword>",
    headers: { "Authorization": "Bearer 276cb49134264bee53ff14988f5981ca" },
  })
    .then(response => {
      console.log('got a response from my GET');
      res.send(response.data);
    })
    .catch(error => {
      console.log('error in GETting', error);
      res.sendStatus(500);
    });
});

module.exports = router;