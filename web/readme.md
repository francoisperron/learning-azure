
## Create free static web app
```bash
az staticwebapp create \
  --name hello \
  --resource-group training \
  --location eastus2 \
  --sku Free
```
## Deploy
```bash
SWA_CLI_DEPLOYMENT_TOKEN=$(az staticwebapp secrets list \
  --name hello \
  --resource-group training \
  --query "properties.apiKey" -o tsv)
  
swa deploy dist \
  --env production \
  --app-name hello \
  --resource-group training
```

## Add custom domain 
```bash
(add CNAME before)
az staticwebapp hostname set \
  --name hello \
  --resource-group training \
  --hostname music.happydev.ca
```

## Monitor
```bash
az staticwebapp show \
  --name hello \
  --resource-group training


az staticwebapp environment show \
  --name hello \
  --resource-group training \
  --environment-name default
```
