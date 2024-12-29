# Login App Project With DevOps Implementation

## 🛠️ Tech Stack:

- **Backend:** Node.js, Express, MongoDB, Socket.io
- **Frontend:** React, TailwindCSS
- **Containerization:** Docker
- **Orchestration:** Kubernetes (planned)
- **Web Server:** Nginx
- **State Management:** Zustand
- **Authentication:** JWT
- **Styling Components:** DaisyUI

## 🔧 Prerequisites:

- **[Node.js](https://nodejs.org/)** (v14 or higher)
- **[Docker](https://www.docker.com/get-started)** (for containerizing the app)
- **[Git](https://git-scm.com/downloads)** (to clone the repository)

## Tools used in this project:

- GitHub (Code)
- Docker (Containerization)
- Jenkins (CI)
- SonarQube (Quality)
- Trivy (Filesystem Scan)
- Redis (Caching)
- Kind (Kubernetes)

### Pre-requisites to implement this project:

nstall & Configure Docker by using below command, "NewGrp docker" will refresh the group config hence no need to restart the EC2 machine.

```bash
sudo apt-get update
```

```bash
sudo apt-get install docker.io -y
sudo usermod -aG docker ubuntu && newgrp docker
```

#

- <b id="Jenkins">Install and configure Jenkins (Master machine)</b>

```bash
sudo apt update -y
sudo apt install fontconfig openjdk-17-jre -y

sudo wget -O /usr/share/keyrings/jenkins-keyring.asc \
  https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key

echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc]" \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null

sudo apt-get update -y
sudo apt-get install jenkins -y
```

- <b>Now, access Jenkins Master on the browser on port 8080 and configure it</b>.

#

- <b id="Trivy">Install Trivy (Jenkins Worker)</b>

```bash
sudo apt-get install wget apt-transport-https gnupg lsb-release -y
wget -qO - https://aquasecurity.github.io/trivy-repo/deb/public.key | sudo apt-key add -
echo deb https://aquasecurity.github.io/trivy-repo/deb $(lsb_release -sc) main | sudo tee -a /etc/apt/sources.list.d/trivy.list
sudo apt-get update -y
sudo apt-get install trivy -y
```

## Steps to implement the project:

- <b>Go to Jenkins Master and click on <mark> Manage Jenkins --> Plugins --> Available plugins</mark> install the below plugins:</b>

  - SonarQube Scanner
  - Docker
  - Pipeline: Stage View

#

- <b id="Owasp">Configure OWASP, move to <mark>Manage Jenkins --> Plugins --> Available plugins</mark> (Jenkins Worker)</b>

- <b id="Sonar">After OWASP plugin is installed, Now move to <mark>Manage jenkins --> Tools</mark> (Jenkins Worker)</b>

#

- <b>Login to SonarQube server and create the credentials for jenkins to integrate with SonarQube</b>
  - Navigate to <mark>Administration --> Security --> Users --> Token</mark>

#

- <b>Now, go to <mark> Manage Jenkins --> credentials</mark> and add Sonarqube credentials:</b>

#

- <b>Go to <mark> Manage Jenkins --> Tools</mark> and search for SonarQube Scanner installations:</b>

#

- <b> Go to <mark> Manage Jenkins --> credentials</mark> and add Github credentials to push updated code from the pipeline:</b>
  > [!Note]
  > While adding github credentials add Personal Access Token in the password field.

#

- <b>Go to <mark> Manage Jenkins --> System</mark> and search for SonarQube installations:</b>

#

- <b>Now again, Go to <mark> Manage Jenkins --> System</mark> and search for Global Trusted Pipeline Libraries:</b

#

- <b>Now, go to github repository and under <mark>Automations</mark> directory update the <mark>instance-id</mark> field on both the <mark>updatefrontendnew.sh updatebackendnew.sh</mark> with the k8s worker's instance id</b>

#

- <b>Navigate to <mark> Manage Jenkins --> credentials</mark> and add credentials for docker login to push docker image:</b>

#
