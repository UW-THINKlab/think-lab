# UW-THINKlab.github.io
UW's THINKLab Website

## Cloning the Respiratory
You can clone the respiratory by using HTTPS through the "<>Code" symbol on the
right corner. Copy the provided link, and paste it in your terminal

```bash
git clone https://github.com/UW-THINKlab/think-lab.git
```

## Installation
To modify and/or run the website you need to install several depencencies. Please run the commands 
below in your terminal before you modify and/or run the website.

All the commands below will allow you to install the necessary depenencies.

```bash
npm install
```
```bash
npm install react-bootstrap bootstrap
```
```bash
npm install -D tailwindcss
```

## Viewing the Website Locally
To view the website locally you can run npm start to view the website. The website will run on localhost3000 by default.

```bash
npm start
```
When you run npm start, the website will be open automatically on your device's browser. If the website does not open, you can paste http://localhost:3000/ in your device's broswer.

## Updating the website
After updating the website locally, run the following commands to update the website.

```bash
git add .
```
```bash
git commit -m 'message'
```
```bash
git push
```
```bash
npm run deploy
```
This will publish the updated website as GitHub page.