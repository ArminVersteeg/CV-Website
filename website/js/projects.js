const container = document.getElementById("projects");

fetch('data/projects.json')
    .then(res => res.json())
    .then(repos => {
        repos.forEach(repo => {
            const createdYear = new Date(repo.created_at).getFullYear();
            const topics = repo.topics || [];

            const item = document.createElement("div");
            item.innerHTML = `
            <a href="${repo.html_url}" target="_blank" class="project btn mb-2 text-decoration-none">
                <div class="d-flex justify-content-between">
                    <div class="d-flex align-items-left">
                        <img class="white-icon me-2 mb-1 rotate-hover" src="icons/arrow.svg" alt="GoTo" width="28" /> 
                        <h3 class="text-decoration-underline">${repo.name}</h3>
                    </div>
                    <img class="connect-link white-icon" src="icons/openlink.svg" alt="Link" width="20" />
                </div>
                <small class="text-secondary mb1">📅(${createdYear})</small>
                <p>${repo.description || "No description"}</p>
                <div class="repo-tags mb-2">
                    ${topics.map(tag => `<span class="badge bg-secondary me-1">#${tag}</span>`).join('')}
                </div>
            </a>`;

            container.appendChild(item);
        });
    })

.catch(err => {
    container.innerHTML = "Failed to load project data.";
    console.error(err);
});