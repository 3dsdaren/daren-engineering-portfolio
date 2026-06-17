const projects = [
    {
        title: "Solar Skid Design",
        category: "Mechanical Design / CAD Drafting",
        description: "A mechanical skid concept showing layout, rendering, and technical drawing presentation.",
        images: [
            {
                title: "Skid Rendering",
                file: "assets/images/portfolio/skid-rendering.jpg"
            },
            {
                title: "Skid Drawing",
                file: "assets/images/portfolio/skid-drawing.jpg"
            }
        ],
        pdfs: [
            {
                title: "Solar Skid Rendering PDF",
                file: "assets/files/Solar-Skid-Rendering.pdf"
            }
        ]
    },

    {
        title: "3D CAD Modeling Samples",
        category: "3D Modeling / CAD",
        description: "Sample 3D CAD modeling, capture, wireframe, and rendering outputs.",
        images: [
            {
                title: "3D CAD Design",
                file: "assets/images/portfolio/3d-cad.jpg"
            },
            {
                title: "3D Capture",
                file: "assets/images/portfolio/3d-capture.jpg"
            },
            {
                title: "3D Modeling",
                file: "assets/images/portfolio/3d-modeling.jpg"
            },
            {
                title: "3D Wireframe",
                file: "assets/images/portfolio/3d-wireframe.jpg"
            },
            {
                title: "Engineering Rendering",
                file: "assets/images/portfolio/rendering.jpg"
            }
        ],
        pdfs: [
            {
                title: "Drawing Sample Portfolio",
                file: "assets/files/Drawing-Sample-Portfolio.pdf"
            }
        ]
    }
];

const portfolioContainer = document.getElementById("portfolioProjects");

if (portfolioContainer) {

    portfolioContainer.innerHTML = projects.map(project => `
        <div class="project-showcase-card">
            <div class="project-header">
                <span>${project.category}</span>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>

            <div class="project-section-box">
                <h4>Image Gallery</h4>
                <div class="portfolio-gallery">
                    ${project.images.map(image => `
                        <a href="${image.file}"
                           target="_blank"
                           rel="noopener noreferrer"
                           class="portfolio-card">
                            <img src="${image.file}" alt="${image.title}">
                            <h5>${image.title}</h5>
                            <span>View Image</span>
                        </a>
                    `).join("")}
                </div>
            </div>

            <div class="project-section-box">
                <h4>PDF Documents</h4>
                <div class="pdf-grid">
                    ${project.pdfs.map(pdf => `
                        <a href="${pdf.file}"
                           target="_blank"
                           rel="noopener noreferrer"
                           class="pdf-card">
                            <h5>${pdf.title}</h5>
                            <p>Technical document / drawing package.</p>
                            <span>View PDF</span>
                        </a>
                    `).join("")}
                </div>
            </div>
        </div>
    `).join("");
}

/* Page Loaded Hook */

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});