const {createClient} = require('@supabase/supabase-js');
const dotenv = require('dotenv');

dotenv.config();

const supabaseProjectUrl = process.env.PROJECT_URL;
const apiKey = process.env.API_KEY;

const supabase = createClient(supabaseProjectUrl, apiKey);

module.exports = { supabase };