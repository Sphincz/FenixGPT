<h1 align="center">
  FénixGPT 🦖
</h1>

<p align="center">
  <strong>Open-Source Chatbot for ISCTE Sintra Student Course Registration</strong>
  <br/>
  <strong>Forked from DocsGPT</strong>
</p>

<div align="center">

  ![example3](https://img.shields.io/github/license/arc53/docsgpt)</a>
  
</div>

## Project structure
- Application - Flask app (main application)

- Extensions - Chrome extension

- Scripts - Script that creates similarity search index and store for other libraries. 

- Frontend - Frontend uses Vite and React

## QuickStart

Note: Make sure you have docker installed

1. Dowload and open this repository with `git clone https://github.com/Sphincz/FenixGPT.git`
2. Create an .env file in your root directory and set the env variable OPENAI_API_KEY with your openai api key and  VITE_API_STREAMING to true or false, depending on if you want streaming answers or not
   It should look like this inside:
   
   ```
   OPENAI_API_KEY=Yourkey
   VITE_API_STREAMING=true
   ```
3. Run `./run-with-docker-compose.sh`
4. Navigate to http://localhost:5173/

To stop just run Ctrl + C

## Development environments

### Spin up mongo and redis
For development only 2 containers are used from docker-compose.yaml (by deleting all services except for redis and mongo). 
See file [docker-compose-dev.yaml](./docker-compose-dev.yaml).

Run
```
docker compose -f docker-compose-dev.yaml build
docker compose -f docker-compose-dev.yaml up -d
```

### Run the backend

Make sure you have Python 3.10 or 3.11 installed.

1. Export required environment variables
```commandline
export CELERY_BROKER_URL=redis://localhost:6379/0   
export CELERY_RESULT_BACKEND=redis://localhost:6379/1
export MONGO_URI=mongodb://localhost:27017/docsgpt
```
2. Prepare .env file
Copy `.env_sample` and create `.env` with your OpenAI API token
3. (optional) Create a python virtual environment
```commandline
python -m venv venv
. venv/bin/activate
```
4. Change to `application/` subdir and install dependencies for the backend
```commandline
cd application/ 
pip install -r requirements.txt
```
5. Run the app `python wsgi.py`
6. Start worker with `celery -A app.celery worker -l INFO`

### Start frontend 
Make sure you have Node version 16 or higher.

1. Navigate to `/frontend` folder
2. Install dependencies
`npm install`
3. Run the app 
`npm run dev`

Built with [🦜️🔗 LangChain](https://github.com/hwchase17/langchain)

