import React from 'react'
import PropTypes from 'prop-types'

const MaskedWord = ({ computeDisplay, reload }) => <div className="MaskedWord">{reload === "" ? computeDisplay : reload}</div>

MaskedWord.propTypes = {
    computeDisplay: PropTypes.string.isRequired,
    reload: PropTypes.string.isRequired,
}

export default MaskedWord