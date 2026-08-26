const { Client } = require('pg');

const regions = ['us-east-1', 'us-west-1', 'eu-central-1', 'ap-southeast-1', 'ap-south-1'];

async function test() {
  for (const r of regions) {
    const connectionString = `postgresql://postgres.ritevpzglrbqdwplvlzr:S%40dhna181105@aws-0-${r}.pooler.supabase.com:6543/postgres`;
    const client = new Client({ connectionString, connectionTimeoutMillis: 5000 });
    try {
      await client.connect();
      console.log('SUCCESS:', r);
      await client.end();
      return r;
    } catch(e) {
      console.log('ERROR:', r, e.message);
    }
  }
}

test();
