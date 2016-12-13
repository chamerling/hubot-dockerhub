# hubot-dockerhub-webhook

🤖 🛥 Docker Hub to [Hubot](http://hubot.github.com) webhook to notify Hubot on DockerHub events.

## Install

- Install via npm

```
npm install hubot-dockerhub-webhook --save
```
- Add the following code in your external-scripts.json file.

```
["hubot-dockerhub-webhook"]
```

- Run hubot

```
bin/hubot
```

## Configure

In your dockerhub repository webhooks settings (https://hub.docker.com/r/YOUR_REPOSITORY/~/settings/webhooks/), add a new webhook which targets your hubot instance. The webhook URL is:

```
https://YOUR_HUBOT_INSTANCE/hubot/dockerhub?room=myroom
```

where the room query parameter is the hubot room you want to post message to.
If not defined, the room default to `process.env.HUBOT_DOCKERHUB_ROOM` then 'general'.

## License

(The MIT License)

Copyright (c) 2016 Christophe Hamerling <christophe.hamerling@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
