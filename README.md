# CV Website

A personal portfolio and CV website showcasing my projects, skills, and experience.

## Overview

This website presents my professional background, skills, and selected projects. It dynamically fetches and displays GitHub repositories using the Github API.

---

## Features

- Responsive, clean design built with Bootstrap 5
- Dynamic project listing fetched from GitHub repos
- Displays project name, description, creation year, and tags
- Smooth UI interactions with icon animations

---

## File Structure

```
CV-Website/
│
├── website/
│   ├── index.html
│   ├── js/
│   ├── css/
│   ├── images/
│   ├── icons/
│   └── data/
│       └── projects.json  # Generated projects data
│
├── fetch-projects.js      # Node.js script to fetch projects (used in GitHub Actions)
├── .github/
│   └── workflows/         # GitHub Actions workflows
└── README.md
```

---

## Setup & Deployment

### Local Development

1. Clone the repo

   ```bash
   git clone https://github.com/ArminVersteeg/CV-Website.git
   cd CV-Website/website
   ```

2. Open `index.html` in your browser or use a live server extension for development.

3. To update projects data locally, run the Node.js script:

   ```bash
   GH_TOKEN=your_personal_access_token node fetch-projects.js
   ```

## GitHub Actions

- Automatically fetches and updates `projects.json` on the click of a button.
- Uses your GitHub token stored securely in GitHub Secrets.
- Commits updates back to the repo.

---

## Technologies Used

- HTML5, CSS3, JavaScript (ES6+)
- Bootstrap 5 for styling and layout
- GitHub REST API for repository data
- Node.js for data fetching script
- GitHub Actions for automation

---

## License

This project is licensed under the MIT License.

---

## Contact

Feel free to reach out via [GitHub](https://github.com/ArminVersteeg) or email me at armin.versteeg@outlook.com.
