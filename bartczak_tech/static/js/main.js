AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 700, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

document.addEventListener("DOMContentLoaded", function () {
    const projectLinks = document.querySelectorAll(".link-custom");
    const modal = new bootstrap.Modal(document.getElementById("projectModal"));
    const modalProjectImage = document.getElementById("modalProjectImage");
    const modalProjectName = document.getElementById("modalProjectName");
    const modalProjectDescription = document.getElementById("modalProjectDescription");
    const modalProjectTechnologies = document.getElementById("modalProjectTechnologies");
    const modalProjectLinks = document.getElementById("modalProjectLinks"); // Add this line

    projectLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const { projectId } = this.dataset;

            fetch(`/project/${projectId}/`)
                .then((response) => response.json())
                .then((data) => {
                    modalProjectImage.src = data.image_url;
                    modalProjectName.textContent = data.name;
                    modalProjectDescription.textContent = data.description;

                    // Clear previous technologies
                    modalProjectTechnologies.innerHTML = "";
                    data.technologies.forEach((tech) => {
                        const li = document.createElement("li");
                        li.textContent = tech;
                        modalProjectTechnologies.appendChild(li);
                    });

                    // Add project links
                    modalProjectLinks.innerHTML = "";
                    if (data.github_link) {
                        const githubLink = document.createElement("a");
                        githubLink.href = data.github_link;
                        githubLink.textContent = "GitHub";
                        githubLink.target = "_blank";
                        modalProjectLinks.appendChild(githubLink);
                    }
                    if (data.project_link) {
                        const projectLink = document.createElement("a");
                        projectLink.href = data.project_link;
                        projectLink.textContent = data.project_link_text || "Project";
                        projectLink.target = "_blank";
                        if (modalProjectLinks.innerHTML) {
                            modalProjectLinks.innerHTML += " | ";
                        }
                        modalProjectLinks.appendChild(projectLink);
                    }

                    modal.show();
                });
        });
    });
});
