import img1 from "../images/img_1.jpg";
import img2 from "../images/img_2.jpg";
import img3 from "../images/img_3.jpg";
import cicd from "../images/ci_cd.png";

const data =  
[
    {
        "id": 1,
        "title": "Optimised CI/CD Pipeline",
        "thumbnail": img1,
        "img": cicd,
        "liveDemo": img1,
        "description": "A CI/CD Pipeline optimised with IaC and automation",
        "tools": [
            "aws",
            "python",
            "bash",
            "terraform",
            "jenkins",
            "docker",
            "git",
            "github",
            "prometheus",
            "grafana",
        ],
        "url": "optimised-ci-cd-pipeline",
        "blogLink": "https://ellaadeka.hashnode.dev/deploying-a-flask-application-from-github-on-an-ec2-instance",
        "githubLink": "https://github.com/ella-adeka/CI-CD-Pipeline-Optimisation.git",
        "liveSite": "https://github.com/ella-adeka/CI-CD-Pipeline-Optimisation.git",
        "comingSoon": false
    },
    {
        "id": 2,
        "title": "AWS 3-tier Architecture",
        "thumbnail": img3,
        "img": img3,
        "liveDemo": img3,
        "description": "Scalable Three-tier Architecture on AWS",
        "tools": [
            "ec2",
            "vpc",
            "alb",
            "rds",
            "autoscaling group"
        ],
        "url": "three-tier-web-app",
        "blogLink": null,
        "githubLink": "https://github.com/ella-adeka/ThreeTierArchitecturewithAWS",
        "liveSite": null,
        "comingSoon": false
    },
    {
        "id": 3,
        "title": "DOPH",
        "thumbnail": img3,
        "img": img3,
        "liveDemo": img3,
        "description": "An open-source DevOps Projects Hub open to all",
        "tools": [
            "git",
            "github actions",
            "mkdocs",
            "python"
        ],
        "url": "doph",
        "blogLink": null,
        "githubLink": "https://github.com/ella-adeka/DOPH.git",
        "liveSite": null,
        "comingSoon": true
    },
    {
        "id": 4,
        "title": "QR Code Generator",
        "thumbnail": img3,
        "img": img3,
        "liveDemo": img3,
        "description": "An app that converts a URL to a QR Code",
        "tools": [
            "github actions",
            "docker",
            "prometheus",
            "grafana",
            "cloudformation",
            "nextjs",
            "python",
        ],
        "url": "qr-code-generator",
        "blogLink": "https://ellaadeka.hashnode.dev/deploying-a-flask-application-from-github-on-an-ec2-instance",
        "githubLink": "https://github.com/ella-adeka/qr-code-generator",
        "liveSite": null,
        "comingSoon": true
    },
    // {
    //     "id": 5,
    //     "title": "Jectam",
    //     "thumbnail": img2,
    //     "img": img2,
    //     "liveDemo": img2,
    //     "description": "An integrated automated project management system",
    //     "tools": [
    //         "aws",
    //         "terraform"
    //     ],
    //     "url": "jectam",
    //     "blogLink": "https://ellaadeka.hashnode.dev/deploying-a-flask-application-from-github-on-an-ec2-instance",
    //     "githubLink": "https://github.com/ella-adeka/CI-CD-Pipeline-Optimisation.git",
    //     "liveSite": "https://github.com/ella-adeka/CI-CD-Pipeline-Optimisation.git",
    //     "comingSoon": true
    // }
]

export default data;
