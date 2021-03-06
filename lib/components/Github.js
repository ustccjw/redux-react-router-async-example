import React, { PropTypes } from 'react'
import { connect } from 'redux/react'
import { bindActionCreators } from 'redux'
import GithubExplore from './GithubExplore'
import * as githubActions from '../actions/github'

@connect(state => ({
  github: state.github
}))
export default class Github extends React.Component {

  static propTypes = {
    children: PropTypes.any,
    dispatch: PropTypes.func.isRequired
  }

  render () {
    const { dispatch } = this.props
    const actions = bindActionCreators(githubActions, dispatch)

    return (
      <div>
        <GithubExplore actions={actions} {...this.props} />

        {/* this will render the child routes */}
        {React.cloneElement(this.props.children, { actions })}
      </div>
    )
  }
}
