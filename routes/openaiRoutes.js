// 1. Add express first
const express = require('express');
// 6. Add the requirement from our openaiController file
const { generateImage } = require('../controllers/openaiController');
// 2. Create the router from express
const router = express.Router();

// 3. The route we will hit will be ("/openai/generateimage")
// 4. We will need a controller function
// 5. We can test this with postman
// 6. Test with postman to ensure that everything is still working
router.post('/generateImage', generateImage);
module.exports = router;