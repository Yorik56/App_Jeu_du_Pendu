import React from 'react'
import PropTypes from 'prop-types'


const Letter = ({ letter, feedback, onClick }) => (
    <div className={`card ${feedback === 'untested' ? 'untested' : 'tested' }`} onClick={() => onClick(letter)}>
        <span className="letter">
            <p>{letter}</p>
        </span>
    </div>
)


Letter.propTypes = {
    letter: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf([
        'tested',
        'untested',
    ]).isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Letter