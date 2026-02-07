## Create appservice
```bash
az appservice plan create \
  --name hello \
  --resource-group training \
  --sku F1 \
  --is-linux
  
WEBAPP_NAME=hello-$(uuidgen)  
  
az webapp create \
  --name ${WEBAPP_NAME} \
  --resource-group training \
  --plan hello \
  --runtime "NODE:24-lts"
  
export WEBAPP_NAME=$(az webapp list --query "[0].name" -o tsv) 
```

## Deploy
```bash
zip -r deploy.zip dist node_modules package.json package-lock.json
az webapp deploy \
  --resource-group training \
  --name ${WEBAPP_NAME} \
  --src-path deploy.zip \
  --type zip 
```
