# Login App Project With DevOps Implementation

## 🛠️ Tech Stack:

- **Backend:** Node.js, Express, MongoDB, Redis
- **Frontend:** React, TailwindCSS
- **Containerization:** Docker
- **Orchestration:** Kubernetes (planned)
- **Web Server:** Nginx
- **Authentication:** JWT

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

Install & Configure Docker by using below command, "NewGrp docker" will refresh the group config.

```bash
sudo apt-get update
```

```bash
sudo apt-get install docker.io -y
sudo usermod -aG docker ubuntu && newgrp docker
```

#

- <b id="Jenkins">Install and configure Jenkins</b>

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

- <b id="Trivy">Install Trivy </b>

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

- <b>Now again, Go to <mark> Manage Jenkins --> System</mark> and search for Global Trusted Pipeline Libraries:</b>

#

- <b>Navigate to <mark> Manage Jenkins --> credentials</mark> and add credentials for docker login to push docker image:</b>

#

## Kubernetes Implementation

- The Kubernetes implementation for this project is located in the k8s folder. It includes the necessary manifests to deploy the application components to a Kubernetes cluster.

### Kubernetes Manifests

#

- <b>namespace.yml: Defines the namespace for the application.</b>

#

- <b>storage.yml: Defines the StorageClass for persistent storage.</b>

#

- <b>mongodb-pv.yml: Defines the PersistentVolume for MongoDB.</b>

#

- <b>mongodb-pvc.yml: Defines the PersistentVolumeClaim for MongoDB.</b>

#

- <b>mongodb-deployment.yml: Defines the Deployment for MongoDB.</b>

#

- <b>mongodb-service.yml: Defines the Service for MongoDB.</b>

#

- <b>redis-deployment.yml: Defines the Deployment for Redis.</b>

#

- <b>redis-service.yml: Defines the Service for Redis.</b>

#

- <b>backend-deployment.yml: Defines the Deployment for the backend service.</b>

#

- <b>backend-service.yml: Defines the Service for the backend service.</b>

#

- <b>frontend-deployment.yml: Defines the Deployment for the frontend service.</b>

#

- <b>frontend-service.yml: Defines the Service for the frontend service.</b>

## Steps to Deploy on Kubernetes using Kind

1. Install Kind: Follow the Kind installation guide to install Kind on your system.

2. Create a Kind Cluster:

```bash
kind create cluster --name login-app
```

3. Apply the Namespace:

```bash
kubectl apply -f k8s/namespace.yml
```

4. Apply the StorageClass:

```bash
kubectl apply -f k8s/storage.yml
```

5. Apply the PersistentVolume and PersistentVolumeClaim for MongoDB:

```bash
kubectl apply -f k8s/mongodb-pv.yml
kubectl apply -f k8s/mongodb-pvc.yml
```

6. Deploy MongoDB:

```bash
kubectl apply -f k8s/mongodb-deployment.yml
kubectl apply -f k8s/mongodb-service.yml
```

7. Deploy Redis:

```bash
kubectl apply -f k8s/redis-deployment.yml
kubectl apply -f k8s/redis-service.yml
```

8. Deploy the Backend Service:

```bash
kubectl apply -f k8s/backend-deployment.yml
kubectl apply -f k8s/backend-service.yml
```

9. Deploy the Frontend Service:

```bash
kubectl apply -f k8s/frontend-deployment.yml
kubectl apply -f k8s/frontend-service.yml
```

10. Access the Application: Use the Kind cluster IP to access the frontend service. You can get the Kind cluster IP using:

```bash
kubectl get nodes -o wide
```

11. To access on browser

```bash
kubectl port-forward -n login service/backend 4000:4000 --address=0.0.0.0
kubectl port-forward -n login service/frontend 80:80 --address=0.0.0.0
```

## Conclusion
#

This project leverages Kubernetes for orchestration, providing a scalable and resilient deployment for the application components. The manifests in the k8s folder define the necessary resources and configurations to deploy the application to a Kubernetes cluster using Kind. 