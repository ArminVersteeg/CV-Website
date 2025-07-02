const fs = require('fs');
const fetch = require('node-fetch');

const token = process.env.GH_TOKEN;

async function fetchRepos() {
    const res = await fetch(`https://api.github.com/users/ArminVersteeg/repos`, {
        headers: {
        Authorization: `token ${token}`,
        },
    });

    const repos = await res.json();

    const results = [];

    for (const repo of repos) {
        const details = await fetch(`https://api.github.com/repos/ArminVersteeg/${repo.name}`, {
        headers: {
            Authorization: `token ${token}`,
            Accept: 'application/vnd.github.mercy-preview+json',
        },
        });
        const data = await details.json();

        results.push({
        name: repo.name,
        html_url: repo.html_url,
        description: repo.description,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        topics: data.topics || [],
        });
    }

    fs.mkdirSync('website/data', { recursive: true });
    fs.writeFileSync('website/data/projects.json', JSON.stringify(results, null, 2));
}

fetchRepos();
