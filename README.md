# React GUI with NodeJS Backend to expose API to write to Cloudant DB.
# React runs on port 3000, NodeJs Backend runs on port 3001

# **** Run on IBM Cloud ***
# npm install
# make sure ./ui-react directory is built with `npm run build`. This minified code is referred to in ./server.js
# then in top level dir:
# ibmcloud login --sso
# ibmcloud target --cf
# ibmcloud app push

# **** Run locally *****
#  Window1:
# npm start   

# Window2:
# cd ui-react  
# npm start
# This will automatically start the browser with react
