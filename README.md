## When testing web push api on iOS 16.4 beta 3 I ran into some issues. Here is a quick test to showcase the issues

### Getting Started

- run ``npm install``
- run ``npm run http`` to server the content on port 3000
- run ``npm run https-tunnel`` in another terminal session to open a https localtunnel (note that localtunnel may be very slow and even return 504 Gateway timeouts)

Note: if localtunnel is not working, you can use https://localhost.run to create a tunnel to your local machine. To do so, run the following command:

``ssh -R 80:localhost:3000 localhost.run``

### Prerequisites

- Node.js

This sample is based on the following git repo: https://github.com/pirminrehm/service-worker-web-push-example.git and is
used only to showcase the issues. This style of code will not be used for production.
