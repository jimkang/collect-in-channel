function CollectToChannel({ channel, properties }, done) {
  return collectToChannel;

  function collectToChannel(error, body) {
    if (error) {
      done(error);
    } else {
      if (body) {
        properties.forEach(addToChannel);
      }
      done(null, channel);
    }

    function addToChannel(property) {
      if (Array.isArray(property) && property.length === 2) {
        channel[property[1]] = body[property[0]];
      } else {
        channel[property] = body[property];
      }
    }
  }
}

module.exports = CollectToChannel;
