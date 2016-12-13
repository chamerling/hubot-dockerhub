const querystring = require('querystring');
const url = require('url');
const DEFAULT_ROOM = process.env['HUBOT_DOCKERHUB_ROOM'] || 'general';

module.exports = (robot) => {

  robot.router.post('/hubot/dockerhub', (req, res) => {
    const query = querystring.parse(url.parse(req.url).query)
    const room = query.room || DEFAULT_ROOM;

    robot.logger.debug('dockerhub got message', req.body);

    if (!req.body) {
      return res.status(400).send();
    }

    robot.messageRoom(room, `Docker repository ${req.body.repository.repo_name} updated by ${req.body.push_data.pusher} - https://hub.docker.com/r/${req.body.repository.repo_name}`);
    res.end('');
  });
};
