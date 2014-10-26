/**
 *
 * @param {String} midiMessage
 * @param {Track} track
 * @param {integer} index
 * @constructor
 */
function TrackSendEncoder(midiMessage, track, index)
{
	Encoder.call(this, midiMessage);
	this.connectTrack(track);
	this.connectParameter(track.getSend(index));
}

util.inherits(TrackSendEncoder, Encoder);