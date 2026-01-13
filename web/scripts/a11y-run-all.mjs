import pa11y from 'pa11y';
import fs from 'fs';
import process from 'process';

const base = process.argv[2] || 'http://127.0.0.1:4324';
const pages = ['/', '/about/', '/adhs/', '/angebote/', '/assessment/', '/blaulicht/', '/schule/'];

async function runPage(url) {
  try {
    const full = new URL(url, base).href;
    console.log('Running Pa11y on', full);
    const results = await pa11y(full, { standard: 'WCAG2AA' });
    return { url: full, results };
  } catch (err) {
    return { url: new URL(url, base).href, error: err.message };
  }
}

(async () => {
  const out = [];
  for (const p of pages) {
    /* eslint-disable no-await-in-loop */
    const res = await runPage(p);
    out.push(res);
  }

  const report = {
    generatedAt: new Date().toISOString(),
    base,
    pages: out,
  };

  const mdLines = [];
  mdLines.push('# Accessibility Report');
  mdLines.push('');
  mdLines.push(`Generated: ${report.generatedAt}`);
  mdLines.push('');

  for (const p of report.pages) {
    mdLines.push(`## ${p.url}`);
    if (p.error) {
      mdLines.push(`**Error:** ${p.error}`);
      mdLines.push('');
      continue;
    }

    const issues = p.results.issues || [];
    mdLines.push(`Issues: ${issues.length}`);
    mdLines.push('');

    for (const issue of issues) {
      mdLines.push(`- **${issue.type}** (${issue.code}) — ${issue.message}`);
      if (issue.selector) mdLines.push('  - Selector: `' + issue.selector.replace(/\n/g, ' ') + '`');
      if (issue.context) mdLines.push('  - Context: ' + issue.context.trim().slice(0, 200));
    }

    mdLines.push('');
  }

  fs.writeFileSync('./ACCESSIBILITY-REPORT.md', mdLines.join('\n'));
  console.log('Wrote ACCESSIBILITY-REPORT.md');
})();