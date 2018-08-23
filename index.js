function CollectToChannel({ channel, properties, noErrorParam }) {
  if (noErrorParam) {
    return collectToChannelWithoutErrorParam;
  } else {
    return collectToChannel;
  }

  function collectToChannel(error, body, done) {
    if (error) {
      done(error);
    } else {
      collectToChannelWithoutErrorParam(body, done);
    }
  }

  function collectToChannelWithoutErrorParam(body, done) {
    if (body) {
      properties.forEach(addToChannel);
    }
    done(null, channel);

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
