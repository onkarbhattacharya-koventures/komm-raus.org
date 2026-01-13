import pa11y from 'pa11y';
import process from 'process';

async function run(url){
  try {
    console.log('Running Pa11y on', url);
    const results = await pa11y(url, { standard: 'WCAG2AA' });
    console.log(JSON.stringify(results, null, 2));
  } catch (err) {
    console.error('Pa11y run failed:', err.message);
    process.exit(1);
  }
}

if (process.argv.length < 3) {
  console.log('Usage: node a11y-check.mjs <url>');
  process.exit(1);
}

run(process.argv[2]);